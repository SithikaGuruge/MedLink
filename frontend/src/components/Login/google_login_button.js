import React from 'react';
import {GoogleLogin} from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";


function GoogleBtn({action,handleClickOpen,setMessage}) {

    return(
            <GoogleLogin 
                onSuccess={(credentialResponse) => {

                    if (action === "Sign Up") {
                        console.log(action)
                        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                        const {name,email,sub,picture} = credentialResponseDecoded;
                        const details = {
                            name,
                            email,
                            userSub: sub,
                            picture,
                            Type: "email_joined",
                            role: "customer"
                        };
                        console.log(details)
                        fetch("http://localhost:5000/auth/signup", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(details),
                        })
                        .then((response)=>{
                            if (response.status === 201) {
                                setMessage("User created successfully");
                                handleClickOpen();
                            } else if (response.status === 400){
                                setMessage("Email Already Exists");
                                handleClickOpen();
                            }
                        })
                        .catch((error)=>{
                            console.error("Error:",error);
                        });

                    } else {

                        console.log(action)
                        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                        const {name,email,sub} = credentialResponseDecoded;
                        const details = {
                            name,
                            email,
                            userSub: sub,
                            Type: "email_joined",
                        };
                        console.log(details)
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
                        .catch((error)=>{
                            console.error("Error:",error);
                        });
                        
                    }

                }}
                onError={()=>{
                    console.log("Login Failed");
                }}/>
    );
}

export default GoogleBtn;