import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import React from 'react'
import SidebarRow from './SidebarRow'
import "./SidebarRow.css";
import { useStateValue } from "../../../StateProvider";

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
   
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlags} title="Pages"/>
            <SidebarRow Icon={People} title="Friends"/>
            <SidebarRow Icon={Chat} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="MarketPlace"/>
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMore} title="MarketPlace"/>
        </div>
    )
}

export default Sidebar
