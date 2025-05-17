<<<<<<< HEAD
import React from 'react';
import './styles/Hero.css';


export const Hero_2 = () => {
  return(
<>
<div className="Hero_2">
  <h1 className="Title_txt">START YOUR JOURNEY OF THIS <span className="Laptop_txt_color">SELECTION</span> NOW</h1>
  </div>

  <div className="Hero_2">
  <p className="Sub_txt">Tailored recommendations based on your needs, budget, and goals.</p>
  </div>

<br/><br/>
  <div className="Hero_2">
    <button className="START_NOW_BUTTON">
    START NOW
    </button> 
  </div>

  <div className="Hero_2" >
    <a href="#added" className="Sub_txt2">already added to wishlist</a>
    </div>
 
</>
  )
}

export default Hero_2;
=======
import React, { useState } from "react";
import "./styles/Hero.css";

export const Hero_2 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="Hero_2">
        <h1 className="Title_txt">
          START YOUR JOURNEY OF THIS{" "}
          <span className="Laptop_txt_color">SELECTION</span> NOW
        </h1>
      </div>

      <div className="Hero_2">
        <p className="Sub_txt">
          Tailored recommendations based on your needs, budget, and goals.
        </p>
      </div>

      <br />
      <br />

      <div className="Hero_2">
        <button className="START_NOW_BUTTON" onClick={handleButtonClick}>
          START NOW
        </button>
      </div>

      <div className="Hero_2">
        <a href="#added" className="Sub_txt2">
          already added to wishlist
        </a>
      </div>
      

      <div className="pop">

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-button" onClick={closePopup}>
              &times;
            </button>
            <div className="pop_and_text">
              <div className="pop">
              <h1 className="popup-title1">GETTING </h1>
              <h1 className="popup-title2">STARTED </h1>
              </div>
            <div className="popup-description">
            <p className="popup-description_disign">
              Answer a few quick questions, and we'll recommend the best laptop
              for you. <span className="Laptop_txt_color">This will only take a minute!</span>
            </p></div>
            </div>
            <hr />
            <div className="popup-subtitle_container">
            <h2 className="popup-subtitle">Use case / purpose for laptop</h2>
            </div>
            <div className="popup-tags">
              {[
                "gaming",
                "research",
                "graphic designing",
                "entertainment",
                "programming",
                "CAD",
                "simulation",
                "architecture",
                "ui/ux design",
                "data analyst",
                "data scientist",
                "study",
                "trading",
                "movie streaming",
                "content creation",
                "3D design",
                "AI ML training",
                "business",
                "productivity",
                "cybersecurity",
                "writing",
                "health care",
                "medical",
                "AR VR",
                "IoT",
                "conference meetings",
                "ethical hacking",
                "other",
              ].map((tag) => (
                <button className="tag" key={tag}>
                  {tag}
                </button>
              ))}
            </div>
            <button className="next-button">NEXT &rarr;</button>
          </div>
          
        </div>
      )}
      </div>
    </>
  );
};

export default Hero_2;
>>>>>>> a5859f0 (Pop up page 1 dome)
