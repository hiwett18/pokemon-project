import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NamePage from "./pages/name";
import Layout from "./pages/layout";
import PokeDetail from "./pages/poke-detail";
import { getPokemon, getSpecificPokemon } from "./api/index";
import "./App.css";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/pokemon",
        element: <NamePage />,
        loader: () => {
          return getPokemon();
        },
      }
    ],
  },
  {
    path: "/pokemon/:name",
    element: <PokeDetail />,
    loader: ({ params }) => {
    const pokeName = params.name;
    return getSpecificPokemon(pokeName);

      
    },
  }
  
]);

function App() {
  
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;