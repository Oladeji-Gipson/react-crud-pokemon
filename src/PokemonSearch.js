import React, { useState, useEffect } from 'react';
import "./Pokemon.js";
import Pokemon, {pokemonSeedData} from './Pokemon.js';
import AddPokemon from './AddPokemon';
import _ from 'lodash'

function PokemonSearch() {

  let[allPokemon, setPokemon] = useState(null);
  const[searchResults, setSearchResults] = useState(null);
  const[keyWords, setKeyWords] = useState("")
  const [editMode, setEditMode] = useState(false);
  // const [name, setName] = useState('');
  // const [type, setType] = useState('');
  // const [color, setColor] = useState('');

  useEffect(() => {
    if(localStorage){
      const pokemonData =JSON.parse(localStorage.getItem('pokemonData'))
      if(pokemonData){
        setPokemon(pokemonData);
        setSearchResults(pokemonData);
      }
    }
  }, [])

  function resetPokemon() {
    const seedData = pokemonSeedData;
    //Save the seed pokemon data to local storage
    setPokemon(seedData)
    if(localStorage){
      localStorage.setItem('pokemonData', JSON.stringify(seedData))
      console.log('Seed Data Saved!')
    }
  }

  function searchPokemon() {

    if(keyWords){
      const keyWordsArray = keyWords.split(" ")
      // if(alphabet.value) {
      //  let filteredResults = allPokemon.filter(pokemonData => {
      //     return pokemonData = pokemonData.name.includes(alphabet.value)
      //   })
      //   setSearchResults(filteredResults)
      let results = allPokemon.filter(pokemonData => {
        for(const word of keyWordsArray) {
          if(!pokemonData.name.toLowerCase().includes(word) && !pokemonData.type.toLowerCase().includes(word) && !pokemonData.color.toLowerCase().includes(word)) {
            return false;
          }
        }
        return true;
      })
      setSearchResults(results);
    }else {
      setSearchResults(allPokemon)
    }
    console.log(document.querySelector('#alphabet').value)
  }
  function selectSearch() {
    const alphabet = document.querySelector('#alphabet')
    const type = document.querySelector('#type')
    const color = document.querySelector('#color')
    const keyWordsArray = keyWords.split(" ")
    let results = allPokemon.filter(pokemonData => {
      for(const word of keyWordsArray) {
        if(!pokemonData.name.toLowerCase().includes(word) && !pokemonData.type.toLowerCase().includes(word) && !pokemonData.color.toLowerCase().includes(word)) {
          return false;
        }

      }
      return true;
    })
    results = allPokemon.filter(pokemonData => {
      if(!pokemonData.name.toLowerCase().startsWith(alphabet.value) || !pokemonData.type.toLowerCase().startsWith(type.value) || !pokemonData.color.toLowerCase().startsWith(color.value)) {
        return false
      }
      return true
    })
  //   if(alphabet.value){
  //     results = allPokemon.filter((pokemonData) => pokemonData.name.toLowerCase().startsWith(alphabet.value))
  // }
  //   if(type.value){
  //     results = allPokemon.filter((pokemonData) => pokemonData.type.toLowerCase().startsWith(type.value))
  // }
  //   if(color.value){
  //     results = allPokemon.filter((pokemonData) => pokemonData.color.toLowerCase().startsWith(color.value))
  // }

  setSearchResults(results)
  }

  function addPokemon(newPokemon){
    const newAllPokemon = [...allPokemon,newPokemon];
    setPokemon(newAllPokemon);
    setSearchResults(...searchResults,newPokemon);

    savePokemon(newAllPokemon);
  }

  function savePokemon(allPokemon){
    if(localStorage){
      localStorage.setItem('pokemonData', JSON.stringify(allPokemon))
      console.log('Seed Data Saved!')
    }
  }

  // function onEdit(){
  //   setEditMode(true);
  //   setName(allPokemon.name)
  //   setType(allPokemon.type)
  //   setColor(allPokemon.color)
  // }

  // function onChangeName(evt){
  //   const newName = evt.currentTarget.value;
  //   setName(newName);
  // }
  // function onChangeType(evt){
  //   const newType = evt.currentTarget.value;
  //   setType(newType);
  // }
  // function onChangeColor(evt){
  //   const newColor = evt.currentTarget.value;
  //   setColor(newColor)
  // }

  function modifyPokemon(pokemonIndex, updatedPokemon){
    const newAllPokemon = _.map(allPokemon, (pokemon, index) => index === pokemonIndex ? {...pokemon, ...updatedPokemon} : pokemon);
    const newSearchResults = _.map(searchResults, (pokemon, index) => index === pokemonIndex ? {...pokemon, ...updatedPokemon} : pokemon);
    setPokemon(newAllPokemon);
    setSearchResults(newSearchResults);
    savePokemon(newAllPokemon);
  }

  return (
    <div className="container">
      <h1 className="text-center mt-3 mb-3">Get To Know Your Pokemon!</h1>
        <form className="row mx-3 text-center mb-3">
          <div className="input-group mb-3">
            <input type="text" className="form-control mb-3" placeholder="Search" onChange={(evt) => setKeyWords(evt.currentTarget.value)}></input>
            <button type="button" id="btnSearch" className="btn btn-primary btn-lg mb-3" onClick={searchPokemon}>Search By Name</button>
          </div>
          <div className="row input-group">
          <AddPokemon addPokemon={addPokemon}/>
            <div className="col mt-2">
              <label htmlFor="alphabet" className="fw-bold">Select By Letter</label>
              <select className="form-select" id="alphabet" onChange={(evt) => setKeyWords(evt.currentTarget.value)}>
                <option value="">All</option>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
                <option value="e">E</option>
                <option value="f">F</option>
                <option value="g">G</option>
                <option value="h">H</option>
                <option value="i">I</option>
                <option value="j">J</option>
                <option value="k">K</option>
                <option value="l">L</option>
                <option value="m">M</option>
                <option value="n">N</option>
                <option value="o">O</option>
                <option value="p">P</option>
                <option value="q">Q</option>
                <option value="r">R</option>
                <option value="s">S</option>
                <option value="t">T</option>
                <option value="u">U</option>
                <option value="v">V</option>
                <option value="w">W</option>
                <option value="x">X</option>
                <option value="y">Y</option>
                <option value="z">Z</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="type" className="fw-bold">Pokemon Type</label>
              <select className="form-select" id="type" onChange={(evt) => setKeyWords(evt.currentTarget.value)}>
                <option value="">All</option>
                {_(allPokemon).map(pokemonData => pokemonData.type).sort().uniq().map(type => <option key={type} value={type.toLowerCase()}>{type}</option>).value()}
              </select>
            </div>
            <div className="col">
              <label htmlFor="color" className="fw-bold">Select By Color</label>
              <select className="form-select" id="color" onChange={(evt) => setKeyWords(evt.currentTarget.value)}>
                <option value="">All</option>
                {_(allPokemon).map(pokemonData => pokemonData.color).sort().uniq().map(color => <option key={color} value={color.toLowerCase()}>{color}</option>).value()}
              </select>
            </div>
            <div className="col mt-3">
              <button type="button" className="btn btn-lg btn-success" onClick={selectSearch}>Search By Values</button>
            </div>
          </div>
        </form>
      <ul className="row text-center">
        {!allPokemon && <button className="btn btn-lg btn-warning" onClick={resetPokemon}>Reset</button>}
        {searchResults && searchResults.map((pokemon, index) => {
            if(pokemon.type === "Grass") {
              return (
                <Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>
              )
            }
            if(pokemon.type === "Fire") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Water") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Bug") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Flying") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Fairy") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Psychic") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Rock") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Ice") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Ghost") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Dragon") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            if(pokemon.type === "Normal") {
              return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
            }
            return (<Pokemon pokemon={pokemon} pokemonIndex={index} modifyPokemon={modifyPokemon}/>)
        })}
      </ul>
    </div>
  );
};

export default PokemonSearch