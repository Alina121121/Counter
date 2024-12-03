import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

export default function App() {
        
  const [num, setNum] = useState(0); 

  
  const plus = () => {
      setNum(num + 1);
  };

  const minus = () => {
      if (num > 0) { 
          setNum(num - 1);
      }
  };

  const zero = () => {
      setNum(0); 
  };

  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
      <div className="count">
          <h1>Counter App</h1>
          <div id="counter" className="count2">
              <div id="countNumber" className="countNum">{num}</div> 
              <div className='countAll'>
              <div className="countPlus">
                  <button onClick={plus}>+</button> 
              </div>
              <div className="countMinus">
                  <button onClick={minus}>-</button> 
              </div>
              <div className='countZero'>
                  <button onClick={zero}>0</button> 
              </div>
              </div>
          </div>   
      </div>
      </ div>  
  );
}


 


