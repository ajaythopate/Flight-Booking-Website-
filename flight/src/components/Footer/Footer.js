import React from 'react';
import "../../components/Footer/footer.css";

import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
    <div className="sectionConatiner container grid">
      <div className="gridOne">
        <p>Your mind should be stringer than your feelings, fly!</p>
        <div className="socialIcon flex">
          <TiSocialFacebook className="icon" />
          <AiOutlineTwitter className="icon" />
          <AiFillYoutube className="icon" />

        </div>
      </div>
      <div className="footerLinks">
        <span classsName="linktitle">Information</span>
        <li>
          <a href="/" >Home</a>
        </li>
        <li>
          <a href="" >Explore</a>
        </li>
        <li>
          <a href="" >Flight Status</a>
        </li>
        <li>
          <a href="" >Travel</a>
        </li>
        <li>
          <a href="" >Check In</a>
        </li>
        <li>
          <a href="" >Manage your booking</a>
        </li>
      </div>

      <div className="footerLinks">
        <span classsName="linktitle">Quick Guid</span>
        <li>
          <a href="" >FAQ</a>
        </li>
        <li>
          <a href="" >How</a>
        </li>
        <li>
          <a href="" >Features</a>
        </li>
        <li>
          <a href="" >Baggage</a>
        </li>
        <li>
          <a href="" >Route Map</a>
        </li>
        <li>
          <a href="" >Our Communities</a>
        </li>
      </div>



      <div className="footerLinks">
        <span classsName="linktitle">Information</span>
        <li>
          <a href="#" >Chauffuer</a>
        </li>
        <li>
          <a href="#" >Our partners</a>
        </li>
        <li>
          <a href="#" >Destination</a>
        </li>
        <li>
          <a href="#" >Careers</a>
        </li>
        <li>
          <a href="#" >transportation</a>
        </li>
        <li>
          <a href="#">Programe rules</a>
        </li>
      </div>
    </div>
    </div>
  )
}

export default Footer