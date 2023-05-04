import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from './store/slices/pokemon'
import { store } from './store/store'

export const PokemonApp = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch( getPokemon(0) )
  }, [])

  const { pokemons, isLoading, page } = useSelector( state=> state.pokemon )
  return (
    <>
        <h1>Pokemons</h1>
        <hr />
        <span>Is Loading: {!isLoading ? 'False' : 'True'} </span>
        <ul>
          {
            pokemons.map( pokemon => (
              <li key={pokemon.name}>{pokemon.name}</li>
              ))
          }
        </ul>

        <button onClick={()=>{dispatch(getPokemon(page))}}>Next</button>
    </>
  )
}
