import React, { Component } from 'react';
import Style from './../styles';
import unnamed from './../images/unnamed.png';

const Payuser = (props) => {
    return ( 
        <div className="block-example border border-dark p-5" style={Style.payflex}>
        <img className='d-flex' style={Style.logo} src={unnamed} alt="Logo" 
            width="100" height="100"/>
            <div className="row mt-3">
            <div className="col-25">
                <label for="fname">Username :</label>
            </div>
            <div className="col-75 ml-4">
            <input type="Number" style={{marginLeft: "10%"}} ></input>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-25">
                <label for="fname">Account No :</label>
            </div>
            <div className="col-75 ml-2">
            <input type="Number" style={{marginLeft: "11%"}}></input>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-25">
                <label for="fname">Amount :</label>
            </div>
            <div className="col-75 ml-4">
                <input type="Number" style={{marginLeft: "16%"}}></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25 mr-5">
            <button onClick={() => props.handleStatus("Dashboard")} type="button" class="btn btn-primary mt-5" style={{width: "150%",marginLeft: "50%"}}>BACK</button>
            </div>
            <div className="col-75 ml-5">
            <button onClick={() => props.handleUserPay()} type="button" class="btn btn-primary mt-5" style={{width: "180%",marginLeft: "50%"}}>PAY</button>
            </div>
        </div>
        {/* https://www.youtube.com/watch?v=tFq6Q_muwG0 */}
    </div> 
    );
}
 
export default Payuser;