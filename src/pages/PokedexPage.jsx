import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import ListPokemons from "../components/PokedexPage/ListPokemons"
import SelectType from "../components/PokedexPage/SelectType"
import  './styles/PokedexPage.css';

const PokedexPage = () => {

  const [ pokeSearch, setPokeSearch ] = useState('')

  const [ typeSelected, setTypeSelected ] = useState('allPokemons')

  const [page, setPage] = useState(1)

  const [pokePerPage, setPokerPage] = useState(18)

  const inputSearch = useRef()

  const trainer = useSelector(states => states.trainer)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  const [ pokemons, getPokemons, getPokeByType ] = useFetch(url)

  useEffect(() => {
    if (typeSelected === 'allPokemons') {
      getPokemons()
    } else {
      getPokeByType(typeSelected)
    }
    setPage(1)
  }, [typeSelected])
  
  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(inputSearch.current.value.trim().toLowerCase())
    setPage(1)
  }
  
  const pokemonsFiltered = pokemons?.results.filter( poke => {
    return poke.name.includes(pokeSearch)
  })

  // Logica paginación

const starIndex = (page - 1 ) * pokePerPage
const endIndex = page * pokePerPage 
const quantityPokes = pokemonsFiltered ? pokemonsFiltered.length : 0
const quantityPage = Math.ceil(quantityPokes / pokePerPage)




  return (
    <div>
      <header className="header">
        <img className="logo" src="Pokedex_11-removebg-preview.png" alt="Pokédex" />
      </header>
      <article className="container_name">
      <p className="Welcom">Welcom<span className="Name" > {trainer}, </span><span className="label"> here you can find your favorite pokemon</span></p>
      </article>
      <form  className="form" onSubmit={handleSubmit}>
          <input  className="form__input" ref ={inputSearch} type="text"/>
          <button className="form__btn" >Search</button>
      </form>
      <SelectType  
      setTypeSelected={setTypeSelected}
      />
      <ListPokemons 
        pokemons={pokemonsFiltered}
        starIndex={starIndex}
        endIndex={endIndex}
        quantityPage={quantityPage}
        setPage={setPage}
        page={page}
        />
    </div>
  )
}

export default PokedexPage