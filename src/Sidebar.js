import React, { useEffect , useState} from 'react'
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
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, {auth} from './firebase';

function Sidebar() {

    const user = useSelector(selectUser);

    const [channels, setChannels] = useState([]);

    //Chaque refresh est appelé une fois et à chaque changement/action si un changement dans channels (snapshot) on maj le state channels, setChannels
    //id du doc et data (destructure apres), ici une seule data : channelName
    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id:doc.id,
                channel:doc.data(),
            })))
        ))
    }, []);


    //Si clique sur ajouter channel on ajoute dans la collection channels
    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name : ");

        //Le premier nom de l'attribut ds firebase le 2eme celui qu'on passe en param
        if(channelName){
            db.collection('channels').add({
                channelName:channelName,
            })
        }
    }
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
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel"></AddIcon>
                </div>
                <div className="sidebar__channelsList">

                    {channels.map(({id, channel} )=> (
                        <SidebarChannel key={id} id={id} channelName={channel.channelName}/>   
                    ))}
                    {/*channelNam et channelName dans firebase*/}

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
                <Avatar src={user.photo} onClick={() => auth.signOut()}></Avatar>
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,6)}</p>
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
