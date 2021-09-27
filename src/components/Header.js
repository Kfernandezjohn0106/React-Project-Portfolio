import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
      <div id="Home" className="header-wraper">
          <div className="main-info">
            <canvas></canvas>
              <h1>JavaScript Developer</h1>

              <Typed
                className="typed-text"
                strings={["Web Design","Web Developments","Data Analyst","Google ads"]}
                typeSpeed={40}
                backSpeed={60} 
                />
                <a href="#!" className="btn-main-offer">contact me</a>


          </div>
      </div>

    );
}

export default Header;
