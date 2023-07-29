import React,{useState } from 'react';
import "../Navbar/navbar.css";

import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";



import logo from "../../assets/logo.png";





const Navbar = () => {

    const [active, setActive] = useState("navBarMenu")
    const showNavBar = () => {
        setActive('navBarMenu  showNavBar')
    }
    const removeNavBar = () => {
        setActive('navBarMenu')
    }
    

    const [noBg, addBg] = useState('NavBarTwo')
    const addBgColor = () => {
        if (window.scrollY >= 10) {
            addBg('navBarTwo navBar_with_Bg')
        }else{
            addBg('navBarTwo')
        }
    }
    window.addEventListener('scroll',addBgColor)
    


  return (
        <div className="navbar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul />
                </div>
                <div className="none flex">
                    <li className="flex"> <BsPhoneVibrate /> Support</li>
                    <li className="flex"> <AiOutlineGlobal /> Languages</li>

                </div>
                <div className="atb flex">
                    <span> Sign In</span>
                    <span>Sign Out</span>
                </div>
            </div>


            <div className={noBg}>
                <div className="logoDiv">
             <img  src={logo} alt="logo" className="Logo" />
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem"> Home</li>
                        <li onClick={removeNavBar} className="listItem"> About</li>
                        <li  onClick={removeNavBar} className="listItem"> Offers</li>
                        <li  onClick={removeNavBar} className="listItem"> Seats</li>
                        <li  onClick={removeNavBar} className="listItem"> Destination</li>

                    </ul>

                
                    
                    {/* <button onClick={removeNavBar} className="contacBtn flex btnOne"> Contact</button> */}
                    

                    
                </div>

                <div onClick={showNavBar} className="toggleIcon">
                        <CgMenuGridO />
                    </div> 
                    
                
            </div>
        </div>
  )
  
}
  

export default Navbar