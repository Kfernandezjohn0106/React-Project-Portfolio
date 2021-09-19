import React from 'react'

const Experience = () => {
    return (
        <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>experience</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2014-2015</h3>
              <p>IT support engineer at Hilton Hotel Kuala Lumpur.The Job role is to monitor and maintain the computer systems and network in the organisation</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2014-2015</h3>
              <p>Web Developer at Vitrox Penang. Job role is to develop responsive websites in JavaScript. </p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2015-2016</h3>
              <p>AI Engineer at Skymind Penang.Job role is to build AI model using machine learning and deep learning.</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2016-2017</h3>
              <p>Data Analyst at HSBC Bank.Job role is to collect,clean and interprets data sets in order to solve a business issue</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2017-2018</h3>
              <p>IT instructor for Data Science course at General Assembly Singapore</p>
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>2018-2020</h3>
              <p>IT Lecturer at Sunway College Johor Bahru.</p>
            </div>
          </div>
        </div>
      </div>
      )
}

export default Experience;
