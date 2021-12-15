import React, {
  useState
} from 'react';

function AddPokemon(props){

  const[pokemonName, setPokemonName] = useState('')
  const[pokemonType, setPokemonType] = useState('')
  const[pokemonColor, setPokemonColor] = useState('')

  function doWork(){

    const newPokemon = {'name':pokemonName, 'type':pokemonType, 'color':pokemonColor};
    props.addPokemon(newPokemon);
  }

  return(
    <div className="row mb-3">
      <div className="col-md-3">
          <label htmlFor="txtName" className='form-label'>Pokemon Name</label>
          <input type="text" id="txtName" placeholder="Pokemon Name" className="form-control" onChange={(evt) => setPokemonName(evt.currentTarget.value)} value={pokemonName} />
      </div>
      <div className="col-md-3">
          <label htmlFor="txtType" className='form-label'>Pokemon Type</label>
          <input type="text" id="txtType" placeholder="Pokemon Type" className="form-control" onChange={(evt) => setPokemonType(evt.currentTarget.value)} value={pokemonType} />
      </div>
      <div className="col-md-3">
          <label htmlFor="txtColor"className='form-label'>Pokemon Color</label>
          <input type="text" id="txtColor" placeholder="Pokemon Color" className="form-control" onChange={evt => setPokemonColor(evt.currentTarget.value)} value={pokemonColor} />
      </div>
      <div className="col-md-3">
          <button type="button" id="btnAdd" className="btn btn-lg btn-warning mt-3" onClick={doWork}>Add Pokemon</button>
      </div>    
  </div>
);

}

export default AddPokemon;