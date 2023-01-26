import { useLoaderData, Link } from "react-router-dom";
import { getPokemon } from "../api/index";

export default function NamePage() {
  let pokemon = useLoaderData();
  pokemon = pokemon.results
  return (
    <div className="name-page">
      {pokemon ? (
        <ul>
          {pokemon.map((p) => (
            <li key={p.name}>
                <Link to={`${p.name}`}>{p.name}</Link>
              
            </li>
          ))}

        </ul>
      ) : (
        <div>This is the Pokemon name page</div>
      )}
    </div>
  );
}