import { useEffect, useState } from 'react';
import { Pagination } from './Pagination';
import { PokemonCard } from './PokemonCard';
import { PokemonCardSkeleton } from './PokemonCardSkeleton';

export const Pokemons = () => {
  const [poke1, setPoke1] = useState([]);
  const [poke2, setPoke2] = useState([]);
  const [poke3, setPoke3] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      try {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=${page * 20}&offset=${(page - 1) * 20}`)
          .then(response => response.json())
          .then(pokemons => {
            Promise
              .all(pokemons.results.map(result => fetch(result.url).then(response => response.json())))
              .then(results => {
                setPoke1(results.filter((_, index) => index % 3 === 0));
                setPoke2(results.filter((_, index) => index % 3 === 1));
                setPoke3(results.filter((_, index) => index % 3 === 2));
              })
            setMaxPage(pokemons.count / 20);
          })
          .finally(() => setIsLoading(false))
      } catch (e) {
        console.error(e);
      }
    }

    return () => {
      ignore = true;
    };
  }, [page]);

  return (
    <>
      {!isLoading && <Pagination currentPage={page} maxPage={maxPage} updatePage={(page) => {setPage(page); setIsLoading(true) }} />}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-20">
        <div className="grid gap-4">
          {isLoading ? (
            <>
              <PokemonCardSkeleton />
              <PokemonCardSkeleton />
              <PokemonCardSkeleton />
            </>
          ) : (
            poke1.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          )}
        </div>
        <div className="grid gap-4">
          {isLoading ? (
            <>
              <PokemonCardSkeleton />
              <PokemonCardSkeleton />
              <PokemonCardSkeleton />
            </>
          ) : (
            poke2.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          )}
        </div>
        <div className="grid gap-4">
          {isLoading ? (
            <>
              <PokemonCardSkeleton />
              <PokemonCardSkeleton />
              <PokemonCardSkeleton />
            </>
          ) : (
            poke3.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
          )}
        </div>
      </div>
    </>
  )
}
