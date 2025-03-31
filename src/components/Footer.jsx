import React from 'react'
import "./styles/Footer.css"
import GRADGEAR_bottom from "../assets/bg/GRADGEAR_bottom.png"


export const Footer = () => {
  return (
    <div class="background-image">
        <div className='InnerDiv'>
        <div className="BlueBox">
            <h1 className="BB_title">TRY NOW AND GET BENEFITS</h1>
            <br/>
            <p className='BB_subtext'>Subscribe to our newsletter and get the latest 
updates <br/>on the best laptop deals,exclusive offers, 
and special coupon codes <br/> for extra discounts. 
</p>
<div className="BUT"> <button className="Get_Started">Get Started</button> </div>
<div className="BUT"> <button className="Learn_more">Learn more</button> </div>
        </div>
        </div>

        <div className="GRADGEAR_bottom">
            <img src={GRADGEAR_bottom} alt="Descriptive text" className="GRADGEAR_bottom_img"/>

        </div>

<div className="Hello">
    <div className="details">

            <div className="details2">
            <h2 className="BB_subtext2">Location to HQ</h2>
            <p className="details_subtext">VIT Vellore L block 
            1002</p>
            </div>
            

        </div>

        <div className="details">

            <div className="details2">
            <h2 className="BB_subtext2">Customer Support </h2>
            <p className="details_subtext">Parth Jadhav : 8329055346</p>
            </div>
            

        </div>

        <div className="details">

     <div className="details2">
     <h2 className="BB_subtext2">Company </h2>
       <p className="details_subtext">Parth Jadhav : 8329055346</p>
    </div>


   </div>

        
</div>
        <div className="Bottomest">
            <p className="miniline">@ All copyrights reserved 2025</p>

        </div>
    

  </div>
  )
}


export default Footer;