import React, { Component } from 'react';
import Style from './../styles';
import unnamed from './../images/unnamed.png';

const Pay = (props) => {
    return ( 
    <div className="block-example border border-dark p-5" style={Style.payflex}>
        <img className='d-flex' style={Style.logo} src={unnamed} alt="Logo" 
            width="100" height="100"/>
        <span style={Style.payer}><strong>Paying</strong> {props.payingUser.firstname} {props.payingUser.lastname} </span>
        <div style={Style.account} className="row">
            <div className="col-25">
                <label for="fname">Account No :</label>
            </div>
            <div className="col-75 ml-4">
                <span style={Style.number}>{props.payingUser.accountno}</span>
            </div>
        </div>
        <div style={Style.amount} className="row">
            <div className="col-25">
                <label for="fname">Amount :</label>
            </div>
            <div className="col-75 ml-5">
                <input required onChange={(e)=>props.handleAmount(e)} value={props.amount} className="form-control" type="Number" style={{width: "90%"}} ></input>
            </div>
        </div>
        <div className="row">
            <div className="col-25 mr-5 mt-5">
            <button onClick={() => props.handleStatus("Customers")} type="button" class="btn btn-primary" style={Style.payuserbutton}>BACK</button>
            </div>
            <div className="col-75 ml-5 mt-5">
            <button onClick={() => props.handlePay()} type="submit" class="btn btn-primary" style={Style.payuserbutton}>PAY</button>
            </div>
        </div>
    </div> 
    );
}
 
export default Pay;