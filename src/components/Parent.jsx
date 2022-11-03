import React , {useState}from 'react'


const Parent = () => {
    const [message, setMessage] =useState("JavaScript");
    const chooseMessage = (message) => {
      setMessage(message);
    };
    return (
      <div>
        <h1>Passing data from Parent to Child:</h1>
        <p>we can pass the data from parent to child in the form of props</p>
        <h3>{message}</h3>
        <Child chooseMessage={chooseMessage} />
      </div>
    );
  };
  const Child = ({ chooseMessage }) => {
    let m = 'React.js';
    return (
      <div>
        <button id="parent" onClick={() => chooseMessage(m)}>Change Message</button>
      </div>
    );
  };

  export default Parent;