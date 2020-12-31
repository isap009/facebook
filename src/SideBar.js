import React from 'react'
import SideBarRow from "./SideBarRow.js";
import "./SideBar.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import userEvent from '@testing-library/user-event';
import { useStateValue } from './StateProvider.js';

function SideBar() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="sidebar">
        <SideBarRow src={user.photoURL} title={user.displayName}/>
      <SideBarRow Icon={LocalHospitalIcon} title="Covid-19 Information center"/>
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SideBarRow Icon={PeopleIcon} title="Friends"></SideBarRow>
      <SideBarRow Icon={ChatIcon} title="Messenger"></SideBarRow>
<SideBarRow Icon={VideoLibraryIcon} title="Videos"></SideBarRow>
<SideBarRow Icon={ExpandMoreOutlinedIcon} tile="Market Place"></SideBarRow>
        </div>
    )
}

export default SideBar
