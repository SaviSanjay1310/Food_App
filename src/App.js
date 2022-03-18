import logo from './logo.svg';

import './App.css';
import React,{useState, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Pizza from './Components/Pizza';
import Burger from './Components/Burger';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Header from './Components/Header';
import axios from 'axios';

let url="https://fod-app.herokuapp.com/food";
export const FoodContext= React.createContext();
function App() {
    let [data,setData]=useState([]);
    let [cart,setCart]=useState([]);
    let [cartValue,setCartValue]=useState(0);

  useEffect(()=>{
    getData();
  },[])

  let getData=async()=>{
    let response= await axios.get(url);
    //console.log(response.data);
    setData(response.data);
  }

  return <>
  <BrowserRouter>
    <FoodContext.Provider value={{data,cart,setCart,cartValue,setCartValue}}>
      <Header/>
      <Routes>
        <Route path='/pizza' element={<Pizza/>}/>
        <Route path='/burger' element={<Burger/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </FoodContext.Provider>
  
  
  </BrowserRouter>
 
  
  </>
}

export default App;


