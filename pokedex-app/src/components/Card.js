import React from "react";

const Card = ({ pokemon, loading, PokemonInfo }) => {
    console.log(pokemon);
    const filteredPokemons = pokemon.filter((value, index, self) =>
        self.findIndex(item => item.name === value.name) === index
    );
    console.log(filteredPokemons);
    return (
        < >
            {
                loading ? <h1>loading....</h1> :
                    filteredPokemons.map((item) => {
                        return (

                            <div className="card" key={item.id} onClick={() => PokemonInfo(item)}>
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="" />
                                <h2>{item.name}</h2>
                            </div>

                        )
                    }
                    )
            }

        </>

    )
}
export default Card;