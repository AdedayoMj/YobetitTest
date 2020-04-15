import React from "react";
import { NavLink } from "react-router-dom";
import '../Navbar/nav.css'


const SignedInLinks = ({SignOut,user}) => {
  return (
    <ul className="right">
        <li><NavLink to='/'>Overview</NavLink></li>
        <li><NavLink to="#" onClick={()=>SignOut()}>Logout</NavLink></li>
        <li><span className='btn btn-floating pink lighten-1'>{user.name.charAt(0)}</span></li>
    </ul>
  );
};

export default SignedInLinks;