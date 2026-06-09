import React, { useEffect, useState } from "react";
import Card from "./Card";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loding, setLoding] = useState(true)
  const [search, setSearch] = useState('')
  const API = "https://pokeapi.co/api/v2/pokemon?limit=48";

  const fetchpokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const urldata = data.results.map(async (elem, idx) => {
        const ress = await fetch(elem.url);
        const dataa = await ress.json();

        return dataa;
      });

      const detaildata = await Promise.all(urldata);

      console.log(detaildata);

      setPokemon(detaildata);
      setLoding(false)
    } catch (error) {
      console.log(error);
      setLoding(false)
    }
  };

  useEffect(() => {
    fetchpokemon();
  }, []);

  const searchdata = pokemon.filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase()));


  if(loding){
    return <div className="load">
        <div className="loding"></div>
        <h1>Loding...</h1>
    </div>
  }

  return (
    <div className="main">
      <h1>Lets Catch Pokemon</h1>
      <input type="text" placeholder="Search Pokemon" value={search}
      onChange={(elem) => setSearch(elem.target.value)}
      />
      <div className="cardsection">
        {searchdata.map((elem) => {
            return <Card key={elem.id} pokemondata={elem} />
        })}

      </div>
    </div>
  );
};

export default Pokemon;
