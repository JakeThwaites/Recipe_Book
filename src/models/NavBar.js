import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
   return (
      <div className="navbar">

         <div className="navchild">
            <Link to="/">
               <Logo />
            </Link>
         </div>

         <div className="navchild">
            <Link to="/Explore" style={{ textDecoration: 'none' }} className="navlink">
               <ExploreButton />
            </Link>
         </div>

         <div className="navchild">
            <Link to="/CreatureList" style={{ textDecoration: 'none' }} className="navlink">
               CreatureList
               </Link>
         </div>
      </div>
   )
}


export default NavBar;
