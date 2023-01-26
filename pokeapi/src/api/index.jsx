import axios from "axios"
import { useState, useEffect } from "react";
import NamePage from "../pages/name";
const API_URL = "https://pokeapi.co/api/v2";


export const getPokemon = async () => {
    try {
        const [pokemons, setPokemons] = useState([]);
​
  useEffect(async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
​
    setPokemons(data.results);
  });
​
  return (
    <ul>
      {pokemons.map(({ name, url }) => (
        <li key={url}>{name}</li>
      ))}
    </ul>
  );
       

    } catch(e){
        console.log(e);
        return "Failed to fetch pokemon"
    }
}


export const getSpecificPokemon = async (name) => {
    try {
        const apiResponse = await axios.get(`${API_URL}/pokemon/${name}`); 
        
        const data = apiResponse.data; 

        return data; 
    } catch(e){
        console.log(e);
        return "Failed to fetch pokemon"
    }
}