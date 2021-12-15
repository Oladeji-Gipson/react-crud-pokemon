import {useState, useEffect} from 'react';

export const pokemonSeedData = [{"name":"Bulbasaur","type":"Grass","color":"Turquoise"},
{"name":"Ivysaur","type":"Grass","color":"Pink"},
{"name":"Venusaur","type":"Grass","color":"Green"},
{"name":"Charmander","type":"Fire","color":"Yellow"},
{"name":"Charmeleon","type":"Fire","color":"Maroon"},
{"name":"Charizard","type":"Fire","color":"Indigo"},
{"name":"Squirtle","type":"Water","color":"Maroon"},
{"name":"Wartortle","type":"Water","color":"Blue"},
{"name":"Blastoise","type":"Water","color":"Maroon"},
{"name":"Caterpie","type":"Bug","color":"Fuchsia"},
{"name":"Metapod","type":"Bug","color":"Pink"},
{"name":"Butterfree","type":"Bug","color":"Red"},
{"name":"Weedle","type":"Bug","color":"Aquamarine"},
{"name":"Kakuna","type":"Bug","color":"Mauve"},
{"name":"Beedrill","type":"Bug","color":"Pink"},
{"name":"Pidgey","type":"Flying","color":"Khaki"},
{"name":"Pidgeotto","type":"Flying","color":"Khaki"},
{"name":"Pidgeot","type":"Flying","color":"Blue"},
{"name":"Rattata","type":"Normal","color":"Goldenrod"},
{"name":"Raticate","type":"Normal","color":"Green"},
{"name":"Spearow","type":"Flying","color":"Pink"},
{"name":"Fearow","type":"Flying","color":"Purple"},
{"name":"Ekans","type":"Poison","color":"Aquamarine"},
{"name":"Arbok","type":"Poison","color":"Fuchsia"},
{"name":"Pikachu","type":"Electric","color":"Turquoise"},
{"name":"Raichu","type":"Electric","color":"Orange"},
{"name":"Sandshrew","type":"Ground","color":"Crimson"},
{"name":"Sandslash","type":"Ground","color":"Goldenrod"},
{"name":"Nidoran♀","type":"Poison","color":"Khaki"},
{"name":"Nidorina","type":"Poison","color":"Green"},
{"name":"Nidoqueen","type":"Poison","color":"Pink"},
{"name":"Nidoran♂","type":"Poison","color":"Orange"},
{"name":"Nidorino","type":"Poison","color":"Fuchsia"},
{"name":"Nidoking","type":"Poison","color":"Maroon"},
{"name":"Clefairy","type":"Fairy","color":"Maroon"},
{"name":"Clefable","type":"Fairy","color":"Pink"},
{"name":"Vulpix","type":"Fire","color":"Green"},
{"name":"Ninetales","type":"Fire","color":"Violet"},
{"name":"Jigglypuff","type":"Normal","color":"Teal"},
{"name":"Wigglytuff","type":"Normal","color":"Aquamarine"},
{"name":"Zubat","type":"Flying","color":"Puce"},
{"name":"Golbat","type":"Flying","color":"Red"},
{"name":"Oddish","type":"Grass","color":"Yellow"},
{"name":"Gloom","type":"Grass","color":"Yellow"},
{"name":"Vileplume","type":"Grass","color":"Red"},
{"name":"Paras","type":"Bug","color":"Turquoise"},
{"name":"Parasect","type":"Bug","color":"Indigo"},
{"name":"Venonat","type":"Bug","color":"Green"},
{"name":"Venomoth","type":"Bug","color":"Fuchsia"},
{"name":"Diglett","type":"Ground","color":"Aquamarine"},
{"name":"Dugtrio","type":"Ground","color":"Violet"},
{"name":"Meowth","type":"Normal","color":"Turquoise"},
{"name":"Persian","type":"Normal","color":"Yellow"},
{"name":"Psyduck","type":"Psychic","color":"Yellow"},
{"name":"Golduck","type":"Psychic","color":"Fuchsia"},
{"name":"Mankey","type":"Fighting","color":"Green"},
{"name":"Primeape","type":"Fighting","color":"Indigo"},
{"name":"Growlithe","type":"Fire","color":"Blue"},
{"name":"Arcanine","type":"Fire","color":"Purple"},
{"name":"Poliwag","type":"Water","color":"Mauve"},
{"name":"Poliwhirl","type":"Water","color":"Violet"},
{"name":"Poliwrath","type":"Water","color":"Puce"},
{"name":"Abra","type":"Psychic","color":"Yellow"},
{"name":"Kadabra","type":"Psychic","color":"Puce"},
{"name":"Alakazam","type":"Psychic","color":"Khaki"},
{"name":"Machop","type":"Fighting","color":"Aquamarine"},
{"name":"Machoke","type":"Fighting","color":"Maroon"},
{"name":"Machamp","type":"Fighting","color":"Maroon"},
{"name":"Bellsprout","type":"Grass","color":"Pink"},
{"name":"Weepinbell","type":"Grass","color":"Teal"},
{"name":"Victreebel","type":"Grass","color":"Green"},
{"name":"Tentacool","type":"Poison","color":"Aquamarine"},
{"name":"Tentacruel","type":"Poison","color":"Indigo"},
{"name":"Geodude","type":"Rock","color":"Indigo"},
{"name":"Graveler","type":"Rock","color":"Khaki"},
{"name":"Golem","type":"Rock","color":"Yellow"},
{"name":"Ponyta","type":"Fire","color":"Puce"},
{"name":"Rapidash","type":"Fire","color":"Violet"},
{"name":"Slowpoke","type":"Water","color":"Goldenrod"},
{"name":"Slowbro","type":"Water","color":"Khaki"},
{"name":"Magnemite","type":"Electric","color":"Turquoise"},
{"name":"Magneton","type":"Electric","color":"Goldenrod"},
{"name":"Farfetch’d","type":"Normal","color":"Orange"},
{"name":"Doduo","type":"Flying","color":"Maroon"},
{"name":"Dodrio","type":"Flying","color":"Khaki"},
{"name":"Seel","type":"Ice","color":"Violet"},
{"name":"Dewgong","type":"Ice","color":"Goldenrod"},
{"name":"Grimer","type":"Poison","color":"Maroon"},
{"name":"Muk","type":"Poison","color":"Indigo"},
{"name":"Shellder","type":"Ice","color":"Fuchsia"},
{"name":"Cloyster","type":"Ice","color":"Teal"},
{"name":"Gastly","type":"Ghost","color":"Aquamarine"},
{"name":"Haunter","type":"Ghost","color":"Indigo"},
{"name":"Gengar","type":"Ghost","color":"Aquamarine"},
{"name":"Onix","type":"Rock","color":"Pink"},
{"name":"Drowzee","type":"Psychic","color":"Fuchsia"},
{"name":"Hypno","type":"Psychic","color":"Puce"},
{"name":"Krabby","type":"Water","color":"Crimson"},
{"name":"Kingler","type":"Water","color":"Violet"},
{"name":"Voltorb","type":"Electric","color":"Turquoise"},
{"name":"Electrode","type":"Electric","color":"Mauve"},
{"name":"Exeggcute","type":"Psychic","color":"Turquoise"},
{"name":"Exeggutor","type":"Psychic","color":"Puce"},
{"name":"Cubone","type":"Ground","color":"Green"},
{"name":"Marowak","type":"Ground","color":"Blue"},
{"name":"Hitmonlee","type":"Fighting","color":"Pink"},
{"name":"Hitmonchan","type":"Fighting","color":"Teal"},
{"name":"Lickitung","type":"Normal","color":"Goldenrod"},
{"name":"Koffing","type":"Poison","color":"Aquamarine"},
{"name":"Weezing","type":"Poison","color":"Indigo"},
{"name":"Rhyhorn","type":"Rock","color":"Indigo"},
{"name":"Rhydon","type":"Rock","color":"Orange"},
{"name":"Chansey","type":"Normal","color":"Blue"},
{"name":"Tangela","type":"Grass","color":"Turquoise"},
{"name":"Kangaskhan","type":"Normal","color":"Teal"},
{"name":"Horsea","type":"Water","color":"Fuchsia"},
{"name":"Seadra","type":"Water","color":"Crimson"},
{"name":"Goldeen","type":"Water","color":"Violet"},
{"name":"Seaking","type":"Water","color":"Violet"},
{"name":"Staryu","type":"Psychic","color":"Blue"},
{"name":"Starmie","type":"Psychic","color":"Green"},
{"name":"Mr. Mime","type":"Fairy","color":"Indigo"},
{"name":"Scyther","type":"Bug","color":"Yellow"},
{"name":"Jynx","type":"Ice","color":"Fuchsia"},
{"name":"Electabuzz","type":"Electric","color":"Blue"},
{"name":"Magmar","type":"Fire","color":"Indigo"},
{"name":"Pinsir","type":"Bug","color":"Maroon"},
{"name":"Tauros","type":"Normal","color":"Teal"},
{"name":"Magikarp","type":"Water","color":"Pink"},
{"name":"Gyarados","type":"Water","color":"Khaki"},
{"name":"Lapras","type":"Ice","color":"Crimson"},
{"name":"Ditto","type":"Normal","color":"Goldenrod"},
{"name":"Eevee","type":"Normal","color":"Aquamarine"},
{"name":"Vaporeon","type":"Water","color":"Purple"},
{"name":"Jolteon","type":"Electric","color":"Teal"},
{"name":"Flareon","type":"Fire","color":"Green"},
{"name":"Porygon","type":"Normal","color":"Mauve"},
{"name":"Omanyte","type":"Rock","color":"Purple"},
{"name":"Omastar","type":"Rock","color":"Goldenrod"},
{"name":"Kabuto","type":"Rock","color":"Green"},
{"name":"Kabutops","type":"Rock","color":"Turquoise"},
{"name":"Aerodactyl","type":"Rock","color":"Aquamarine"},
{"name":"Snorlax","type":"Normal","color":"Purple"},
{"name":"Articuno","type":"Ice","color":"Fuchsia"},
{"name":"Zapdos","type":"Electric","color":"Violet"},
{"name":"Moltres","type":"Fire","color":"Khaki"},
{"name":"Dratini","type":"Dragon","color":"Purple"},
{"name":"Dragonair","type":"Dragon","color":"Blue"},
{"name":"Dragonite","type":"Dragon","color":"Yellow"},
{"name":"Mewtwo","type":"Psychic","color":"Violet"},
{"name":"Mew","type":"Psychic","color":"Green"}]

function Pokemon(props) {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');

  useEffect(()=> {
    setName(props.pokemon.name)
    setType(props.pokemon.type)
    setColor(props.pokemon.color)
  })

  function onChangeName(evt){
    const newName = evt.currentTarget.value;
    setName(newName);
  }
  function onChangeType(evt){
    const newType = evt.currentTarget.value;
    setType(newType);
  }
  function onChangeColor(evt){
    const newColor = evt.currentTarget.value;
    setColor(newColor)
  }

  function onEdit(){
    setEditMode(true);
    setName(props.pokemon.name)
    setType(props.pokemon.type)
    setColor(props.pokemon.color)
  }

  function onSave(){
    const updatedPokemon = {name: name, type: type, color: color};

    props.modifyPokemon(props.pokemonIndex, updatedPokemon);
    setEditMode(false);
  }

  let cardClasses ='card'

  if(props.pokemon.type === 'Grass') {
    cardClasses += ' bg-success'
  }
  if(props.pokemon.type === 'Fire') {
    cardClasses += ' bg-danger'
  }
  if(props.pokemon.type === 'Water') {
    cardClasses += ' bg-primary' 
  }
  if(props.pokemon.type === 'Bug') {
    cardClasses += ' bg-warning'
  }
  if(props.pokemon.type === 'Flying') {
    cardClasses += ' bg-secondary'
  }
  if(props.pokemon.type === 'Normal') {
    cardClasses += ' text-primary'
  }
  if(props.pokemon.type === 'Poison') {
    cardClasses += ' bg-dark text-white'
  }
  if(props.pokemon.type === 'Electric') {
    cardClasses += ' bg-warning text-white'
  }
  if(props.pokemon.type === 'Ground') {
    cardClasses += ' bg-warning text-success'
  }
  if(props.pokemon.type === 'Rock') {
    cardClasses += ' bg-warning text-light'
  }
  if(props.pokemon.type === 'Ice') {
    cardClasses += ' bg-info'
  }
  if(props.pokemon.type === 'Psychic') {
    cardClasses += ' bg-secondary text-danger'
  }
  if(props.pokemon.type === 'Fairy') {
    cardClasses += ' bg-primary text-white'
  }
  if(props.pokemon.type === 'Fighting') {
    cardClasses += ' bg-danger text-white'
  }
  if(props.pokemon.type === 'Ghost') {
    cardClasses += ' bg-dark text-danger'
  }
  if(props.pokemon.type === 'Dragon') {
    cardClasses += ' bg-info text-warning'
  }

  return(
    <div class="col-4 my-2">
      {!editMode && 
              <div className={cardClasses} >
                <h5 class="card-title">Pokemon Name: {props.pokemon.name}</h5>
                <h6 class="card-subtitle mb-2">Pokemon Type: {props.pokemon.type}</h6>
                <h6 class="card-subtitle mb-2">Shiny Color: {props.pokemon.color}</h6>
                <button className="btn btn-sm btn-light" onClick={onEdit}>Edit</button>
              </div>
            }
      {editMode &&
            <form>
            <div class="card-body">
            <label htmlFor='txtName'>Pokemon Name</label>
            <input type="text" id='txtName' className="form-control" value={name} onChange={onChangeName} />
            <label htmlFor='txtType'>Pokemon Type</label>
            <input type="text" id='txtType' className="form-control" value={type} onChange={(onChangeType)} />
            <label htmlFor='txtColor'>Pokemon Color</label>
            <input type="text" id='txtColor' className="form-control" value={color} onChange={onChangeColor} />
            <button type="button" onClick={onSave}>Save</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </form>}
        </div>
  )

}
//fire - bg-danger
//Water - bg-primary
//Bug - bg-warning
//Flying - bg-secondary
//Poison - bg-dark text-white
//Fairy - bg-primary text-white
//Ground - bg-warning text-success
//Psychic - bg-secondary text-danger
//Rock - bg-warning text-light
//Ice - bg-info
//Ghost - bg-dark text-danger
//Dragon - bg-info text-warning
//Normal - text-primary

export default Pokemon;