import { useState } from "react";
import React from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div className="inputForm">
      <h1>Register Form</h1>
      
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"></input>
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"></input>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"></input>
      <button className="btn" type="button" onClick={console.log(name,email,password)}>
        SignUp
      </button>
    </div>
  );
};
export default SignUp;
