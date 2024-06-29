import React, { useState } from "react";
import './Login.css';
import user_icon from '../../assets/LoginSignup/person.png';
import email_icon from '../../assets/LoginSignup/email.png';
import password_icon from '../../assets/LoginSignup/password.png';
import login_background from '../../assets/LoginSignup/loginBackground.jpeg';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

const Login = () => {
    const [action, setAction] = useState("Sign Up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleTabClick = (selectedAction) => {
        setAction(selectedAction);
    };

    const handleSubmit = () => {
        const details = { email, password };
        if (action === "Sign Up") {
            details.name = name;
            // Post signup details
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            // Post login details
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(details),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    };

    return (
        <div className='wrapper'>
            <Navbar />
            <div className='container'>
                <div className="left-half">
                    <div className="tabs">
                        <div className={`tab ${action === "Sign Up" ? "active" : ""}`} onClick={() => handleTabClick("Sign Up")}>Sign Up</div>
                        <div className={`tab ${action === "Login" ? "active" : ""}`} onClick={() => handleTabClick("Login")}>Login</div>
                    </div>
                    <div className="header">
                        <div className="text">{action}</div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        {action === "Sign Up" && (
                            <div className="input">
                                <img src={user_icon} alt="" />
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        )}
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
                    <div className="submit-container">
                        <div className="submit" onClick={handleSubmit}>
                            {action === "Login" ? "Login" : "Sign Up"}
                        </div>
                    </div>
                </div>
                <div className="right-half">
                    <img src={login_background} alt="Example" />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;