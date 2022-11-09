import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {useState,useEffect} from 'react';
import axios from 'axios';

const Order = () =>{

  const [food,setFood] = useState([]);

  useEffect(()=>{
    console.log('Ordering component rendering....');

    const reqAPI = `http://localhost:8081/foods/all`;

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


      axios.post(`http://localhost:8081/foods/create`,obj).then((res)=>{
        setFood(res.data);
      }).catch((err)=>{
        console.log(err);
      })

      

  }

    
    return(
        <div className="App">
            <Header/>        
    <div className="Main order">
    
    <h1> Order Details</h1>
    <form onSubmit={createData}>
      <input type="text"   name="food"        placeholder='Enter food name'           required/><br/>
      <input type="number" name="price"       placeholder='Enter food price'          required/><br/>
      <input type="text"   name="Category"    placeholder='Enter food Category'       required/><br/>
      <input type="text"   name="link"        placeholder='Enter food link as a URL'  required/><br/>
      <input type="text"   name="description" placeholder='Enter food link as a URL'  required/><br/>

      <input type="submit" value="Create" required/>
    </form>
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
            <div className="container mt-3">
            <button type="button" className="btn btn-success">Checkout</button>
            </div>
        </div>
        <div className="Header-continued">
        <div className="right order-section-right">


            {food.map((value,index)=>{
              return(

                <div className="card" key={index}>
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