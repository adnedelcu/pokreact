import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload';

export const PokemonCard = ({pokemon}) => {
  const url = pokemon?.sprites?.front_default;

  return (
    <div className="card bg-base-100 w-72 shadow-xl">
      <figure className="bg-white min-h-24">
        <LazyLoad height="6rem">
          <img src={url} />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{pokemon?.name}</h2>
        <div className="justify-end">
          {pokemon?.types.map(type => <div key={type.slot} className="badge badge-neutral mr-2">{type.type.name}</div>)}
        </div>
      </div>
      <div className="card-actions">
        <Link to={`/pokemon/${pokemon?.id}`} className="btn btn-primary mt-2">Check more</Link>
      </div>
    </div>
  )
}
