// Imports
import SVR from './assets/abcd.png';


import saiserve from './assets/Sai-serve.png';

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



// Footer
const Footer = () =>{

    return(



    <div className="Footer Footer-continued">

    <div className="footer-section">

      <div className="left">
        <h1>Come, Enjoy the Joy of food</h1>
      </div>
      <div className="right">
        <h1>Your first meal is on us</h1>
      </div>

    </div>

    <div className="footer-section horizontal">

    </div>

    <div className="footer-section footer-content">

      <div className="footer-left">

      <div className="left footer-left-content">
      
        <img src={SVR} className="logo-img" alt="LOGO"/>
       

        <h3>SVR Kitchens</h3>
        
        <ul>
          <li><SocialIcon url="https://twitter.com" /> Twitter</li><br/>
          <li><SocialIcon url="https://facebook.com" /> Facebook</li><br/>
          <li><SocialIcon url="https://instagram.com" /> Instagram</li><br/>
          <li><SocialIcon url="https://linkedin.com" /> Linkedin</li>
          <h5> © 2022 Copyright</h5><br/>
        </ul>
        </div>
        
        
       <p>Subscribe now to get our new menu and offers</p>
          <label for="pwd">Email Address</label>
          <input type="password" id="pwd" placeholder="Enter Email Address" name="email"></input><br/><br/>
          <label for="pwd">Password:</label>
          <input type="password" id="pwd" placeholder="Enter password" name="pswd"></input>
        <br/>
        <div>
        <br/>
        <button type="submit">Submit</button>
      </div>

        </div>
      <div className="right footer-right">
      <div className="left">
        <img src={saiserve} className="serve" alt="LOGO"/>
      </div>

        <div className="footer-right-first">

          <ul>
            <li> Menu </li>
            <li> Schedule </li>
            <li> About </li>
            <li> Catering </li>
          </ul>

        </div>

        <div className="footer-right-second">

          <ul>
            <li> Orders </li>
            <li> Health-Guide </li>
            <li> Terms </li>
            <li> Awareness </li>
          </ul>

        </div>

        <div className="footer-right-third">

          <ul>
            <li> Contact </li>
            <li> Privacy</li>
            <li> Licenses</li>
            <li> Instructions </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  


    )
   

}

export default Footer;