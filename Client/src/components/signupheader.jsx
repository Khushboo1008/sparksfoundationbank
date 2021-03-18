import React, { Component } from 'react';
import Style from './../styles';
import unnamed from './../images/unnamed.png';

class Header extends Component {
    // state = {  }
    render() { 
        return (
            <img className='d-flex'src={unnamed} alt="Logo" 
            width="200" height="200" style={Style.image}/>
         );
    }
}
 
export default Header;