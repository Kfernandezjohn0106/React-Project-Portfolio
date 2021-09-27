import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";


const Footer = () => {
    return (
        <div className="footer">
            <div className="container"></div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>Taman Bukit Indah 2 Office </p>
                    </div>
                    <div className="d-flex">
                        <a href="Tel:01126650552">01126650553</a>
                    </div>
                    <div className="d-flex">
                        <p>kfernandezjohn@gmail.com</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-6">
                <div className="row">
                    <div className="col">
                        <a className="footer-nav">Home</a>
                        <br/>
                        <a className="footer-nav">About Me</a>
                        <br/>
                        <a className="footer-nav">Services</a>
                        <br/>
                    </div>
                    <div className="col">
                        <a className="footer-nav">Experience</a>
                        <br/>
                        <a className="footer-nav">Contact</a>
                        
                </div>
            </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                <div className="d-flex justify-content-center">
                    <FacebookShareButton
                        url={"https://www.facebook.com/"}
                        quote="Web Developer in Johor"
                        hashtag="#JavaScriptDevelopmentPortfolio"
                    >
                        <FacebookIcon className="mx-3" size={36}></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton
                        url={"https://www.twitter.com/"}
                        quote="Web Developer in Johor"
                        hashtag="#JavaScriptDevelopmentPortfolio"
                    >
                        <TwitterIcon className="mx-3" size={36}></TwitterIcon>
                    </TwitterShareButton>
                </div>
                
                </div>
            </div>
        </div>
    )
}

export default Footer;
