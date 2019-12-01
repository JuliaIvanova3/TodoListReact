import React from 'react';
import logo from './logo.svg';
import './App.css';


const students =[
  {
    name: "Julia Ivanova",
    score: 55
  },
  {
    name: "Natali Ivanova",
    score: 56
  }
];

const RenderPropsApp = ()=>{

  const[value, setValue]= useState(0);

  return(
    <div>
      <h1>Counter value: {value}</h1>
      <button
        onClick={()=>{
          setValue(value+1);
        }}>
            Increment
      </button>
      <button
        onClick={()=>{
          setValue(value-1);
        }}>
            Decrement
      </button>
    </div>
  );
};

export default RenderPropsApp;
