import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Headeroption from './Headeroption';
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import ChatIcon from '@material-ui/icons/Chat'
import  NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessCenter  from '@material-ui/icons/BusinessCenter';
const Header = () => {
    return (
        <div className='header'>
          <div className="header_left"> 
          <div className="header_left_image">
            <img src="https://www.svgrepo.com/show/157006/linkedin.svg" alt="linkedin logo"   />
          </div>
          <div className="header_left_search">
            <SearchIcon className='search_icon'/>
           <input type="text" className="header_searchbox" />
          </div>
          </div>
          <div className="header_right">
         <Headeroption title={"Home"} Icon={HomeIcon}/>
         <Headeroption title={"My network"} Icon={SupervisorAccountIcon}/>
         <Headeroption title={"jobs"} Icon={BusinessCenter}/>
         <Headeroption title={"messages"} Icon={ChatIcon}/>
         <Headeroption title={"notifications"} Icon={NotificationsIcon} />
         <Headeroption title={"me"} avatar={"https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_960_720.png"}/>
          </div>
        </div>
    );
};

export default Header;