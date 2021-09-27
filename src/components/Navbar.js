import React from "react";
import myLogo from "../Logo8.png";
import {Link} from "react-scroll";
// React FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
<div className="container" >

  <a className="navbar-brand" href="/#"><img className='myLogo' src={myLogo} alt="Kevin Fernandez"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color:"#fffAF0"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" className="nav-link" href="#!">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="about"  className="nav-link" href="#!">About Me</Link>
      </li>
      <li className="nav-item">
        <Link smooth={true} to="services" className="nav-link" href="#!">Services</Link>
      </li>
      <li className="nav-item">
        <Link ksmooth={true} to="experience" className="nav-link" href="#!">Experience </Link>
      </li>
      
      <li className="nav-item">
        <Link smooth={true} to="contacts" className="nav-link" href="#!">Contacts</Link>
      </li>
    </ul>
    
  </div>
  </div>
</nav>
  )
}

export default Navbar;
