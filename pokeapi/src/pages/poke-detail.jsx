import { useLoaderData } from "react-router-dom";

export default function PokeDetail() {
  const PokeDetailData = useLoaderData();

  console.log(PokeDetailData);

  return (
    <div>
      {PokeDetailData ? (
       <div>
          <img
            src={PokeDetailData.data.images.original.url}
            height={PokeDetailData.data.images.original.height}
            width={PokeDetailData.data.images.original.width}
          />
         
            <p>{PokeDetailData.data.title}</p>
          </div>
        
      ) : (
        <div>Still loading Pokemon Detail</div>
      )}
    </div>
  );
}