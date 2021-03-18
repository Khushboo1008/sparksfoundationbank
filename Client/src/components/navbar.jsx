import React, { Component } from 'react';
import Style from './../styles';

class Navbar extends Component {
    // state = {  }
    render(props) { 
        return ( 
            <div className="block-example border border-dark" style={Style.Navbar}>
                <div className="d-flex">
                    <h1>THE SPARKS FOUNDATION</h1>
                    {/* <span style ={Style.divider} class="col-xs mr-2"></span> */}
                    <div style={Style.btn}>
                    <button onClick={() => this.props.handleStatus("Signup")} type="button" className="btn btn-outline-primary p-2 mr-4">SIGNUP</button>
                    <span style ={Style.divider} class="col-xs"></span>
                     {/* <span class="breadcrumb-item active" aria-current="page"></span> */}
                    <button onClick={() => this.props.handleStatus("login")} type="button" className="btn btn-outline-primary p-2">LOGIN</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Navbar;