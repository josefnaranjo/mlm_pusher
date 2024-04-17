'use client'

import React, { ReactNode, useState } from 'react';
import { GiAmericanFootballBall } from "react-icons/gi";
import { IoIosAddCircle } from "react-icons/io";
import { PiPersonArmsSpreadDuotone, PiSoccerBallFill } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { BsGearFill } from "react-icons/bs";
import "./SideBar.css";

interface SideBarIconProps {
    icon: ReactNode;
    text: string;
    onClick?: (text: string) => void;
}

const SideBar = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedChannel, setSelectedChannel] = useState('');

    const handleIconClick = (channelName: string) => {
        setSelectedChannel(channelName);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <div className='top-0 left-0 h-screen w-[72px] m-0
            flex flex-col bg-green-400 text-white shadow-lg'>
            <SideBarIcon icon={<IoIosAddCircle size={"40px"} />} text="Add Channel" />
            <Divider />
            <SideBarIcon icon={<GiAmericanFootballBall size={"30px"} />} text="Football Friends" onClick={handleIconClick} />
            <SideBarIcon icon={<PiSoccerBallFill size={"40px"} />} text="Soccer Saurians" onClick={handleIconClick} />
            <SideBarIcon icon={<PiPersonArmsSpreadDuotone size={"30px"} />} text="Communication" onClick={handleIconClick} />
            <SideBarIcon icon={<IoGameController size={"30px"} />} text="Gaming Group" onClick={handleIconClick} />
            <Divider />
            <SideBarIcon
                icon={<BsGearFill size={"30px"} />}
                text="Settings"
            />
            {popupVisible && <Popup channel={selectedChannel} onClose={handleClosePopup} />}
        </div>
    )
}

const SideBarIcon = ({ icon, text, onClick }: SideBarIconProps) => (
    <div className="sidebar-icon group" onClick={() => onClick && onClick(text)}>
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;


interface PopupProps {
    channel: string;
    onClose: () => void;
}

const Popup = ({ channel, onClose }: PopupProps) => (
    <div className="popup" onClick={onClose}>
        <ul className="popup-list">
            <li className="popup-item">Edit Name of {channel}</li>
            <Divider />
            <li className="popup-item">Add Member to {channel}</li>
            <Divider />
            <li className="popup-item">Edit Member of {channel}</li>
            <Divider />
            <li className="popup-item">Change Picture of {channel}</li>
            <Divider />
            <li className="popup-item flex bg-red-400 justify-center rounded-full w-auto">Leave {channel}</li>

        </ul>
    </div>
);

export default SideBar;
