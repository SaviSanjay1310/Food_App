import React, { useEffect } from 'react';
import {useContext, useState} from 'react';
import {FoodContext} from '../App';
import {Link, Navigate} from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useNavigate} from 'react-router-dom';


function Cart() {
  let context = useContext(FoodContext);
  let navigate = useNavigate();
  
  //console.log(context.cart)
 
  function assigncount(){
    context.cart.map(b=>b.count=1);
  console.log(context.cart);
  }
  useEffect(()=>{
    assigncount();
    navigate('/cart')
  },[])
 
  
  let cartPrice=0;
 return <div className="product-wrapper">
    
    <div className="order">
    <Link to='/'> 
        <b className="place-order">PLACE AN ORDER</b>
      </Link>
    </div>
  { 
    context.cart.length>0?<>
     <div className="cart-title">Cart</div>
    {
    context.cart.map((b,i)=>{
      
      console.log(b,b.count);
      cartPrice+=(Number(b.price)*Number(b.count))
       return <div className="product-item-wrapper" key={i}>
       
        <div className="product-details">
          <b>{b.name}</b>
        <div className="product-price">&#8377; {b.price}</div>
        <div className="product-description">{b.description}</div>
        <div className="arrow-btn">
        <button className="triangle-left" onClick={()=>{
          let arr=[...context.cart] 
          arr[i].count--;
          console.log(arr);
          context.setCart(arr); 
          console.log(context.cart);
        }}><ArrowBackIosNewIcon/></button>
        <span className='count-display'>{b.count}</span>
        <button className="triangle-right" onClick={()=>{
         let arr=[...context.cart] 
         arr[i].count++;
         console.log(arr);
         context.setCart(arr);
         console.log(context.cart);
        
        }}><ArrowForwardIosIcon/></button>
        </div>
        </div>

        <div className="product-image">
          
          <button className="cancle-btn" onClick={()=>{
            console.log(b,context.cart.indexOf(b));
          context.cart.splice(context.cart.indexOf(b),1);
          console.log(context.cart);
          let arr=[...context.cart];
          context.setCart(arr)
          context.setCartValue(arr.length);
          }}><CancelIcon/></button>
          <img src={b.image} alt={b.name}/>
        </div>
        </div>
        })
      }
        <div className="price-card">
          <div className="price-value">Total Price:{cartPrice}</div>
        
        <Link to="/">
          <div>Go To HOME</div>
        </Link>
        </div>
        
        </>:<h3 className="empty-cart">Your Cart is Empty</h3>
    }
  
  
  </div>
}

export default Cart