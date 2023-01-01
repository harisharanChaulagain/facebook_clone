import React from "react";
import './HeaderArea.css';
import {AiOutlineSearch, AiFillHome, AiOutlineWallet} from 'react-icons/ai';
import {MdOndemandVideo} from 'react-icons/md';
import {FaRegFlag, FaUsers, FaBell, FaFacebookMessenger, FaPlusCircle} from 'react-icons/fa';
import MainArea from "../MainArea/MainArea";


function HeaderArea(){
    return(
        <div className="HomePage">
            <div className="header">

                <div className="first-header">
                <div className="logo">
                <img src="/images/logo1.png" alt="logo" style={{height:"50px", padding:"1rem" }}/>
                 </div>
                 <div className="Search">
                    <AiOutlineSearch style={{height:"4rem"}}/>
                    <input placeholder="Search Facebook" type="search"/>
                 </div>
                </div>

                <div className="middle-header">
                    <div className="Icon">
                    <AiFillHome fontsize="2.3rem" color="#1877F2"/>
                    </div>
                    <div className="Icon">
                    <FaRegFlag fontsize="2.3rem" />
                    </div>
                    <div className="Icon">
                    <MdOndemandVideo fontsize="2.3rem" />
                    </div>
                    <div className="Icon">
                    <FaUsers fontsize="2.3rem" />
                    </div>
                    <div className="Icon">
                        <AiOutlineWallet fontsize="2.3"/>
                    </div>
                    
                </div>

                <div className="third-header">
                    <div className="plus">
                        <FaPlusCircle fontsize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaFacebookMessenger fontsize="2rem"/>
                    </div>
                    <div className="plus">
                        <FaBell fontsize="2rem"/>
                    </div>
                    <div className="plus">
                       <img src="/images/neymar.png" alt="dp" style={{height:"40px"}}/>
                    </div>
                </div>

            </div>
            <MainArea/>
            
        </div>
    )
}
export default HeaderArea