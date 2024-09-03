import { Pokemons } from "./components/Pokemons";

export default () => {
  return (
    <main className="container mx-auto">
      <form className="form-control w-full max-w-xs mx-auto items-center mt-10 mb-12">
        <div className="flex w-full">
          <div className="flex relative w-full ">
            <input type="text" placeholder="Search for your language" className="input input-bordered w-full text-neutral-100 border-2023-bavarian-gold-2 focus:outline-2023-bavarian-gold-2 max-w-xs rounded-tr-none rounded-br-none bg-transparent" name="search" />
          </div>
          <button type="submit" className="group btn btn-square rounded-tl-none rounded-bl-none bg-transparent border-2023-bavarian-gold-2 hover:bg-2023-manga-2 hover:text-2023-void-2 hover:border-2023-manga-2"></button>
        </div>
      </form>
      <Pokemons />
    </main>
  );
};
