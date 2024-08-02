"use client";

import React, { useEffect, useRef, useState } from "react";
import MessageInput from "./components/message-column/MessageInput";
import MessageNav from "./components/message-column/MessageNav";
import ExistingUserMessages from "./components/message-column/Messages";
import avatar from "../public/avatar.png";
import axios from "axios";
import { StaticImageData } from "next/image";
import { currentUser } from "@/lib/current-user";

interface Message {
  time: string;
  text: string;
  id: string;
  createdAt: Date;
}

interface NEWUserMessage {
  name: string;
  img: StaticImageData | string | null;
  userID: string;
  messages: Message[];
}

interface MessageLogProps {
  channelName: string;
  channelId: string;
  userId: string;
}

const MessageLog = ({ channelName, channelId, userId }: MessageLogProps) => {
  const [userMessages, setUserMessages] = useState<NEWUserMessage[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [currentUserImage, setCurrentUserImage] = useState<string | StaticImageData>(avatar);
  const [selectedChannelName, setSelectedChannelName] = useState<string>(channelName);
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await currentUser();
      if (user) {
        setCurrentUserId(user.id);
        setCurrentUserImage(user.image || avatar); // Set the current user's image
      } else {
        console.error("User is not authenticated");
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (channelId) {
          setSelectedChannelId(channelId);
          setSelectedChannelName(channelName);
          scrollToBottom();

          const response = await axios.get(`/api/channels/${channelId}`);
          const channel = response.data;
          const messages = channel.messages;
          console.log('Fetched messages:', messages);
          
          // Convert and compare messages
          const newMessages = convertToUserMessages(messages);
          if (JSON.stringify(newMessages) !== JSON.stringify(userMessages)) {
            setUserMessages(newMessages);
            scrollToBottom();
          }
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();

    // Poll for new messages every 5 seconds
    const intervalId = setInterval(fetchMessages, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [channelId, userId, channelName, userMessages]);

  const createNewMessage = async (content: string, channelId: string | null, userId: string): Promise<string | null> => {
    const user = await currentUser();

    if (!user) {
      console.error("Unauthorized access");
      return null;
    }

    try {
      const response = await fetch('/api/directMessages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, channelId, userId }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Message created:', data);
        return data.id;
      } else {
        const errorData = await response.json();
        console.error('Failed to create message:', errorData);
        return null;
      }
    } catch (error) {
      console.error("Failed to create message:", error);
      return null;
    }
  };

  const sendMessage = async (message: string): Promise<void> => {
    try {
      const userId = currentUserId;

      if (selectedChannelId) {
        const messageId = await createNewMessage(message, selectedChannelId, userId);
        if (messageId != null) {
          updateLocalMessages(userId, message, messageId);
          scrollToBottom();
        }
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const updateLocalMessages = (userId: string, message: string, messageId: string) => {
    const copyNewUserMessages = [...userMessages];
    const currentTime = new Date().toISOString();

    const newMessage = {
      time: formatTime(currentTime),
      text: message,
      id: messageId,
      createdAt: new Date(currentTime),
    };

    // Check if the last entry in userMessages is for the same user
    if (copyNewUserMessages.length > 0 && copyNewUserMessages[copyNewUserMessages.length - 1].userID === userId) {
      copyNewUserMessages[copyNewUserMessages.length - 1].messages.push(newMessage);
    } else {
      const user = copyNewUserMessages.find(userMessage => userMessage.userID === userId);
      const userName = user ? user.name : "User";
      const userImg = user ? user.img : currentUserImage; // Use current user's image if user is not found

      copyNewUserMessages.push({
        name: userId === currentUserId ? "You" : userName,
        img: userId === currentUserId ? currentUserImage : userImg,
        userID: userId,
        messages: [newMessage],
      });
    }

    setUserMessages(copyNewUserMessages);
  };

  const convertToUserMessages = (messages: Array<any>): NEWUserMessage[] => {
    const convertedUserMessages: NEWUserMessage[] = [];
    let lastUserID: string = "";
    let currentUserMessage: NEWUserMessage = {
      name: "User",
      messages: [],
      img: null,
      userID: "",
    };

    messages.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

    messages.forEach((message) => {
      if (message.userId === lastUserID) {
        currentUserMessage.messages.push(convertMessageBody(message));
        return;
      }
      if (lastUserID !== "") {
        convertedUserMessages.push(currentUserMessage);
      }
      currentUserMessage = {
        name: message.userId === currentUserId ? "You" : message.user.name, // Ensure the user name is included in the response
        img: message.user.image || avatar, // Ensure the user image is included in the response
        userID: message.userId,
        messages: [convertMessageBody(message)],
      };
      lastUserID = message.userId;
    });

    if (currentUserMessage.messages.length > 0) {
      convertedUserMessages.push(currentUserMessage);
    }
    console.log('Converted user messages:', convertedUserMessages);
    return convertedUserMessages;
  };

  const convertMessageBody = (message: any): Message => {
    return {
      time: formatTime(message.createdAt),
      text: message.content,
      id: message.id,
      createdAt: new Date(message.createdAt),
    };
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Los_Angeles', // Pacific Time Zone
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <MessageNav channelName={selectedChannelName} channelId={selectedChannelId} />
      <div className="flex flex-col justify-between h-full">
        <div className="overflow-auto flex-grow max-h-[1000px]">
          {userMessages.map((userMessage, index) => (
            <ExistingUserMessages
              key={index}
              img={userMessage.img || avatar}
              name={userMessage.name}
              userID={userMessage.userID}
              messages={userMessage.messages}
            />
          ))}
          <div ref={messageEndRef} />
        </div>
        <MessageInput onSendMessage={sendMessage} />
      </div>
    </>
  );
};

export default MessageLog;
