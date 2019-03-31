import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

function NavBar(props){
  return (
     <div className="navbar">
        <div className="navchild">
           <Link to="/">
             Home
           </Link>
        </div>

        <div className="navchild">
           <Link to="/recipes">
             Recipes
           </Link>
        </div>
     </div>
  )
}


export default NavBar;
