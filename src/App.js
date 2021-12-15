import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [userName, setUserName] = useState('Oladeji')
  let [numOne, setNumOne] = useState(0);
  let [numTwo, setNumTwo] = useState(0);
  numOne = parseInt(numOne)
  numTwo = parseInt(numTwo)
  let [sum, setSum] = useState(0);

  useEffect(() => {
    console.log(userName);
    console.log(numOne)
    console.log(numTwo)
    // document.getElementById('results').innerHTML = sum
    console.log(sum)
  });

  function showResults(evt) {
    setSum(numOne + numTwo);
    document.getElementById('results').innerHTML = sum
  }

  return (
    <div>
      <label htmlFor="userName">User Name</label><input type="text" className="form-control" id="userName" onChange={(evt) => setUserName(evt.target.value)}></input>
      <label htmlFor="numOne" className="form-label">Number 1</label> <input type="text" id="numOne" onChange={(evt) => setNumOne(evt.target.value)} className="form-control"></input>
      <br/>
      <label htmlFor="numTwo" className="form-label">Number 2</label> <input type="text" id="numTwo" className="form-control" onChange={(evt) => setNumTwo(evt.target.value)}></input>
      <br/>
      <button onClick={showResults} className="btn btn-lg btn-success">
        Click me
      </button>
      <p id="results"></p>
    </div>
  );
  
}

export default App;
