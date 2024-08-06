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
  userImage: string;
}

interface NewMessage {
  content: string;
  channelId: string;
  userId: string;
  userName: string;
  userImage: string;
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

  const { messages: pusherMessages } = usePusher(channelName, "new-message");

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
          if (JSON.stringify(newMessages) !== JSON.stringify(userMessages)) {
            setUserMessages(newMessages);
          }
        } else if (userId) {
          setSelectedUserId(userId);
          setSelectedUserName(userName);
          setSelectedChannelId(null);

          const response = await axios.get(`/api/directMessages?id=${userId}`);
          const messages = response.data.map((msg: any) =>
            convertMessageBody(msg)
          );

          const newMessages = convertToUserMessages(messages);
          if (JSON.stringify(newMessages) !== JSON.stringify(userMessages)) {
            setUserMessages(newMessages);
          }
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [channelId, userId, channelName, userName]);

  useEffect(() => {
    if (pusherMessages.length) {
      setUserMessages((prevMessages) => {
        const existingIds = new Set(
          prevMessages.flatMap((userMessage) =>
            userMessage.messages.map((msg) => msg.id)
          )
        );
        const newMessages = pusherMessages
          .map((msg) => convertMessageBody(msg))
          .filter((msg) => !existingIds.has(msg.id));

        const updatedMessages = convertToUserMessages([
          ...prevMessages.flatMap((userMsg) => userMsg.messages),
          ...newMessages,
        ]);

        return updatedMessages;
      });
    }
  }, [pusherMessages]);

  useEffect(() => {
    scrollToBottom();
  }, [userMessages]);

  const handleSendMessage = async (content: string): Promise<void> => {
    try {
      if (selectedChannelId && currentUserId) {
        const newMessage: NewMessage = {
          content,
          channelId: selectedChannelId,
          userId: currentUserId,
          userName: currentUserName,
          userImage: currentUserImage || avatar,
        };

        // Send the message to the backend, which will handle Pusher
        await axios.post(`/api/pusher`, {
          channelName,
          eventName: "new-message",
          message: newMessage,
        });
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
          img: message.userImage || avatar,
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

  const convertMessageBody = (message: any): Message => {
    const date = new Date(message.createdAt);
    const localTime = !isNaN(date.getTime())
      ? date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "Invalid Date";

    return {
      id: message.id,
      createdAt: message.createdAt,
      text: message.content,
      displayTime: localTime,
      userId: message.userId,
      userName: message.user?.name || "Anonymous",
      userImage: message.user?.image || avatar,
    };
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Los_Angeles",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
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

    userMessages.forEach((userMessage) => {
      userMessage.messages.forEach((message) => {
        const messageDate = formatDate(message.createdAt);

        if (lastDate !== messageDate) {
          organizedMessages.push({ date: messageDate });
          lastDate = messageDate;
        }

        const lastUserMessage = organizedMessages[organizedMessages.length - 1];
        if (
          lastUserMessage &&
          "userID" in lastUserMessage &&
          lastUserMessage.userID === userMessage.userID
        ) {
          (lastUserMessage as UserMessage).messages.push(message);
        } else {
          organizedMessages.push({
            ...userMessage,
            messages: [message],
          });
        }
      });
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
