import React, { Component } from 'react';
import Style from './../styles';

const Dashnav = (props) => {
    return ( 
        <div className="block-example border border-dark" style={Style.Navbar}>
                <div className="d-flex">
                    <h1>THE SPARKS FOUNDATION</h1>
                    <span style={Style.content} className={"text-xl-left"}>Welcome, {props.currentUser.firstname} {props.currentUser.lastname}</span>
                    <div>
                    <span style ={Style.dividernav} class="col-xs"></span>
                    <button onClick={() => props.handleLogout()} style={Style.btnnav}  type="button" className="btn btn-outline-primary p-2">LOGOUT</button>
                    </div>
                </div>
        </div>
     );
}
 
export default Dashnav;