// Imports
import saimain from './assets/Sai-main.svg';
import saibig from './assets/Sai-big.svg';
import ab from './assets/ab.svg';
import bc from './assets/bc.svg';
import cd from './assets/cd.svg';
import four from './assets/Sai-4.svg';
import f from './assets/f.jpeg';

// Body
const Body = (props) =>{

    return(

<div className="Main">

      <div className="section">
        
        <div className="left main-content">
          <h2>It's not just GOOD</h2>
          <b><i><h1>It's the best of all</h1></i></b>
          <p>We made our menu with a variety of special foods which are
            highly recommended by thee doctors. We prioritize health over taste.
            The main menu consists of dishes which are very important to your health. 
            Our body requires a lot of nutrients and proteins which are available in pur foods. So, we highly recommend our customers to consumer some healthy food.
            So, why waste your time, let's dive into our menu. A recipe has no soul, but a good cook can bring soul to the recipe.
          </p>
          <div className="centre">
            <button className="find-btn-2">Find us</button>
            <div className="find-btn-helper-2"> </div>
          </div>
        </div>
        <div className="right main-img-content">
          <img src={saimain} className="main-img" alt="main_img"/>
        </div>
        
      </div>

<div className="section">


        <div className="big-img-section">
          <img src={saibig} className="big-img" alt="big_img"/>
          <div className="centered">
            <h1 className="section-2-text">
              Deliciouslyyyy good
            </h1>
            <p className="section-2-text"> NR2 4QG </p>
            <h3 className="section-2-text"> 23 PORTWAY PLACE </h3>
            <p className="section-2-text"> Taste all indian flavors </p>
          </div>
        </div>

      </div>


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





      <div className="section">
            <div className="four-imgs left">

            <div className="left">
            <center><img src={four} classNameName="main-img" alt="sm_img"/></center>
        </div>
            </div>
            <div className="right">
              <h1 ><b>Healthy Food</b></h1>
              <h4><b>Who doesn't like a healthy meal?</b></h4>
              <p>Everytime when we cook, the main thing that we keep in mind is ou health. Our priority is not just a delicious meal but also a healthy one. 
              </p>
              <button className="button">Order Now</button>
          

            </div>
             
      </div>









      <div className="section">
            <div className="four-imgs right">
                <div className="right">
                    <center><img src={f} classNameName="main-img" alt="sm_img"/></center>
                </div>
            </div>
            <div className="left">
              <h1 ><b>Healthy Food</b></h1>
              <h4><b>Who doesn't like a healthy meal?</b></h4>
              <p>Everytime when we cook, the main thing that we keep in mind is your health. 
              </p>
              <button className="button">Order Now</button>
            </div>      
      </div>
      
      </div> 

    );

}

export default Body;