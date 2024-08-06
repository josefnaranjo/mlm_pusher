"use client";

import { currentUser } from "@/lib/current-user";
import { User } from "@prisma/client";
import React, { useState, useEffect } from "react";

import NameForm from "./NameForm";
import UserProfileFooter from "./UserProfileFooter";
import MessageLog from "./MessageLog";
import SideBar from "./components/SideBar/SideBar/SideBar";
import UserList from "./components/dm-list/dm-list";
import ChannelList from "./components/ChannelList/ChannelList";

export default function Home() {
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);
  const [selectedChannelName, setSelectedChannelName] = useState<string>("");
  const [selectedChannelId, setSelectedChannelId] = useState<string | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedUserName, setSelectedUserName] = useState<string>(""); // For storing the user's name
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user: User | null = await currentUser();
      if (user) setUser(user);
    };

    fetchUser();
  }, []);

  if (!user) return null; // Ensure we have a user before rendering

  return (
    <div className="relative h-screen overflow-hidden">
      {!user.name && <NameForm setUser={setUser} user={user} />}
      <div className="project-container h-full">
        <div className="main-rows bg-white h-full">
          {/* Side Channels Container */}
          <div className="side-channels-container">
            <SideBar onSelectServer={setSelectedServerId} />
          </div>

          {/* Direct Messages Container */}
          <div className="relative direct-messages-container">
            {selectedServerId ? (
              <ChannelList
                serverId={selectedServerId}
                onChannelSelect={(channelId, channelName) => {
                  setSelectedChannelId(channelId);
                  setSelectedChannelName(channelName);
                  setSelectedUserId(null); // Reset user selection
                  setSelectedUserName(""); // Reset user name
                }}
              />
            ) : (
              <UserList
                userId={selectedUserId || ""}
                onSelectUser={(userId, userName) => {
                  // Ensure you pass both userId and userName
                  setSelectedUserId(userId);
                  setSelectedUserName(userName);
                  setSelectedChannelId(null); // Reset channel selection
                  setSelectedChannelName(""); // Reset channel name
                }}
              />
            )}
            <UserProfileFooter user={user} />
          </div>

          {/* Message Log Container */}
          <div className="message-log-container">
            {selectedUserId ? (
              <MessageLog
                userId={selectedUserId}
                channelName=""
                channelId=""
                userName={selectedUserName}
              />
            ) : (
              <MessageLog
                channelName={selectedChannelName}
                channelId={selectedChannelId || ""}
                userId=""
                userName=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
