// Imports
import saimain from './assets/Sai-main.svg';
import saibig from './assets/Sai-big.svg';
import ab from './assets/ab.svg';
import bc from './assets/bc.svg';
import cd from './assets/cd.svg';
import four from './assets/Sai-4.svg';
import k from './assets/k.jpeg';
import l from './assets/l.jpeg';


// Body
const Body = (props) =>{

    return(

<div className="Main">
      <div className="section">
        <div className="left main-content">
          <h2>Because we know</h2>
          <b><i><h1>Good food makes good mood</h1></i></b>
          <h4>A recipe has no soul, but a good cook can bring soul to the recipe. Our restaurants are focused on three elements : service quality (responsiveness), price, and food quality (reliability), because customer satisfaction is our priority and we always try to reach the mark.
            So, why waste your time, let's dive into our menu.
          </h4>
          <div className="centre">
          <center><button class="button">Order Now</button></center>
          </div>
        </div>
        <div className="right main-img-content">
          <img src={l} className="main-img" alt="main_img"/>
        </div> 
      </div>
<div className="section">
        <div className="big-img-section">
          <img src={saibig} className="big-img" alt="big_img"/>
          <div className="centered">
            <h1 className="section-2-text">
              We don't just have good
            </h1>
            <h1 className="section-2-text"> We have best of all</h1>
            <h3 className="section-2-text"> 23 PORTWAY PLACE </h3>
            <p className="section-2-text"> Taste all indian flavors </p>
          </div>
        </div>
      </div>
<br/>
      <div className="section section-3">
        <h1>
          You<span>'ll</span> never forget us
        </h1>
        <div className="section-3-content">
          <ul className="section-3-lists">
            <li>
                <center><img src={ab} className="logo-img" alt="sm_img"/></center>
              <h3>Plant-based</h3>
              <p>Welcome to a new year of healthy, delicious plant-based eating! With 94% of people saying they are interested eating more plant-based today—whether vegan, vegetarian, </p>
            </li>
            <li>
            <center><img src={bc} className="logo-img" alt="sm_img"/></center>
              <h3>Gluten-free</h3>
              <p>No matter what the circumstances are, eating gluten-free is definitely a learning process. Fortunately, there are tons of amazing gluten-free.</p>
            </li>
            <li>
            <center><img src={cd} className="logo-img" alt="sm_img"/></center>
              <h3>Made with love & Passion</h3>
              <p>Our customers are our priority, everytime they have a meal we get questioned, what is your secret ingredient. Tha answer is we make food with LOVE.</p>
            </li>
          </ul>
        </div>
      </div>
<br/>
<br/>
<br/>
      <div className="section">
            <div className="four-imgs left">
            <div className="left">
            <center><img src={four} classNameName="main-img" alt="sm_img"/></center>
        </div>
            </div>
            <div className="right">
              <h1 ><b>Healthy Food</b></h1>
              <h4><b>Who doesn't like a healthy meal?</b></h4>
              <p>Everytime when we cook, the main thing that we keep in mind is ou health.</p>
              <p> Our priority is not just a delicious meal but also a healthy one.</p>
              <p>Our chefs prepared a healthy menu so that everyone can enjoy the taste</p>
              <p>Our food will give you a balanced, heart-healthy diet whilst helping you to control your spending.</p>
              <center><button className="button">See More</button></center>
            </div> 
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
      <div className="section">
            <div className="one-imgs right">
            <div className="right">
              <h1 ><b>Our exclusive menu</b></h1>
              <h3><b>Breakfast, Lunch or Dinner. We've got you covered.</b></h3>
              <h3>Everytime when we cook, the main thing that we keep in mind is your health.</h3>
              <div className="centre">
              <center><button class="button">See Menu</button></center>
            </div>                
            </div>    
          </div>  
          <div className="right">
                    <center><img src={k} classNameName="main-img" alt="sm_img"/></center>
                </div>      
      </div>
      </div> 
    );
}

export default Body;