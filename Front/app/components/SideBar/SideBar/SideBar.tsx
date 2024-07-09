import React, { useState, useEffect, MouseEvent } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { BsGearFill } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import "./SideBar.css";

import SideBarIcon from "../SideBarIcon/SideBarIcon";
import Divider from "../Divider/Divider";
import Popup from "../Popup/Popup";
import SettingsPopup from "../SettingsPopup/SettingsPopup";
import AddPopup from "../AddPopup/AddPopup";
import FriendPopup from "../FriendPopup/FriendPopup";

import { useOutsideClick } from "./useOutsideClick"; // Import the custom hook

interface Server {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  inviteCode?: string;
}

interface SideBarProps {
  onSelectServer: (serverId: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ onSelectServer }) => {
  const [servers, setServers] = useState<Server[]>([]);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [popupVisible, setPopupVisible] = useState(false);
  const [settingsPopupVisible, setSettingsPopupVisible] = useState(false);
  const [addPopupVisible, setAddPopupVisible] = useState(false);
  const [friendPopupVisible, setFriendPopupVisible] = useState(false);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newServerName, setNewServerName] = useState("");
  const [inviteCode, setInviteCode] = useState(""); // New state for invite code, needs to get and set

  // Gets servers for current user
  useEffect(() => {
    const fetchServers = async () => {
      try {
        const response = await fetch("/api/servers");
        if (!response.ok) {
          throw new Error("Failed to fetch servers");
        }
        const data: Server[] = await response.json();
        setServers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServers();
  }, []);

  const handleIconRightClick = async (
    text: string | undefined,
    event: MouseEvent<HTMLDivElement>,
    serverId: string | undefined
  ) => {
    event.preventDefault();
    if (text && event) {
      const selectedServer = servers.find((server) => server.id === serverId);
      setSelectedServer(selectedServer || null);

      if (serverId) {
        try {
          const response = await fetch(`/api/userServerActions?serverId=${serverId}`);
          if (!response.ok) {
            throw new Error("Failed to fetch invite code");
          }
          const { inviteCode } = await response.json();
          setInviteCode(inviteCode);
        } catch (error) {
          console.error(error);
        }
      }

      const { clientX, clientY } = event;
      setPopupPosition({ x: clientX, y: clientY });
      setPopupVisible(true);
      setSettingsPopupVisible(false);
      setAddPopupVisible(false);
      setFriendPopupVisible(false);
      setIsEditing(false); // Reset edit mode when switching servers
    }
  };

  const handleIconClick = (serverId: string) => {
    const selectedServer = servers.find((server) => server.id === serverId);
    setSelectedServer(selectedServer || null);
    onSelectServer(serverId);
    if (popupVisible) {
      setPopupVisible(false);
    }
    if (settingsPopupVisible) {
      setSettingsPopupVisible(false);
    }
    if (addPopupVisible) {
      setAddPopupVisible(false);
    }
    if (friendPopupVisible) {
      setFriendPopupVisible(false);
    }
  };

  const handleSettingsClick = (
    text?: string,
    event?: MouseEvent<HTMLDivElement>
  ) => {
    if (event) {
      const { clientX, clientY } = event;
      setPopupPosition({ x: clientX, y: clientY });
      setSettingsPopupVisible((prev) => !prev);
      setPopupVisible(false);
      setAddPopupVisible(false);
      setFriendPopupVisible(false);
    }
  };

  const handleAddServerClick = (
    text?: string,
    event?: MouseEvent<HTMLDivElement>
  ) => {
    if (event) {
      const { clientX, clientY } = event;
      setPopupPosition({ x: clientX, y: clientY });
      setAddPopupVisible((prev) => !prev);
      setSettingsPopupVisible(false);
      setPopupVisible(false);
      setFriendPopupVisible(false);
    }
  };

  const handleFriendClick = (
    text?: string,
    event?: MouseEvent<HTMLDivElement>
  ) => {
    if (event) {
      const { clientX, clientY } = event;
      setPopupPosition({ x: clientX, y: clientY });
      setFriendPopupVisible((prev) => !prev);
      setAddPopupVisible(false);
      setSettingsPopupVisible(false);
      setPopupVisible(false);
    }
  };

  const handleAccountDetails = () => {
    window.location.href = "/settings"; // Navigate to the settings page
  };

  const handleClosePopup = () => setPopupVisible(false);
  const handleCloseSettingsPopup = () => setSettingsPopupVisible(false);
  const handleCloseAddPopup = () => setAddPopupVisible(false);
  const handleCloseFriendPopup = () => setFriendPopupVisible(false);

  const handleLeaveServer = async () => {
    try {
      const response = await fetch('/api/userServerActions', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ serverId: selectedServer?.id }),
      });

      if (response.ok) {
        console.log('Successfully left the server');
        setServers((prevServers) =>
          prevServers.filter((server) => server.id !== selectedServer?.id)
        );
        setPopupVisible(false);
        setSelectedServer(null);
      } else {
        const errorData = await response.json();
        console.error('Failed to leave server:', errorData);
      }
    } catch (error) {
      console.error('Error leaving server:', error);
    }
  };

  const handleEditServerName = async () => {
    try {
      const response = await fetch("/api/servers", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: selectedServer?.id, name: newServerName }),
      });

      if (response.ok) {
        console.log("Server name updated successfully");
        setServers((prevServers) =>
          prevServers.map((server) =>
            server.id === selectedServer?.id
              ? { ...server, name: newServerName }
              : server
          )
        );
        setIsEditing(false);
        setPopupVisible(false);
      } else {
        const errorData = await response.json();
        console.error("Failed to update server name:", errorData);
      }
    } catch (error) {
      console.error("Error updating server name:", error);
    }
  };

  // Use the custom hook for outside click detection
  const popupRef = useOutsideClick(() => setPopupVisible(false));

  /* 
  This updates the UI with the new server whether created or joined, that way we don't have to refresh 
  and it looks much cleaner than refreshing
  */
  const handleServerAdded = (newServer: Server) => {
    setServers((prevServers) => [...prevServers, newServer]);
  };

  return (
    <div className="top-0 left-0 h-full w-[72px] m-0 flex flex-col text-white shadow-lg sidebar-container">
      <SideBarIcon
        icon={<IoPersonAdd size={"30px"} />}
        text="Friends"
        onClick={handleFriendClick}
      />
      <SideBarIcon
        icon={<IoIosAddCircle size={"40px"} />}
        text="Add Server"
        onClick={handleAddServerClick}
      />
      <Divider />
      {servers.map((server) => (
        <SideBarIcon
          key={server.id}
          text={server.name}
          onClick={() => handleIconClick(server.id)}
          onContextMenu={(event) =>
            handleIconRightClick(server.name, event, server.id)
          }
        />
      ))}
      <Divider />
      <SideBarIcon
        icon={<BsGearFill size={"30px"} />}
        text="Settings"
        onClick={handleSettingsClick}
      />
      {popupVisible && (
        <Popup
          server={selectedServer?.name || ""}
          onClose={handleClosePopup}
          onLeave={handleLeaveServer}
          onEdit={() => setIsEditing(true)}
          isEditing={isEditing}
          newServerName={newServerName}
          setNewServerName={setNewServerName}
          handleEditServerName={handleEditServerName}
          position={popupPosition}
          inviteCode={inviteCode}
          ref={popupRef} // Attach the ref to the popup
        />
      )}
      {settingsPopupVisible && (
        <SettingsPopup
          onAccountDetails={handleAccountDetails} // Add the navigation handler
          onClose={handleCloseSettingsPopup}
          position={popupPosition}
        />
      )}
      {addPopupVisible && (
        <AddPopup onClose={handleCloseAddPopup} position={popupPosition} onServerAdded={handleServerAdded} />
      )}
      {friendPopupVisible && (
        <FriendPopup
          onClose={handleCloseFriendPopup}
          position={popupPosition}
        />
      )}
    </div>
  );
};

export default SideBar;
