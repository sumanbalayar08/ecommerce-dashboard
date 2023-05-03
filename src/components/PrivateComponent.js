import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";

const PrivateComponent=()=>{
const auth=localStorage.getItem("user");
return auth ? <Outlet/> :<><SignUp/></>

}
export default PrivateComponent;