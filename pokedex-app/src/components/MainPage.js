import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import PokemonInfo from "./Pokemon";

const MainPage = () => {
    const [Pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        console.log(res.data.results)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previos);
        getPokemon(res.data.results)
        // const newState = [...Pokemon, ...res.data.results]
        // newState.sort((a, b) => a.id > b.id ? 1 : -1)
        // setPokemon(newState)
        setLoading(false);
        
    }
    const getPokemon = async (res) => {
        // setPokemon([])
        res.map(async (item) => {
            const result = await axios.get(item.url)
            console.log(result.data)
            setPokemon(state => {
                console.dir( state) 
                 const newState = [...state, result.data]
                // newState.sort((a, b) => a.id > b.id ? 1 : -1)
                return newState;
            })
        })
        console.log(Pokemon)
    }
    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <div className="container">
            <div className="left-contnet">
                <Card pokemon={Pokemon} loading={loading} InfoPokemon={poke => setPokeDex(poke)} />
            
                <div className="btn-group">
                    {prevUrl && < button onClick={() => {
                        setPokemon([])
                        setUrl(prevUrl)
                    }}>Previos</button>
                }

                    {nextUrl && <button onClick={() => {
                        setPokemon([])
                        setUrl(nextUrl)
                    }}>Next</button>
                }
                </div>
            </div>
            <div className="right-contnet">
                <PokemonInfo data={pokeDex} />
            </div>
        </div>
    )
};



export default MainPage;