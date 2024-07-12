import React, { useState } from "react";
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
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Alert
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <Footer />
    </div>
  );
};

export default Login;
