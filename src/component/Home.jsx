import React from 'react'
import '../assets/NavBar.css' 
import { useState } from 'react'

const Home = () => {
    var sty={
        fontsize: '12px',
        backgroundColor: '',
        color: 'black',
        padding: '10px',
        textTransform: 'uppercase',
        fontFamily: 'arial,sans-serif',        
   }
   function increment(){
    set(count+1)
   }
   function decrement(){
    if(count>0)
    set(count-1)
   }
   function reset(){
    set(count=0)
   }
   var[count,set]=useState(0)
  return (
    <header>
        <h1 style ={sty}>kec</h1>
        <h2 id='text'>Click here {count}</h2>
        <div className = 'button' >
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>drecrease</button>
        <button onClick={reset}>Reset</button>
        </div>
        <p Class = 'Box-model'>row</p>
    </header>
  )
}
export default Home