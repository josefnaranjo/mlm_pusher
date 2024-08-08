"use client";

import React, { useEffect, useState, useRef } from "react";
import MessageInput from "./components/message-column/MessageInput";
import MessageNav from "./components/message-column/MessageNav";
import ExistingUserMessages from "./components/message-column/Messages";
import axios from "axios";
import { currentUser } from "@/lib/current-user";
import usePusher from "./usePusher";
import DefaultDisplay from "./components/message-column/DefaultDisplay";

interface Message {
  id: string;
  createdAt: string;
  text: string;
  displayTime: string;
  userId: string;
  userName: string;
  userImage: string | null;
}

interface NewMessage {
  content: string;
  channelId: string;
  userId: string;
  userName: string;
  userImage: string;
  createdAt: string;
}

interface UserMessage {
  name: string;
  img: string;
  userID: string;
  messages: Message[];
}

interface MessageLogProps {
  channelName: string;
  channelId: string | null;
  userId: string | null;
  userName: string;
}

const MessageLog = ({
  channelName,
  channelId,
  userId,
  userName,
}: MessageLogProps) => {
  const avatar =
    "https://cdn4.iconfinder.com/data/icons/office-thick-outline/36/office-14-256.png";

  const [userMessages, setUserMessages] = useState<UserMessage[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string>("");
  const [currentUserName, setCurrentUserName] = useState<string>("Anonymous");
  const [currentUserImage, setCurrentUserImage] = useState<string>(avatar);
  const [selectedChannelName, setSelectedChannelName] =
    useState<string>(channelName);
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(
    channelId
  );
  const [selectedUserId, setSelectedUserId] = useState<string | null>(userId);
  const [selectedUserName, setSelectedUserName] = useState<string>(userName);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Define the handleNewMessage function before using it in the hook
  const handleNewMessage = (message: NewMessage) => {
    setUserMessages((prevMessages) => {
      const existingIds = new Set(
        prevMessages.flatMap((userMessage) =>
          userMessage.messages.map((msg) => msg.id)
        )
      );
      const newMessage = convertMessageBody(message);
      if (existingIds.has(newMessage.id)) {
        return prevMessages; // Skip duplicates
      }
      const updatedMessages = convertToUserMessages([
        ...prevMessages.flatMap((userMsg) => userMsg.messages),
        newMessage,
      ]);

      return updatedMessages;
    });
    scrollToBottom(); // Ensure we scroll down for new messages
  };

  // Use Pusher hook
  usePusher(channelName, "new-message", handleNewMessage);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await currentUser();
      if (user) {
        setCurrentUserId(user.id);
        setCurrentUserName(user.name || "Anonymous");
        setCurrentUserImage(user.image || avatar);
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
          setSelectedUserId(null);

          const response = await axios.get(
            `/api/directMessages?id=${channelId}`
          );
          const channelMessages = response.data.map((msg: any) =>
            convertMessageBody(msg)
          );

          const newMessages = convertToUserMessages(channelMessages);
          setUserMessages(newMessages);
        } else if (userId) {
          setSelectedUserId(userId);
          setSelectedUserName(userName);
          setSelectedChannelId(null);

          const response = await axios.get(`/api/directMessages/${userId}`);
          const messages = response.data.map((msg: any) =>
            convertMessageBody(msg)
          );

          const newMessages = convertToUserMessages(messages);
          setUserMessages(newMessages);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [channelId, userId, channelName, userName]);

  const handleSendMessage = async (content: string): Promise<void> => {
    try {
      let channelIdentifier = selectedChannelId;
      if (!channelIdentifier && selectedUserId) {
        // Construct channel identifier for direct messages
        channelIdentifier = [currentUserId, selectedUserId].sort().join("-");
      }

      if (channelIdentifier && currentUserId) {
        const newMessage: NewMessage = {
          content,
          channelId: channelIdentifier,
          userId: currentUserId,
          userName: currentUserName,
          userImage: currentUserImage, // Ensure current user's image is used
          createdAt: new Date().toISOString(), // Set the current date and time here
        };

        // Send the message to the backend, which will handle Pusher
        await axios.post(`/api/pusher`, {
          channelName: channelIdentifier,
          eventName: "new-message",
          message: newMessage,
        });

        // Optimistically update the UI
        handleNewMessage(newMessage);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const deleteMessage = async (messageId: string): Promise<void> => {
    try {
      const response = await axios.delete(`/api/messages/${messageId}`);
      if (response.status === 200) {
        deleteMessageFromState(messageId);
      }
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const deleteMessageFromState = (messageId: string) => {
    setUserMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((userMessage) => ({
        ...userMessage,
        messages: userMessage.messages.filter((msg) => msg.id !== messageId),
      }));
      return updatedMessages.filter(
        (userMessage) => userMessage.messages.length > 0
      );
    });
  };

  const convertToUserMessages = (messages: Message[]): UserMessage[] => {
    const convertedUserMessages: UserMessage[] = [];
    let lastUserID: string = "";
    let currentUserMessage: UserMessage = {
      name: "User",
      messages: [],
      img: "",
      userID: "",
    };

    // Sort messages in ascending order
    messages.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    messages.forEach((message) => {
      if (message.userId === lastUserID) {
        currentUserMessage.messages.push(message);
      } else {
        if (lastUserID !== "") {
          convertedUserMessages.push(currentUserMessage);
        }
        currentUserMessage = {
          name: message.userId === currentUserId ? "You" : message.userName,
          img:
            message.userId === currentUserId
              ? currentUserImage
              : message.userImage || avatar,
          userID: message.userId,
          messages: [message],
        };
        lastUserID = message.userId;
      }
    });

    if (currentUserMessage.messages.length > 0) {
      convertedUserMessages.push(currentUserMessage);
    }
    return convertedUserMessages;
  };

  const validateAndFormatDate = (dateString: string | undefined): string => {
    if (!dateString) {
      console.error("Undefined dateString:", dateString);
      return new Date().toISOString(); // Return current date as fallback
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid dateString:", dateString);
      return new Date().toISOString(); // Return current date as fallback
    }
    return date.toISOString();
  };

  const convertMessageBody = (message: any): Message => {
    console.log("Converting message:", message); // Log message data

    const validDate = validateAndFormatDate(message.createdAt);
    const date = new Date(validDate);
    const localTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return {
      id: message.id || message.userId + message.createdAt, // Ensure unique ID
      createdAt: validDate,
      text: message.content,
      displayTime: localTime,
      userId: message.userId,
      userName: message.user?.name || "Anonymous",
      userImage: message.user?.image || avatar,
    };
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid dateString:", dateString); // Debug log
      return "Invalid Date";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const organizeMessagesByDate = (userMessages: UserMessage[]) => {
    const organizedMessages: (UserMessage | { date: string })[] = [];
    let lastDate: string | null = null;

    // Sort all messages by date
    const allMessages = userMessages
      .flatMap((userMessage) => userMessage.messages)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );

    allMessages.forEach((message) => {
      const messageDate = formatDate(message.createdAt);

      if (lastDate !== messageDate) {
        organizedMessages.push({ date: messageDate });
        lastDate = messageDate;
      }

      const lastUserMessage = organizedMessages[organizedMessages.length - 1];
      if (
        lastUserMessage &&
        "userID" in lastUserMessage &&
        lastUserMessage.userID === message.userId
      ) {
        (lastUserMessage as UserMessage).messages.push(message);
      } else {
        organizedMessages.push({
          name: message.userId === currentUserId ? "You" : message.userName,
          img:
            message.userId === currentUserId
              ? currentUserImage
              : message.userImage || avatar,
          userID: message.userId,
          messages: [message],
        });
      }
    });

    return organizedMessages;
  };

  const organizedMessages = organizeMessagesByDate(userMessages);

  return (
    <>
      {!selectedChannelId && !selectedUserId ? (
        <DefaultDisplay />
      ) : (
        <>
          <MessageNav
            channelName={
              selectedChannelId
                ? selectedChannelName
                : selectedUserName || "Direct Messages"
            }
            channelId={selectedChannelId}
          />
          <div className="flex flex-col justify-between h-full">
            <div className="overflow-auto flex-grow h-[500px] max-h-screen">
              {organizedMessages.map((message, index) =>
                "date" in message ? (
                  <div
                    key={index}
                    className="relative text-center my-2 text-lime-500"
                  >
                    <div className="flex items-center">
                      <div className="flex-grow h-px bg-lime-500"></div>
                      <span className="px-4">{message.date}</span>
                      <div className="flex-grow h-px bg-lime-500"></div>
                    </div>
                  </div>
                ) : (
                  <ExistingUserMessages
                    key={index}
                    img={message.img || avatar}
                    name={message.name}
                    userID={message.userID}
                    messages={message.messages}
                    onDeleteMessage={deleteMessage}
                    currentUserId={currentUserId}
                  />
                )
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="px-2 border-t">
              <MessageInput onSendMessage={handleSendMessage} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MessageLog;
