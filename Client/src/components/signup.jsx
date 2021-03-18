import React, { Component } from 'react';
import SignupMid from './signupmid';
import Header from './signupheader';
import Navbar from './navbar';
const Signup = (props) => {
    return ( 
            <div>
                <Navbar handleStatus={props.handleStatus}/>
                <SignupMid 
                onSignup={props.onSignup}
                handlefirstname={props.handlefirstname}
                handleusername={props.handleusername}
                handlelastname={props.handlelastname}
                handlepassword={props.handlepassword}
                handleconfirmpassword={props.handleconfirmpassword}
                handleemailid={props.handleemailid}
                handleaccountno={props.handleaccountno}
                validateForm={props.validateForm}
                />
                <Header/>
            </div>
         );
}
 
export default Signup;