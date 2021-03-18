import React, { Component } from 'react';
import Style from './../styles';

const Dashmain = (props) => {
    return ( 
        <div className="block-example border border-dark p-5" style={Style.loginflex}>
            <h5 className="pt-2 pb-2" style={{textAlign: "center",right: "11%",color: "Black",}}>THE SPARKS FOUNDATION BANK</h5>
            <div style={Style.dashline} className={"pt-2"}></div>
            <div className={"pt-3 pb-3"}>
                <button onClick={() => props.handleStatus("Customers")} type="button" className="btn btn-primary btn-lg btn-block" style={Style.dashbutton}>Customers</button>
            </div>
            <div className={"pt-3 pb-3"}>
                <button type="button" className="btn btn-primary btn-lg btn-block" style={Style.dashbutton}>Transaction History</button>
            </div>
            <div className={"pt-3 pb-2"}>
                <button onClick={() => props.handleUserPay()} type="button" className="btn btn-primary btn-lg btn-block" style={Style.dashbutton}>Pay</button>
            </div>
        </div>
     );
} 
export default Dashmain;