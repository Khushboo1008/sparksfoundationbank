import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Style from '../styles';
const SignupMid = (props) => {
    
    // constructor() {
    //     super();
    //     // this.state = {value: ''};
    
    //     // this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    // handleChange=(event)=>{
    //     this.setState({value: event.target.value});
    // }
    // handleSubmit(){
    //     // alert('A name is submitted '+ this.state.value);
    //     // // event.preventDefault();
    //     // console.log("submit clicked", this);
    // }

        return (
            <form className="flexbox d-flex flex-column block-example" style={Style.flexbox}>
                <div className="form-row">
                    <div className="col-sm-6 my-1">
                        <label for="exampleInputFirstname1"></label>
                        <input required onChange={(e)=>props.handlefirstname(e)} value={props.firstname} type="text" className="form-control" style={Style.box} placeholder="First Name"></input>
                    </div>
                    <div className="col-sm-6 my-1">
                        <label for="exampleInputLastName1"></label>
                        <input required onChange={(e)=>props.handlelastname(e)} value={props.lastname} type="text" className="form-control" style={Style.box} placeholder="Last Name"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-sm-6 my-1">
                        <label for="exampleInputUsername1"></label>
                        <input required onChange={(e)=>props.handleusername(e)} value={props.username} type="text" className="form-control" style={Style.box} placeholder="User Name"></input>
                    </div>
                    <div className="col-sm-6 my-1">
                        <label for="exampleInputAccountno"></label>
                        <input required onChange={(e)=>props.handleaccountno(e)} value={props.accountno} type="number" className="form-control" style={Style.box}placeholder="Account no"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-sm-6 my-1">
                        <label for="exampleInputpassword1"></label>
                        <input required onChange={(e)=>props.handlepassword(e)} value={props.password} type="password" className="form-control" style={Style.box} placeholder="password"></input>
                    </div>
                    <div className="col-sm-6 my-1">
                        <label for="exampleInputconfirmPassword1"></label>
                        <input required onChange={(e)=>props.handleconfirmpassword(e)} value={props.confirmpassword} type="password" className="form-control" style={Style.box} placeholder="Confirm password"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-sm-6 my-1">
                        <label for="exampleInputemail1"></label>
                        <input required onChange={(e)=>props.handleemailid(e)} value={props.emailid} type="email" className="form-control"style={Style.ebox} placeholder="name@example.com"></input>
                    </div>
                </div>
                <div className="mx-sm-3 mb-2">
                    <input className="form-check-input" type="checkbox"></input>
                    <label required className="form-check-label" style={{color: 'white'}} for="defaultCheck1">
                    I agree to the T&C
                    </label>
                </div>
                <button onClick={(()=> props.validateForm())} type="button" className="btn btn-primary btn-sm m-2" style={Style.button}>SIGNUP</button>
            </form>
        );
    
}
 
export default SignupMid;