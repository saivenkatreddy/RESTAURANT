import React from 'react';
import Header from './Header';
import Footer from './Footer';
import de from './assets/de.jpeg';

const Order = () =>{

    console.log('Order component')
    return(
        <div className="App">
            <Header/>        
    <div className="Main order">
    <h1> Order Details</h1>
      <div className="section order-section">
        <div className="left order-section-left">
            <h3>Items Selected</h3>

            <ul>
                <li> Chicken Tikka Masala </li>
                <li> Margherita Pizza </li>
                <li> Fish and Chips</li>
                <li> Beef Burger </li>
                <li> Choclat Croissant </li>
            </ul>
            <div class="container mt-3">
            <button type="button" class="btn btn-success">Checkout</button>
            </div>
        </div>
        <div className="Header-continued">
        <div className="right order-section-right">
            <div className="card">
                <img src="https://media.istockphoto.com/id/1411524598/photo/chicken-tikka-masala-cooked-marinated-chicken-in-spiced-curry-sauce.jpg?s=612x612&w=0&k=20&c=3JLbYigOnTQm-4exK-7uKeI3YoR0g9HxAkjxmuVmfpY="></img>
                <h5> Chicken Tikka Masala </h5>
                <h4> £5.99 </h4>
                <form>
                    <input type="button" value="-" name="decrement" className="decrement-btn"/>
                    <input type="number" name="items"/>
                    <input type="button" value="+" name="increment" className="increment-btn"/>
                    <input type="hidden" name="item"/>
                    <button type="submit" className="order-btn">Add</button>
                </form>
            </div>            
            <div className="card">
                
                <img src="https://media.istockphoto.com/id/1427643665/photo/vegan-pizza-with-beet-base-topped-with-spinach-and-vegan-cheese.jpg?s=612x612&w=0&k=20&c=ojNKUUZhHlD9oAeAu_p7VA89F6f-w41Tc9o44KAz538="></img>
                <h5> Margherita Pizza </h5>
                <h4> £6.99 </h4>
                <form>
                    <input type="button" value="-" name="decrement" className="decrement-btn"/>
                    <input type="number" name="items"/>
                    <input type="button" value="+" name="increment" className="increment-btn"/>
                    <input type="hidden" name="item"/>
                    <button type="submit" className="order-btn">Add</button>
                </form>
            </div>
             <div className="card">
                
                <img src="https://media.istockphoto.com/id/1178035212/photo/british-traditional-fish-and-chips-with-mashed-peas-tartar-sauce-and-cold-beer.jpg?s=612x612&w=0&k=20&c=10IPCrlJ067jWKtaN9CVlWfPA8XDM451dZk23lMP9_Q="></img>
                <h5> Fish and Chips </h5>
                <h4> £4.49 </h4>
                <form>
                    <input type="button" value="-" name="decrement" className="decrement-btn"/>
                    <input type="number" name="items"/>
                    <input type="button" value="+" name="increment" className="increment-btn"/>
                    <input type="hidden" name="item"/>
                    <button type="submit" className="order-btn">Add</button>
                </form>
            </div>
             <div className="card">
                <img src="https://media.istockphoto.com/id/520876666/photo/beef-burgers-ready-to-serve-on-food-stall.jpg?s=612x612&w=0&k=20&c=TnfOnhxFoZydbqYdM5LZQN8mhgeuxeENCVWRt3n3ZXg="></img>
                <h5> Beef Burger</h5>
                <h4> £4.99 </h4>
                <form>
                    <input type="button" value="-" name="decrement" className="decrement-btn"/>
                    <input type="number" name="items"/>
                    <input type="button" value="+" name="increment" className="increment-btn"/>
                    <input type="hidden" name="item"/>    
                    <button type="submit" className="order-btn">Add</button>
                </form>
            </div>
             <div className="card">
                <img src="https://media.istockphoto.com/id/639420382/photo/business-men-meeting-tablet-concept.jpg?s=612x612&w=0&k=20&c=70dWguJxLmbWpLqDqVvdAnOoxaz9vzPUMlbtxvGnDrM="></img>
                <h5> Choclat Croissant </h5>
                <h4> £3.99 </h4>
                <form>
                    <input type="button" value="-" name="decrement" className="decrement-btn"/>
                    <input type="number" name="items"/>
                    <input type="button" value="+" name="increment" className="increment-btn"/>
                    <input type="hidden" name="item"/> 
                    <button type="submit" className="order-btn">Add</button>
                </form>
            </div>
        </div>
      </div>  
      </div>
    <div className="Footer Footer-continued">
      <div className="footer-section">
        <div className="left">
          <h1>Come, Enjoy the Joy of food</h1>
        </div>
        <div className="right">
          <h1>Delicious food forever</h1>
        </div>
      </div>
      <div className="footer-section horizontal">
      </div>
      <div className="footer-section footer-content">
        <div className="left footer-left">
          <img src="de" className="logo-img" alt="LOGO"/>
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

        </div>
    );
}

export default Order;