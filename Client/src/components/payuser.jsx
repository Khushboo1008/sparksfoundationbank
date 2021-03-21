import React, { Component } from 'react';
import Style from './../styles';
import unnamed from './../images/unnamed.png';

const Payuser = (props) => {
    return ( 
        <div className="block-example border border-dark p-5" style={Style.payuserflex}>
        <img className='d-flex' style={Style.logo} src={unnamed} alt="Logo" 
            width="100" height="100"/>
            <div className="row mt-3">
            <div className="col-25">
                <label for="fname" style={{fontSize: "140%",fontFamily: "-moz-initial"}}>Name<span style={{marginLeft: "9vh"}}> :</span></label>
            </div>
            <div className="col-75 ml-1">
            <span type="Number" style={{fontSize: "140%",fontFamily: "-moz-initial"}} >{props.currentUser.firstname} {props.currentUser.lastname} </span>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname" style={{fontSize: "140%",fontFamily: "-moz-initial"}}>AccountNo<span className="ml-4">:</span></label>
            </div>
            <div className="col-75 ml-1">
            <span type="Number" style={{fontSize: "140%",fontFamily: "-moz-initial"}} >{props.currentUser.accountno} </span>
            </div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname" style={{fontSize: "140%",fontFamily: "-moz-initial"}}>Email Id<span className="ml-5">:</span></label>
            </div>
            <div className="col-75 ml-1">
            <span type="Number" style={{fontSize: "140%",fontFamily: "-moz-initial"}} > {props.currentUser.emailid} </span></div>
        </div>
        <div className="row">
            <div className="col-25">
                <label for="fname" style={{fontSize: "140%",fontFamily: "-moz-initial"}}>Balance<span className="ml-5">:</span></label>
            </div>
            <div className="col-75 ml-1">
            <span type="Number" style={{fontSize: "140%",fontFamily: "-moz-initial"}} > ₹ {props.currentUser.balance} </span></div>
        </div>
        <div className="row ml-1">
            <div className="col-25 mr-5">
            <button onClick={() => props.handleStatus("Dashboard")} type="button" class="btn btn-primary mt-3" style={{width: "150%",marginLeft: "470%"}}>BACK</button>
            </div>
            {/* <div className="col-75 ml-5">
            <button onClick={() => props.handleUserPay()} type="button" class="btn btn-primary mt-5" style={{width: "180%",marginLeft: "50%"}}>PAY</button>
            </div> */}
        </div>
        
        {/* https://www.youtube.com/watch?v=tFq6Q_muwG0 */}
    </div> 
    );
}
 
export default Payuser;