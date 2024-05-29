import React, {useState, useEffect} from "react";
import {Navbar} from "../../components/Navbar";
import axios from "axios";

export function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try{
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemon(response.data.results);
        console.log(pokemon);
      } catch (error){
        console.log(error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {
          pokemon.map((poke) => {
            return <li>{poke.name}</li>
          })
        }
      </ul>
    </div>
  )
}
