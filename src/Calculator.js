import './Calculator.css'
import React, { useState, useEffect } from 'react';

function Calculator() {
  
  const [numOne, setNumOne] = useState(0)
  const [numTwo, setNumTwo] = useState(0)
  const [sum, setSum] = useState(0)

  function add(evt) {
    if(evt.currentTarget.id === 'txtNumOne'){
      setNumOne(evt.currentTarget.value)
    }
    if(evt.currentTarget.id === 'txtNumTwo'){
      setNumTwo(evt.currentTarget.value)
    }
    let sum = parseInt(numOne) + parseInt(numTwo)

    setSum(sum)
  }

  return(
    <div className='container'>
      <h1>My Addition Calculator</h1>
      <form id="frmAddition">
        <div>
          <label className="form-label" htmlFor="txtNumOne">Addend 1</label> <input type='text' className="form-control" id="txtNumOne" name ="txtNumOne" value={numOne} onChange={(evt) => setNumOne(evt.target.value)}></input>
        </div>
        <div>
          <label className="form-label" htmlFor="txtNumTwo">Addend 2</label> <input type='text' className="form-control" id="txtNumTwo" name ="txtNumTwo" value={numTwo} onChange={(evt) => setNumOne(evt.target.value)}></input>
        </div>
        <button type="button" className="btn btn-lg btn-success" onClick={add}/>
        <output id="results">{sum}</output>
      </form>
    </div>
  )
}

export default Calculator