"use client";

import React, { useEffect, useState } from "react";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return <div>포켓몬 리스트 부분</div>;
};

export default PokemonList;
