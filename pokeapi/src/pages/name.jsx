import { useLoaderData, Link } from "react-router-dom";
import { getPokemon } from "../api/index";

export default function NamePage() {
  const pokemon = useLoaderData();
  
  return (
    <div className="name-page">
      {pokemon ? (
        <ul>
          {pokemon.map((p) => (
            <li>
                <Link key={p} to={{p}}>{p}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>This is the Pokemon name page</div>
      )}
    </div>
  );
}