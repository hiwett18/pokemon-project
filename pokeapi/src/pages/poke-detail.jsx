import { useLoaderData } from "react-router-dom";

export default function PokeDetail() {
  const PokeDetailData = useLoaderData();

  console.log(PokeDetailData);

  return (
    <div>
      <img
        src={PokeDetailData.sprites.front_default}
      />  
    </div>
  );
}