import './App.css';

// Images

import saimain from './assets/Sai-main.svg';
import saibig from './assets/Sai-big.svg';


// Components
import Header from './Header';

const App = () => {
  return (
    <div className="App">

   
    <Header/>
    <div className="Main">


      <div className="section">
        <div className="left main-content">
          <h1>All Tastes</h1>
          <h1>One Stop</h1>
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
              Taste the <u>taste</u>
            </h1>
            <p className="section-2-text"> NR2 4QG </p>
            <h3 className="section-2-text"> 23 PORTWAY PLACE </h3>
            <p className="section-2-text"> Taste all indian flavors </p>
          </div>
        </div>

      </div>


      <div className="section section-3">
        <h1>
          You<span>'ll</span> never forget <u>us</u>
        </h1>
        <div className="section-3-content">

          <ul className="section-3-lists">
            <li>
              <h3>Plant-based</h3>
              <p>Welcome to a new year of healthy, delicious plant-based eating! With 94% of people saying they are interested eating more plant-based today—whether vegan, vegetarian, or flexitarian—we are increasingly turning to blogs for nutrition advice, gorgeous recipes, and quick and easy tips for highlighting plants on the plate. And, guess what? Top food bloggers are up for the challenge! We are providing a wide world of diverse flavors, global foods, and handy nutrition advice to fuel the world’s appetite for eating more plant-based.</p>
            </li>
            <li>
              <h3>Gluten-free</h3>
              <p>No matter what the circumstances are, eating gluten-free is definitely a learning process. Fortunately, there are tons of amazing gluten-free blogs out there with reviews, recipes, and advice on how to get started. We all know how hard it is when you first go gluten-free. Perhaps you were just recently diagnosed with Celiac Disease, Ulcerative Colitis, or Crohn’s Disease. Or maybe you are simply wanting to eat healthier and introduce gluten-free into your diet.</p>
            </li>
            <li>
              <h3>Made with love & Passion</h3>
              <p>Human beings have always eaten, but the business of selling food to customers who order off a menu is a phenomenon dating back to the French Revolution. Before that time, diners bought food at street food stalls and public houses. Today's restaurants are characterized by their capacity to create a space and a dining experience. They also usually offer customers a choice of menu options. Upscale restaurants offering fixed price menus are an exception to this trend, but they nonetheless focus on the dining experience, as compared to the expedient fare of historical eating options.</p>
            </li>
          </ul>
          
        </div>
      </div>

      <div className="section">
            <div className="four-imgs left">
              <img src="./assets/Sai-4.svg" />
            </div>
            <div className="right">
              <h1 ><b>Healthy Food</b></h1>
              <h4><b>Who doesn't like a healthy food?</b></h4>
              <p>A revolution in food. Let it be known that I am a big fan of homemade pesto here, and I find that 
                the best way to do things is to first dunk your bread in the pesto (it’s thick, flavorful, and delicious) and then dunk your pesto-ed bread 
                into the soup. SO GOOD. 
                                              Fresh flavor in every nook and cranny.
                                              I still have a bunch of basil left in my garden that is nearing the end of its life (aka winter is coming), so I am excited to be making a 
                                              bunch of pesto right now. And the flavor – ugh. It’s so fresh and so good. I was licking the remnants of it 
                                              right out of the food processor.</p>
              <button className="button">Read More</button>

            </div>
             
            
      
      </div>

      <div className="section">
        
      </div>

      <div className="section">
       
      </div>
      
    </div>  

    



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

          <img src="./assets/SVR.svg" className="logo-img" alt="LOGO"/>
          <h3>SVR Kitchens</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
          <p> Signup for the newsletter </p>

          <form>
            <input type="email" name="email"/>
            <input type="submit" value="Submit"/>
          </form>

        </div>

        <div className="right footer-right">

          <img src="./assets/Sai-serve.png" className="serve"/>

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
              <li> Menu </li>
              <li> Schedule </li>
              <li> About </li>
              <li> Catering </li>
            </ul>

          </div>

          <div className="footer-right-third">

            <ul>
              <li> Menu </li>
              <li> Schedule </li>
              <li> About </li>
              <li> Catering </li>
            </ul>

          </div>
          
        </div>

      </div>

    </div>


    </div>
  );
}

export default App;
