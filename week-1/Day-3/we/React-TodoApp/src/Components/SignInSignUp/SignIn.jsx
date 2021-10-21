import React, { useState } from "react";

export const SignIn = () =>{

    const initState = {
        username:"",
        password:""
    }
    const [loginData, setLoginData] = useState(initState)
    const handleLogin = ()=>{
        setLoginData({
            ...loginData,})
    }
    return (
    <>
    <div>
        <input type="text" name ="username" value={loginData.username} placeholder="Enter Username" />
        <input type="text" name ="password" value={loginData.password} placeholder="Enter Password"/>
        <button onClick= {handleLogin}>Submit</button>
    </div>
    </>     
    )
}