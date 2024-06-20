//** Nav Bar - will keep!  */
import React from "react";
import {Link } from "react-router-dom"

 function NavBar () {
    return(
        <nav className="NavBar">
            <Link to="/">Home</Link>
            <Link to="/aboutPage">About</Link>
            {/* <Link to="/SignLoginPage">Log In / Sign Up</Link> */}
            <Link to="/contactPage">Contact Us!</Link>
            {/* <Link to="/UserPage">UserPage</Link> */}
            <Link to="/referencePage">Other Fun and Facts!</Link>
      </nav>
    )
};
    
export default NavBar;