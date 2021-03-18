import React, { Component } from 'react';
import Style from '../styles';

const LoginMid = (props) => {
        return ( 
            <form className="block-example border border-dark p-5" style={Style.loginflex}>
                <h1 style={{textAlign: "center"}}>LOGIN</h1>
                <div class="form-group p-2">
                    <label for="exampleInputEmail1">Username</label>
                    <input required onChange={(e)=>props.handleusername(e)} value={props.username} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username"></input>
                </div>
                <div class="form-group p-2">
                    <label for="exampleInputPassword1">Password</label>
                    <input required onChange={(e)=>props.handlepassword(e)} value={props.password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <button onClick={() => props.handleLogin()} type="button" class="btn btn-primary mt-3" style={Style.button}>LOGIN</button>
            </form>
        );
}
export default LoginMid;