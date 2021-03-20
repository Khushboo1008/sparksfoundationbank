import React, { Component } from 'react';
import Dashnav from './dashnav';
import Dashmain from './dashmain';

const Dashboard = (props) => {
    return ( 
        <div>
            <Dashnav 
            currentUser={props.currentUser}
            handleLogout={props.handleLogout}
            />
            <Dashmain User={props.User}
            handleStatus={props.handleStatus}
            handleUserPay={props.handleUserPay}
            handleLogout={props.handleLogout}
            />
            {/* <h1>{props.allusers}</h1> */}
        </div>
     );
}
 
export default Dashboard;