import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <div className="header">
        <div>
          <span className="head" >Header</span>
        </div>
        <div>
          <button><Link to ={"/"}> Home</Link></button>
        </div>
        <div>
          <button><Link to ={"/content"}> Content</Link></button>
        </div>
        
      </div>
    )
  };
  
  export default Header;