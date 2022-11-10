// Imports
import SVR from './assets/SVR.svg';


import saiserve from './assets/Sai-serve.png';



// Footer
const Footer = () =>{

    return(



    <div className="Footer Footer-continued">

    <div className="footer-section">

      <div className="left">
        <h1>Come, Enjoy the Joy of food</h1>
      </div>
      <div className="right">
        <h1>Come, Enjoy the Joy of food</h1>
      </div>

    </div>

    <div className="footer-section horizontal">

    </div>

    <div className="footer-section footer-content">

      <div className="left footer-left">

      <div className="left">
      
        <img src={SVR} className="logo-img" alt="LOGO"/>
       
      </div>
      <div className="left">
        <h3>SVR Kitchens</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <p>Signup for the newsletter </p>
        </div>

        <form>
          <input type="email" name="email"/>
          <input type="submit" value="Submit"/>
        </form>
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
            <li> Health Guide </li>
            <li> Terms </li>
            <li> Awareness </li>
          </ul>

        </div>

        <div className="footer-right-third">

          <ul>
            <li> Contact </li>
            <li> Privacy Policy </li>
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