// Imports
import SVR from './assets/SVR.svg';

// Body
const Header = () =>{

    return(

        <div className="Header Header-continued">

        <div className="left">
          <img src={SVR} className="logo-img" alt="LOGO"/>
        </div>
  
  
        <div className="centre">
          <ul className="nav-list">
            <b><li>Menu</li></b>
            <b><li>About</li></b>
            <b><li>Order</li></b>
            <b><li>Contact</li></b>
          </ul>
        </div>
  
  
        <div className="right">
          <button className="find-btn">Find us</button>
          <div className="find-btn-helper"> </div>
        </div>
  
      </div>

    );
}


// Exports
export default Header;