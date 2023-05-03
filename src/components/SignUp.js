import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth){
      navigate("/");
    }
  });

  const collectData = async () => {
    //console.warn(name, email, password);
    if (name && email && password) {
      let result = await fetch("http://localhost:5000/register", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      console.log("Please fill the data");
    }
  };

  return (
    <div className="inputForm">
      <h1>Register Form</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      ></input>
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
      <button className="btn" type="button" onClick={collectData}>
        SignUp
      </button>
    </div>
  );
};
export default SignUp;
