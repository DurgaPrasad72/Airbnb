import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";
function Header() {
  
        return (
        <div className="header">
            <Link to="/">
           <img className="header__icon"
           src="https://th.bing.com/th/id/OIP.EUSn30_gA6wCium91EE-jwHaHa?w=163&h=180&c=7&o=5&dpr=1.1&pid=1.7" alt="airbnb" />
         </Link>
         <div className="heder__centre">
             <input type="text"/>
             <SearchIcon />
         </div>
         <div  className="header__right">
             <p>BECOME A HOST</p>
             <LanguageIcon />
             <ExpandMoreIcon />
          <Avatar />
            
        
            
         </div>
         </div>
         
    )
}

export default Header;
