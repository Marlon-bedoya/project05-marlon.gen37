import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import PokeAbiType from "../components/PokeInfo/PokeAbiType"
import PokeStats from "../components/PokeInfo/PokeStats"
import PokeMovements from "../components/PokeInfo/PokeMovements"
import './styles/PokeCardInfo.css'

const PokeInfo = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`

  const [pokemon, getPekemon] = useFetch(url)

  useEffect(() => {
    getPekemon()
  }, [url])

  console.log(pokemon)

  return (
    <div className="container-a">
      <header className="header">
        <img className="logo" src="Pokedex_11-removebg-preview.png" alt="Pokédex" />
      </header>
    <article className="info_c">
      <article className={`card_info_b br-${pokemon?.types[0].type.name}`}>
        <header className={`card__header_d bg-${pokemon?.types[0].type.name}`}>
          <img className="card__img_e" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <h1 className="card__order_f">#{pokemon?.order}</h1>
        <h2 className={`card__name_g color-${pokemon?.types[0].type.name}`}> {pokemon?.name}</h2>
        <article className="Card__list-container_h">
          <ul className="card__list_j">
            <li className=".card__k ">
              <span className="card__label_l">Weight </span>
              <span className="card__value_m">{pokemon?.weight}</span>
            </li>
            <li className=".card__k ">
              <span className="card__label_l">Height </span>
              <span className="card__value_m">{pokemon?.height}</span></li>
          </ul>
        </article>
        < PokeAbiType
          PokeAbiType={pokemon}
        />

        < PokeStats
          pokestats={pokemon}
        />
      </article>

      <footer className={`movements br-${pokemon?.types[0].type.name}`}>
      <h2 className="mv-name">Movements</h2>
        <PokeMovements
          PokeMove={pokemon}
        />
      </footer>
    </article>
    </div>
  )
}

export default PokeInfo