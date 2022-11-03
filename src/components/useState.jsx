import React,{useState} from "react";
import '../App.css'


export default function Question2() {
    const[state ,setState]=useState(0);
const increment=()=>{
    setState(state + 1)
}
  return (
    <>
   <h1>useState:</h1>
   <p>The React useState Hook allows us to track state in a function component.</p>
   <p>We initialize our state by calling useState in our function component.
    useState accepts an initial state and returns two values: <br />
    **The current state. <br />
    **A function that updates the state.</p>

    <h3 id="q2h1">Counter:{state}</h3>
<button id="q2btn" onClick={(increment)}> Increment</button>    
    
    </>
  )
}