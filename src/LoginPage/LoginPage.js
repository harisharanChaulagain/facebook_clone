import React from 'react'
import {Link} from 'react-router-dom';

function LoginPage() {
    return(
<div className="Login">
    <div className="facebook">
        <div className="facebooktext">
            facebook
        </div>
        <div className="title">
        Connect with friends and the world <br></br> around you on Facebook.
        </div>
    </div>
    <div className="logincontainer">
        <div className="logindetail">
            <input type="email" placeholder="Email or phone number"/>
            <br></br>
            <input type="password" placeholder="Password"/>
            <br></br>
            <button className="btn">
                <Link to="/HeaderArea">Log In</Link>
            </button>
            <div className="forget">
                <Link>Forgot password?</Link>
                <br></br>
            </div>
            
        </div>
        <div className='create'>
                <br></br>
                <button className='btns'>
                    Create New Account
                </button>
            </div>
            <p></p>
            <br></br>
            <div className='page'>
                <Link href='createpage'>Create a Page</Link> for a celebrity, brand or business.
            </div>
    </div>
  </div>
    )
}

export default LoginPage