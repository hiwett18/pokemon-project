import axios from "axios"
import { useState, useEffect } from "react";
import NamePage from "../pages/name";
const API_URL = "https://pokeapi.co/api/v2";


export const getPokemon = async () => {
    try {

    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const data = response.data;
  return data;
       

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