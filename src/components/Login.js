import React, { useState,useEffect } from "react";
import { useNavigate, } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth){
      navigate("/");
    }
  });


  const handlelogin = async () => {
    if (email && password) {
      let result = await fetch("http://localhost:5000/login", {
        method: "post",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result=await result.json();
      console.warn(result);
      if(result.name){
        localStorage.setItem("user",JSON.stringify(result));
        navigate("/");
      }      
    }else {
      console.log("Please fill the data");
    }
  };

  return (
    <div className="inputForm">
      <h1>Login Form</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      ></input>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      ></input>
      <button className="btn" type="button" onClick={handlelogin}>
        Login
      </button>
    </div>
  );
};
export default Login;
