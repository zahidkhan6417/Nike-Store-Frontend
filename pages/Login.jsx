import React, { useState } from 'react';
import { FaFacebook, FaGooglePlusG, FaLinkedin } from "react-icons/fa";


const Login = () => {
 const [isRightPanelActive, setIsRightPanelActive] = useState(false);
 const handleSignUpClick = () => {
   setIsRightPanelActive(true);
 };
 const handleSignInClick = () => {
   setIsRightPanelActive(false);
 };
 return (

    <>
        <section className='login'>
            <div className={`containers ${isRightPanelActive ? 'right-panel-active' : ''}`} id="containers">
                <div className="form-containers sign-up-containers">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-containers">
                            <a href="#" className="social"><i><FaFacebook /></i></a>
                            <a href="#" className="social"><i><FaGooglePlusG/></i></a>
                            <a href="#" className="social"><i><FaLinkedin/></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-containers sign-in-containers">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-containers">
                            <a href="#" className="social"><i><FaFacebook/></i></a>
                            <a href="#" className="social"><i><FaGooglePlusG/></i></a>
                            <a href="#" className="social"><i><FaLinkedin/></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-containers">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className='over1'>Welcome Back!</h1>
                            <p className='over1'>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={handleSignInClick}>
                                signIn
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 className='over2'>Hello, Friend!</h1>
                            <p className='over2'>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={handleSignUpClick}>
                                signUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
 );
};
export default Login;