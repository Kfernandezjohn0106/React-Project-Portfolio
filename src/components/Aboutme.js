import React from "react";
import author from "../Logo7.JPG";

const Aboutme = () => {
    return (
        <div className="container py-5"> 
        <div className="row"></div>
        <div className="col-lg-6-col-xm-12">
            <div className="photo-wrap mb-5">
                <img className="profile-img" src={author} alt="author..." />
            </div>
        </div>
            <div className="col-lg-6.col-xm-12"></div>
            <h1 className="about-heading">About Me </h1>
            <p>Hello.. I'm Kevin who is a passionate Javascript developer..I have been developing websites for the past one year
                I create responsive websites across all devices and desktops.
            </p>
        </div>
            
       
    )
}

export default Aboutme;
