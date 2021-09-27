import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../Images/avatars/avatar-1.png";
import avatar2 from "../Images/avatars/avatar-2.png";
import avatar3 from "../Images/avatars/avatar-3.png";
import avatar4 from "../Images/avatars/avatar-4.png";

const TestimonialCarousel = () => {
    return (
        <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        >
                <React.Fragment>
        <img src={avatar1} alt="Mr Wilson" />
        <div className="myCarousel">
          <h3>Mr Wilson</h3>
          <p>The POS app that he build for my restaurant works really well. It have helped to handle orders effectively.</p>
        </div>
         </React.Fragment>
         <React.Fragment>
        <img src={avatar1} alt="Mr Ravi" />
        <div className="myCarousel">
          <h3>Mr Ravi</h3>
          <p>The app that he build for my catering business works really well. It have helped to handle orders effectively.</p>
        </div> </React.Fragment>
        <React.Fragment>
        <img src={avatar2} alt="Ms Rebecca" />
        <div className="myCarousel">
          <h3>Ms Rebecca</h3>
          <p>My Clothing shop have been doing well because of Kevin's Facebook advertisemet.</p>
        </div> </React.Fragment>
        <React.Fragment>
        <img src={avatar3} alt="Mr Prem" />
        <div className="myCarousel">
          <h3>Mr Prem</h3>
          <p>The inventory app was efficient and working well.</p>
        </div> </React.Fragment>
        <React.Fragment>
        <img src={avatar4} alt="Mr Hrishee" />
        <div className="myCarousel">
          <h3>Ms Hrishee</h3>
          <p>The chat app was efficient and working well.</p>
        </div> </React.Fragment>




        </Carousel>
    )
}

export default TestimonialCarousel;
