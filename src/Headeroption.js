import React from 'react';
import { Avatar } from '@material-ui/core';
import './Headeroption.css'
const Headeroption = ({title,Icon,avatar}) => {
    return (
        <div className='header_option'>
            {Icon && <Icon className="header_option_icon" />}
            {avatar && <Avatar src={avatar}   className="header_option_avatar" />}
            <h3>{title}</h3>
        </div>
    );
};

export default Headeroption;
