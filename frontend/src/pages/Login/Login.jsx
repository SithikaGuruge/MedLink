import React, { useState } from "react";
import "./Login.css";
import user_icon from "../../assets/LoginSignup/person.png";
import email_icon from "../../assets/LoginSignup/email.png";
import password_icon from "../../assets/LoginSignup/password.png";
import login_background from "../../assets/LoginSignup/loginBackground.jpeg";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
      details.role = "customer";
      // Post signup details
      fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      // Post login details
      fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      })
        .then((response) => {
          if (response.status === 200) {
            const authHeader = response.headers.get("authorization");
            if (authHeader) {
              const token = authHeader.split(" ")[1];
              console.log("Token received:", token);
              // Store token in local storage or session storage
              localStorage.setItem("token", token);
              window.location.href = "/";
            } else {
              console.error("Authorization header not found");
            }
            return response.json();
          } else {
            throw new Error("Login failed");
          }
        })
        .then((data) => {
          console.log("Success:", data);
         
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="left-half">
          <div className="tabs">
            <div
              className={`tab ${action === "Sign Up" ? "active" : ""}`}
              onClick={() => handleTabClick("Sign Up")}
            >
              Sign Up
            </div>
            <div
              className={`tab ${action === "Login" ? "active" : ""}`}
              onClick={() => handleTabClick("Login")}
            >
              Login
            </div>
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
          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              Lost Password? <span>Click Here!</span>
            </div>
          )}
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
      <Footer />
    </div>
  );
};

export default Login;
