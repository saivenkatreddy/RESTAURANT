import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {useState,useEffect} from 'react';
import axios from 'axios';



const Order = () =>{

  const [food,setFood] = useState([]);

  const [display,setDisplay] = useState(false);

  useEffect(()=>{
    console.log('Ordering component rendering....');

    const reqAPI = `https://svr-best-of-all-api.netlify.app/.netlify/functions/api/foods/all`;

    axios.get(reqAPI).then((res)=>{
      
      setFood(res.data);

      console.log(food)
    }).catch((err)=>{
      console.log(err);
    })


  },[]);


  // Methods
  const createData = (event) =>{

      event.preventDefault();

      const eventTarget = event.target;

      const obj ={

      food        : eventTarget.food.value,
      price       : eventTarget.price.value,
      Category    : eventTarget.Category.value,
      link        : eventTarget.link.value,
      description : eventTarget.description.value,

      }


      axios.post(`https://svr-best-of-all-api.netlify.app/.netlify/functions/api/foods/create`,obj).then((res)=>{
        setFood(res.data);
      }).catch((err)=>{
        console.log(err);
      })

      

  }

  const displayOne = () =>{
    const cond = !display;
    setDisplay(!display)
  }

    
    return(
        <div className="App">
            <Header/>        
    <div className="Main order">
    <br/>
    <br/>
    <div class="background">
      <div class="transbox">
        <h1>Best food for the best community.</h1>
      </div>
    </div>
    <br/>
    <h1> Order Details</h1>
    <br/>
    <label for="locations">You are at </label>
      <select id="location" name="location">
        <option value="zurich">London</option>
        <option value="geneva">Birmingham</option>
        <option value="bern">Manchester</option>
        <option value="geneva">Norwich</option>
        <option value="geneva">Leeds</option>
      </select>
      <br/>
      <br/>
    <div className='form-div'>
    <h3>Admins Use</h3>
    <button onClick={displayOne}>Add items here</button><br/><br/>
    

      {display && (
        <div>
<div className="menuItems">
            <form onSubmit={createData} className="form">
                  <input type="text"   name="food"        placeholder='Enter Name'           required/><br/>
                  <input type="number" name="price"       placeholder='Enter Price'          required/><br/>
                  <input type="text"   name="Category"    placeholder='Enter Category'       required/><br/>
                  <input type="text"   name="link"        placeholder='Enter Image URL'  required/><br/>
                  <input type="text"   name="description" placeholder='Enter Description'  required/><br/>

                  <input type="submit" value="Add item to Menu" required/>
            </form>
            </div>
        </div>
      )}
     

    

    </div>
    
      <div className="section order-section">
        <div className="right order-section-right">
            <h3><i class="fa-solid fa-basket-shopping"></i>Basket</h3>

            <ul>
                <li> Chicken Tikka Masala </li>
                <li> Margherita Pizza </li>
                <li> Fish and Chips</li>
                <li> Beef Burger </li>
                <li> Choclat Croissant </li>
            </ul>
            <div className="container mt-3">
            <button type="button" className="btn btn-success">Checkout</button>
            </div>
        </div>
        <div className="Header-continued">
        <div className="left order-section-left">


            {food.map((value,index)=>{
              return(

                <div className="card h-100" key={index}>
                <img src={value.link}></img>
                <h5> {value.food} </h5>
                <h4> £{value.price} </h4>
                <form>
                    <input type="button" value="-" name="decrement" className="decrement-btn"/>
                    <input type="number" name="items"/>
                    <input type="button" value="+" name="increment" className="increment-btn"/>
                    <input type="hidden" name="item"/>
                    <button type="submit" className="order-btn">Add</button>
                </form>
            </div>   

              )
            })}
                    


        </div>
      </div>  
      </div>

      
    <Footer/>
   

        </div>

        </div>
    );
}

export default Order;