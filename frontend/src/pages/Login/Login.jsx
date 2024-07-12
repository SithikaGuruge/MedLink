import React, { useEffect,useState } from "react";
import "./Login.css";
import user_icon from "../../assets/LoginSignup/person.png";
import email_icon from "../../assets/LoginSignup/email.png";
import password_icon from "../../assets/LoginSignup/password.png";
import login_background from "../../assets/LoginSignup/loginBackground.jpeg";
import Footer from "../../components/Footer";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import GoogleBtn from "../../components/Login/google_login_button";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Login = () => {
  const [action, setAction] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTabClick = (selectedAction) => {
    setAction(selectedAction);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const details = { email, password };
    
    if (action === "Sign Up") {
      
      details.name = name;
      details.role = "customer";
      details.picture =
        "https://firebasestorage.googleapis.com/v0/b/medilink-812fc.appspot.com/o/person.png?alt=media&token=510412a5-bfd5-423d-b65d-f3b2a206e88d";
      // Post signup details
      fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      })
        .then((response) => {
          if (response.status === 201) {
            setMessage("User created successfully");
            handleClickOpen();
          } else if (response.status === 400){
            setMessage("Email Already Exists");
            handleClickOpen();
          }
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
          } else if (response.status === 400) {
            setMessage("Invalid credentials");
            handleClickOpen();
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };


return (
  <div className="bg-gray-200 min-h-screen">
      <div className="flex flex-col items-center mt-12 bg-white w-4/5 h-4/5 mx-auto rounded-lg shadow-lg sm:flex-row">
          <div className="flex-1 p-5 flex flex-col justify-center">
              <div className="flex justify-center mb-5">
                  <div 
                      className={`py-2 px-8 cursor-pointer ${action === "Sign Up" ? "font-bold border-b-2 border-black" : ""}`} 
                      onClick={() => handleTabClick("Sign Up")}
                  >
                      Sign Up
                  </div>
                  <div 
                      className={`py-2 px-8 cursor-pointer ${action === "Login" ? "font-bold border-b-2 border-black" : ""}`} 
                      onClick={() => handleTabClick("Login")}
                  >
                      Login
                  </div>
              </div>
              <div className="text-center mb-8">
                  <div className="text-3xl font-bold">{action}</div>
                  <div className="w-16 h-1 bg-black mt-2 mx-auto"></div>
              </div>
              <div className="flex flex-col gap-6 mb-8">
                  {action === "Sign Up" && (
                      <div className="flex items-center bg-gray-200 rounded-lg px-5 py-2">
                          <img src={user_icon} alt="user icon" className="mr-4" />
                          <input
                              type="text"
                              placeholder="Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="flex-1 bg-transparent border-none outline-none text-gray-600 text-lg"
                          />
                      </div>
                  )}
                  <div className="flex items-center bg-gray-200 rounded-lg px-5 py-2">
                      <img src={email_icon} alt="email icon" className="mr-4" />
                      <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 bg-transparent border-none outline-none text-gray-600 text-lg"
                      />
                  </div>
                  <div className="flex items-center bg-gray-200 rounded-lg px-5 py-2">
                      <img src={password_icon} alt="password icon" className="mr-4" />
                      <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="flex-1 bg-transparent border-none outline-none text-gray-600 text-lg"
                      />
                  </div>
                  
              </div>
              {action === "Login" && (
                  <div className="text-center mb-6">
                      <span className="text-blue-500 cursor-pointer">Lost Password? Click Here!</span>
                  </div>
              )}
              <div className="flex justify-center mb-2">
                  <div
                      className="bg-blue-400 text-black font-bold py-3 px-6 rounded-lg cursor-pointer"
                      onClick={handleSubmit}
                  >
                      {action === "Login" ? "Login" : "Sign Up"}
                  </div>
              </div>
              <div className="flex justify-center mb-1 text-gray-500">-OR-</div>
              <div className="flex justify-center">
                  <GoogleBtn action={action} handleClickOpen={handleClickOpen} setMessage={setMessage} />
              </div>
              <div className="g-signin2 mt-4" data-onsuccess="onSignIn"></div>
          </div>
          <div className="flex-1 flex items-center justify-center">
              <img src={login_background} alt="Example" className="w-full h-full object-cover rounded-lg" />
          </div>
      </div>
      
      <Footer />

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Notification
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>

  </div>
);
};

export default Login;