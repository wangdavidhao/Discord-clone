import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';   
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <h3>Ma room</h3>
                <ExpandMoreIcon></ExpandMoreIcon>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon></ExpandMoreIcon>
                        <h4>Text channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"></AddIcon>
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                    <SidebarChannel/>
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
                <div className="sidebar__voiceInfo">
                    <h4>Voix connectée</h4>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon></InfoOutlinedIcon>
                    <CallIcon></CallIcon>
                </div>

            </div>

            <div className="sidebar__profile">
                <Avatar></Avatar>
                <div className="sidebar__profileInfo">
                    <h3>wangdav_id</h3>
                    <p>#GYJY68GY</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>

            

        </div>
    )
}

export default Sidebar;
