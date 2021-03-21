import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Login from './components/login';
import Signup from './components/signup';
import SignupMid from './components/signupmid';
import Header from './components/signupheader';
import Navbar from './components/navbar';
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Customers from './components/customers';
import Dashnav from './components/dashnav';
import Pay from './components/Pay';
import Payuser from './components/payuser';
import Errors from './components/error';
import History from './components/history';

class App extends Component{
  state = {
    status: 'Signup',
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
    emailid: '',
    accountno: '',
    allusers: [],
    balance: '',
    payingUser: [],
    currentUser: [],
    Amount: '',
    error: '',
    success: '',
    visible: 'none',
    error: '',
    success: '',
    errors : [],
    successmsg : [],
    allhistory: []
    // setShow: 'false'

  };
  // handleStatus = (props) =>{
  //   this.setState({status: props})
  //   if(props.firstname!='' && props.lastname!='' && props.username!='' && props.accountno!='' && props.emailid!='' && props.password!='' && props.confirmpassword!='' ){
  //     axios.post('http://localhost:3000/user',this.state)
  //     .then(res => {
  //       console.log('successfully posted');
  //     })
  //   }
  // }
  handleStatus = props => {
    this.setState({status: props})
  }
  handlefirstname = event =>{
    const value = event.target.value;
    this.setState({firstname:value})
  }
  handleusername = event =>{
    const value = event.target.value;
    this.setState({username:value})
  }
  handlelastname = event =>{
    const value = event.target.value;
    this.setState({lastname:value})
  }
  handlepassword = event =>{
    const value = event.target.value;
    this.setState({password:value})
  }
  handleconfirmpassword = event =>{
    const value = event.target.value;
    this.setState({confirmpassword:value})
  }
  handleaccountno = event =>{
    const value = event.target.value;
    this.setState({accountno:value})
  }
  handleemailid = event =>{
    const value = event.target.value;
    this.setState({emailid:value})
  }
  handleLogout = () => {
    this.handleStatus("login")
    this.setState({
    username: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
    emailid: '',
    accountno: '',
    allusers: [],
    balance: '',
    payingUser: [],
    currentUser: [],
    Amount: '',
    error: '',
    success: '',
    errors : [],
    successmsg : [],
    allhistory: []
    })
  }
  handleCustPay = payinguser =>  {
    if(payinguser.username == this.state.currentUser.username){
      alert("You are not allowed to pay yourself ❌")
      console.log("error")
      }
    else{
      this.setState({payingUser:payinguser})
    this.handleStatus("Pay")
    }

  }
  handleUserPay = () => {
    this.handleStatus("Payuser")
  }

  handleAmount = event => {
    const value = event.target.value;
    this.setState({Amount:value}) 
  }
  handlePay = () => {
    const payingUser = this.state.payingUser;
    const Amount = this.state.Amount;
    const currentUser = this.state.currentUser;
    console.log("pay clicked")
    var Pay ={
      payingUser: payingUser,
      Amount: Amount,
      currentUser: currentUser
    }
    axios.post('/paycust',Pay)
    .then(res => {
      console.log(res);
      if(res.data.error)
      alert(res.data.error)
      // this.handleStatus(res.data.status)
      this.handleLogout()
    })
    .catch(err => {
      alert(err)
    })
  
  }

  validateForm = () => {
    const firstname = this.state.firstname;
    const username = this.state.username;
    const lastname = this.state.lastname;
    const password = this.state.password;
    const confirmpassword = this.state.confirmpassword;
    const emailid = this.state.emailid;
    const accountno = this.state.accountno;
    if(username=='' || firstname== '' || lastname== '' || password== '' || confirmpassword== '' || emailid=='' || accountno=='')
    alert("please fill all the required Details❌")
    else if(accountno.length<10||accountno.length>10)
    alert("Account no should be 10 digit ❌")
    else{
    var signupData = {
      firstname          :    firstname,
      username           :    username,
      lastname           :    lastname,
      password           :    password,
      confirmpassword    :    confirmpassword,
      emailid            :    emailid,
      accountno          :    accountno
    }
    axios.post('/user',signupData)
    .then(res => {
      console.log(res);
      // let success = res.data.success;
      let error =res.data.error
      alert(error)
      this.handleStatus(res.data.status)
      // this.setState({status:res.data.status})
    })
    .catch(err =>{
      console.log("error occured")
    })
    // this.handleStatus(s)
    this.setState({username: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmpassword: '',
    emailid: '',
    accountno: '',
    
  })
}
  // console.log(res.status.status)
  }
  handleLogin = async e => {
    // e.preventDefault()
    const username = this.state.username;
    const password = this.state.password;
    if(username==''||password=='')
    alert("Please fill the required details ❌")
    else{
      axios.post('/login',{username,password})
      .then(res => {
        console.log(res);
        let error =res.data.error
        alert(error)
        let allusers=res.data.allusers
        this.setState({allusers})
        this.setState({currentUser:res.data.user})
        let user=this.state.currentUser.history;
        this.setState({allhistory:user})
        this.handleStatus(res.data.status)
      
      })
      .catch(err=>{
        console.log(err)
      })
    }
      // this.handleStatus(s)
      // console.log('loggedin Successfully')
  }
  // handleSignup = Signup => {
  //   if(this.props.Signup.firstname!='' && this.props.Signup.lastname!='' && this.props.Signup.username!='' && this.props.Signup.accountno!='' && this.props.Signup.emailid!='' && this.props.Signup.password!='' && this.props.Signup.confirmpassword!='' ){
  //     axios.post('http://localhost:3000/user',this.state.Signup)
  //     .then(res => {
  //       console.log('successfully posted');
  //     })
  //   }
  // }
  render(){
    let messagestatus = "none";
  
  if(this.state.errors.length!=0){
  messagestatus = "show";
  }
    if(this.state.status === "login"){
    return (
      <div>
          <Login 
            onLogin={this.handleLogin}
            handleStatus={this.handleStatus}
            handleusername={this.handleusername}
            handlepassword={this.handlepassword}
            handleLogin={this.handleLogin}
          />
          <div style = {{ display: messagestatus}} >
            <Errors/>
          </div>
        </div>  
      );
    } else if (this.state.status === "Signup"){
      return (
        <div>
          <Signup
          handlefirstname={this.handlefirstname}
          handleusername={this.handleusername}
          handlelastname={this.handlelastname}
          handlepassword={this.handlepassword}
          handleconfirmpassword={this.handleconfirmpassword}
          handleemailid={this.handleemailid}
          handleaccountno={this.handleaccountno}
          validateForm={this.validateForm}
          handleStatus={this.handleStatus}
          />
          <div style = {{ display: messagestatus}}>
            <Errors/>
          </div>          
        </div>          
      );
  }
  else if(this.state.status === "Dashboard"){
    return(
    <div> 
      <Dashboard 
        User={this.state.username}
        handleStatus={this.handleStatus}
        handleLogout={this.handleLogout}
        handleUserPay={this.handleUserPay}
        currentUser={this.state.currentUser}
      />
      <div style = {{ display: messagestatus}}>
        <Errors/>
      </div>      
    </div>  
    ); 
  }else if(this.state.status === "Customers")
  {
    return(
    <div>
      <Customers 
        allusers={this.state.allusers}
        handleCustPay={this.handleCustPay}
        handleStatus={this.handleStatus}
        handleLogout={this.handleLogout}
      />
      <div style = {{ display: messagestatus}}>
        <Errors/>
      </div> 
    </div>
    );
  }else if(this.state.status === "Pay")
  {
    return(
      <div>
        <Dashnav 
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <Pay 
          payingUser={this.state.payingUser}
          handleStatus={this.handleStatus}
          handleAmount={this.handleAmount}
          handlePay={this.handlePay}
        />
        {/* <div style = {{ display: messagestatus}}>
        <Errors/>
      </div>  */}
      </div>
    );
  }else if(this.state.status === "Payuser")
  {
    return (
      <div>
      <Dashnav 
        currentUser={this.state.currentUser}
        handleLogout={this.handleLogout}
      />
      <Payuser 
        payingUser={this.state.payingUser}
        handleStatus={this.handleStatus}
        currentUser={this.state.currentUser}
      />
      <div style = {{ display: messagestatus}}>
        <Errors/>
      </div> 
      </div>
    )
  }else if(this.state.status === "History"){
    return(
      <div>
        <History
        allusers={this.state.allhistory}
        handleStatus={this.handleStatus}
        handleLogout={this.handleLogout}
        />
      </div>
    )
  }
}
}

export default App;
