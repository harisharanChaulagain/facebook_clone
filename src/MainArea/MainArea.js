import React from "react";
import { AiFillFileImage } from "react-icons/ai";
import { FaAngleDown, FaFacebookMessenger, FaFontAwesomeFlag, FaGrin, FaUserFriends,FaMedrt, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare, FaSearch } from "react-icons/fa";
import { MdMoreHoriz, MdVideoCall } from "react-icons/md";


import './MainArea.css';
function MainArea(){
    
    return(
        <>
       
        <div className="Main">
            <div className="Rside">
                <div className="Profile">
                    <img src="/images/1.jpg" alto="dp" style={{height:"40px", padding:"1rem"}}/>
                    <br></br>
                    Neymar Jr.
                </div>
                <div className="Pro">
                    <FaUserFriends color="Blue" fontSize="6rem"/>
                    <div>Friends</div>
                </div>
                <div className="Pro">
                    <FaFontAwesomeFlag color="green" fontSize="6rem"/>
                    <div>Pages</div>
                </div>
                <div className="Pro">
                    <FaMedrt color="Blue" fontSize="10rem"/>
                    <div>COVID-19 Information Center</div>
                </div>
                <div className="Pro">
                    <FaFacebookMessenger color="green" fontSize="6rem"/>
                    <div>Messenger Kids</div>
                </div>
                <div className="Pro">
                    <FaAngleDown color="green" fontSize="6rem"/>
                    <div>See More</div>
                </div>
                <br></br>
                <div className="Profiles">
                    <img src="/images/1.jpg" alto="logo" style={{height: "75px", padding:"1rem"}}/>
                    Neymar Jr.
                </div>
                <div className="Profiles">
                    <img src="/images/2.jpeg" alto="logo" style={{height: "75px", padding:"1rem"}}/>
                    Mbappe
                </div>
                <div className="Profiles">
                    <img src="/images/3.jpeg" alto="logo" style={{height: "75px", padding:"1rem"}}/>
                    Ronaldo
                </div>
                <div className="Profiles">
                    <img src="/images/4.jpeg" alto="logo" style={{height: "75px", padding:"1rem"}}/>
                    Kaka
                </div>
                <div className="Pross">
                    <FaAngleDown color="blue" fontSize="2rem"/>
                    <div>See More</div>
                </div>
            </div>

            <div className="Mainarea">
                <div className="addstory">
                    <div className="story">
                        <img src="/images/1.jpg" alt="IMG" style={{height:"60px", weidht:"50px", borderRadius:"60%"}}/>
                       
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Neymar Jr.
                    </div>
                    <div className="story">
                        <img src="/images/2.jpeg" alt="IMG" style={{height:"60px", weidht:"50px", borderRadius:"60%"}}/>
                       
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Mbappe
                    </div>
                    <div className="story">
                        <img src="/images/3.jpeg" alt="IMG" style={{height:"60px", weidht:"50px", borderRadius:"60%"}}/>
                        
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Ronaldo
                    </div>
                    <div className="story">
                        <img src="/images/4.jpeg" alt="IMG" style={{height:"60px", weidht:"50px", borderRadius:"60%"}}/>
                       
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Kaka
                    </div>
                </div>
                <div className="message">
                    <div className="text">
                        <div className="Post">
                            <img src="/images/1.jpg" alt="PIC"style={{height: "35px", padding:"1rem"}} />
                            <input type="Mind" placeholder="What's on your mind Hari?"/>
                        </div>
                        <div className="Call">
                            <div className="ico">
                                <div className="icone">
                                    <MdVideoCall fontSize="2rem" color="red"/>
                                <div>LiveVideo</div>
                                </div>
                                <div className="icone">
                                    <AiFillFileImage fontSize="2rem" color="green"/>
                                <div>Photo/Video</div>
                                </div>
                                <div className="icone">
                                    <FaGrin fontSize="2rem" color="orange"/>
                                <div>Feeling/activity</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="Posted">
                        <div className="Poster">
                            <div className="Learn">
                            <img src="/images/1.jpg" alto="dp" style={{height:"100px", padding:"1rem"}}/>
                            
                                 Hari
                                 <div className="update">Updated his cover image.</div>
                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/> </div>
                        </div>
                        <div className="caption">
                            Please like and comment.
                        </div>

                        <div className="Comment">
                            <div className="Like">
                               
                                <FaRegThumbsUp color="gray"/>Like
                                
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="gray"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="gray"/>Share
                            </div>

                        </div>

                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="FacebookImg">
                        
                        <img src="/images/3.jpeg" alto="logo" style={{height:"35px", padding:"1rem"}}/>
                    
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="gray"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="gray"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="gray"/>Share
                            </div>

                        </div>
                        <br></br>
                        <div className="FacebookImg">
                        
                        <img src="/images/4.jpeg" alto="logo" style={{height:"35px", padding:"1rem"}}/>
                    
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="gray"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="gray"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="gray"/>Share
                            </div>

                        </div>
                        <br></br>
                        <div className="FacebookImg">
                        
                        <img src="/images/4.jpeg" alto="logo" style={{height:"35px", padding:"1rem"}}/>
                    
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="gray"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="gray"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="gray"/>Share
                            </div>

                        </div>
                    </div>


                </div>
            </div>

            <div className="Lside">
                <div className="Contact">
                    <div className="Contacts">
                        Contacts
                    </div>
                <div className="chaticon">
                    <div className="icons">
                        <MdVideoCall fontSize="1.8rem"/>
                    </div>
                    <div className="icons">
                        <FaSearch fontSize="1.6"/>
                    </div>
                    <div className="icons">
                    <MdMoreHoriz fontSize="1.6rem"/>
                    </div>

                </div>

                </div>

                <div className="concise">
                    <div className="Profilee">
                    <img src="/images/1.jpg" alto="logo" style={{height:"35px", padding:"1rem"}}/>
                        Ram
                    </div>
                    <div className="Profilee">
                    <img src="/images/2.jpeg" alto="logo" style={{height:"35px", padding:"1rem"}}/>
                        Shyam
                    </div>
                    <div className="Profilee">
                    <img src="/images/3.jpeg" alto="logo" style={{height:"35px", padding:"1rem"}}/>
                        Gopal
                    </div>
                    <div className="Profilee">
                        <img src="/images/4.jpeg" alto="logo" style={{height:"35px", padding:"1rem"}}/>
                        Manoj
                    </div>

                </div>

            </div>

        </div>
        </>
    )
}
export default MainArea