import React, { Component } from 'react';
import Navbar from './navbar';
import LoginMid from './loginmid';
const Login =(props) => {
        return ( 
            <div>
                <Navbar handleStatus={props.handleStatus}/>
                <LoginMid onLogin={props.onLogin}
                handleusername={props.handleusername}
                handlepassword={props.handlepassword}
                handleLogin={props.handleLogin}
                />
            </div>
         );
}
 
export default Login;