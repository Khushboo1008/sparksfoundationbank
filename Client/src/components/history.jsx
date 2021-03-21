import React, { Component } from 'react';
import Style from './../styles';

const History = (props) => {
    const {allusers}=props; 
    
    const renderHistory = (allusers , index)  => {
        return(
            <tr key={index}>
                <td>{allusers.username}</td>
                <td>{allusers.emailid}</td>
                <td>{allusers.accountno}</td>
                <td>{allusers.Amount}</td>
            </tr>
        )
    }
    return ( 
        <div>
        <table className="table table-sm" style={Style.table}>
            <thead>
                <tr className="table-active">
                    <th style={{color: "white"}} >Username</th>
                    <th style={{color: "white"}} >Email id</th>
                    <th style={{color: "white"}} >Accountno</th>
                    <th style={{color: "white"}} >Transaction</th>
                </tr>
            </thead>
            <tbody className="table-info">
                {allusers.map(renderHistory)}
            </tbody>

        </table>
        <button onClick={() =>props.handleStatus("Dashboard")} key={allusers.id} type="button" className="btn btn-primary pl-5 pr-5" style={{marginLeft: "10%",position : "absolute",top:"5%"}}>Prev</button>
        <button onClick={() =>props.handleLogout()} key={allusers.id} type="button" className="btn btn-primary pl-5 pr-5" style={{marginLeft: "80%",position : "absolute",top:"5%"}}>Logout</button>
    </div>
     );
}
 
export default History;