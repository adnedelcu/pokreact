import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(pokemon => setPokemon(pokemon))
        .catch(err => console.error(err));
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="card bg-base-100 w-72 shadow-xl">
      <figure className="bg-white min-h-24">
        <img src={pokemon?.sprites?.front_default} />
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{pokemon?.name}</h2>
        <div className="justify-end">
          {pokemon?.types?.map(type => <div key={type.slot} className="badge badge-neutral mr-2">{type.type.name}</div>)}
        </div>
      </div>
    </div>
  )
}
