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