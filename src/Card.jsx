import React from "react";

const Card = ({ pokemondata }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={pokemondata.sprites.other.dream_world.front_default} alt="" />
        <h2>{pokemondata.name}</h2>
        <h3>{pokemondata.types.map((type) => type.type.name).join(" , ")}</h3>
      </div>
      <div className="buttom1">
        <h4>
          Hight: <span>{pokemondata.height}</span>
        </h4>
        <h4>
          Weight: <span>{pokemondata.weight}</span>
        </h4>
        <h4>
          Speed: <span>{pokemondata.stats[5].base_stat}</span>
        </h4>
      </div>
      <div className="buttom2">
        <div className="left">
          <span>{pokemondata.base_experience}</span>
          <h4>Experience</h4>
        </div>
        <div className="center">
          <span>{pokemondata.stats[1].base_stat}</span>
          <h4>Attack</h4>
        </div>
        <div className="right">
          <span>{pokemondata.abilities.map((ability) => ability.ability.name).slice(0, 1).join(" , ")}</span>
          <h4>Ability</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
