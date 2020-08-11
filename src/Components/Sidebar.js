import React from "react";
import "../css/sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
      <SidebarOption Icon={MailOutlineIcon} text="Message" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={ListAltIcon} text="List" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmark" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebarTweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
