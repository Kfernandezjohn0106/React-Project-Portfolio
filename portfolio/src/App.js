import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import AboutMe from "./components/Aboutme.js";
import Services from "./components/Services.js";
import Experience from "./components/Experience.js";
import Testimonial from "./components/Testimonial.js";
import Contacts from "./components/Contacts.js";
import Footer from "./components/Footer.js";



function App () {
  return (
    <React.Fragment>
      <Particles
      className="particles-canvas"
        params={{particles:{number:{value:30,
        density:{
          enable:true,value_area:900
        }},
      shape:{
        type: "circle",
        stroke:{
          width:6,
          color:"#f9ab00"
        }
      }}}}

   />
      
    
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
      <Experience />
      <Testimonial />
      <Contacts />
      <Footer />
    </React.Fragment>
  );
}

export default App;
