import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NamePage from "./pages/name";
import Layout from "./pages/layout";
// import PokeDetail from "./pages/poke-detail";
// import { getName, getPokemon, getSpecificPokemon } from "./api/index";
import "./App.css";
import { useState, useEffect } from "react";


function GetPokemon (){
  const [pokemon, setPokemon] = useState([]);
​
useEffect(async () => {
  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
    setPokemon(res.data.results.map(p => p.name))
  });
},[])
  return (
    <NamePage pokemon={pokemon} />
  )
  
​}


 


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "name",
        element: <NamePage />,
        loader: () => {
          return GetPokemon();
        },
      }
    ],
  },
  
]);

function App() {
  
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;