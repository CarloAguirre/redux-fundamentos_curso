import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlide"


export const getPokemon = (page = 0)=>{
    return async(dispatch, getState)=>{
        dispatch(startLoadingPokemons())
        
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
        // const data = await resp.json();

        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page*10}`)
        console.log(data)

        
        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
        
    }
}