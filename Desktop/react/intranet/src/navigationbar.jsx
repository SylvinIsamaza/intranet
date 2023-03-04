import React from "react";
import { ReactDOM } from "react";
import './index.css'
import search from './icons/search.png'
import notification from './icons/notification.png'

function NavigationBar(){
    return(
        <div className="navigationbar">
<input placeholder="search"/>
<img src={search} alt='search' className="searchicon"/>
<button className="profile"></button>
<img src={notification} alt='search' className="notificationicon"/>

{/* <div className="profile"></div> */}

        </div>
    )
}
export default NavigationBar