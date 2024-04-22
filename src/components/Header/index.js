
import { useState } from "react";
import {Link } from "react-router-dom"
import { HiMiniBars3,  HiOutlineShoppingBag } from "react-icons/hi2";
import { BiLogoUnity } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiTireIronCross } from "react-icons/gi";

import './index.css'

const Header = ()=>{
    const [navbarToggle, setNavbarToggle] = useState(false);

    const onClickNavbar = () => {
        setNavbarToggle(!navbarToggle)
    }

    const isDisplayNavigationItems =  navbarToggle ? "navigation-items-container" : "not-display-navigation-items-container"



    return(
    <>
    <div className="header-route-container">
        <div className='small-device-header-container'>
            <div className='logo-container'>
                {navbarToggle ? (
                    <GiTireIronCross className="cross-mark-icon" size={25} onClick={onClickNavbar}/>  
                ) : (
                    <HiMiniBars3 className="nav-bar-icon" size={25} onClick={onClickNavbar}/>)
                }
                <Link to="/" className="nav-link">
                    <BiLogoUnity className="website-logo" size={30}/>
                </Link>
            </div>
            <div className="website-name-container">
                <Link to="/" className="nav-link">
                    <h1 className="website-name">L O G O</h1>
                </Link>    
            </div>
            <ul className="nav-items-container">
                <li className="nav-item">
                    <FiSearch size={24}/>
                </li> 
                <li className="nav-item">
                    <IoHeartOutline size={24}/>
                </li>
                <li className="nav-item">
                    <Link to="/Products" className="nav-link">
                        <HiOutlineShoppingBag size={23} />
                    </Link>
                </li>
            </ul>
        </div>

        <div className="large-device-header-container">
            <div className='logo-container'>
                <Link to="/" className="nav-link">
                    <BiLogoUnity className="website-logo" size={30}/>
                </Link>    
            </div>
            <div className="website-name-container">
                <Link to="/" className="nav-link">
                    <h1 className="website-name">L O G O</h1>
                </Link>    
            </div>
            <ul className="nav-items-container">
                <li className="nav-item">
                    <FiSearch size={24}/>
                </li> 
                <li className="nav-item">
                    <IoHeartOutline size={24}/>
                </li>
                <li className="nav-item">
                    <Link to="/products" className="nav-link">
                        <HiOutlineShoppingBag size={23} />
                    </Link>
                </li>
                <li className="nav-item">
                    <CiUser size={23} />
                </li>
                <li className="nav-item">
                    <select className="language-select">
                        <option id="English">ENG</option>
                        <option id="HINDI">HIN</option>
                        <option id="TELUGU">TEL</option>
                    </select>
                </li>
            </ul>
        </div>
        
        <div className="small-device-bottom-header-container">
            <ul className={isDisplayNavigationItems}>
                <li className="navigation-item">SHOP</li>
                <li className="navigation-item">SKILLS</li>
                <li className="navigation-item">STORIES</li>
                <li className="navigation-item">ABOUT</li>
                <li className="navigation-item">CONTACT US</li>
            </ul>
        </div>

        <div className="large-device-bottom-header-container">
            <ul className="navigation-items-container">
                <li className="navigation-item">SHOP</li>
                <li className="navigation-item">SKILLS</li>
                <li className="navigation-item">STORIES</li>
                <li className="navigation-item">ABOUT</li>
                <li className="navigation-item">CONTACT US</li>
            </ul>
        </div>

    </div>
    </>
)

}
export default Header