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
            <li>Menu</li>
            <li>About</li>
            <li>Order</li>
            <li>Contact</li>
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