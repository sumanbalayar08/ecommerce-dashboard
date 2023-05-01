import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import SignUp from "./SignUp";

const PrivateComponent=()=>{
const auth=localStorage.getItem("user");
return auth ? <Outlet/> :<SignUp/>

}
export default PrivateComponent;