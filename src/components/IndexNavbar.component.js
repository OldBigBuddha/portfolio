import React from "react";
import { Link } from "react-router-dom";

const IndexNavbar = () => {
  return(
    <nav id="index--nav">
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/works">Works</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default IndexNavbar;