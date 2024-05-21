import './styles/PokeAbiType.css'

const PokeAbiType = ({ PokeAbiType }) => {


  return (
<article className="tpab_container">
    <div className="type_section">
        <span className="type">Tipo</span>
        <ul className="t_list">
            {PokeAbiType?.types.map(typeInfo => (
                <li className={`list_value type-${typeInfo.type.name}`} key={typeInfo.type.url}>{typeInfo.type.name}</li>
            ))}
        </ul>
    </div>
    <div className="abilities_section">
        <span className="abilities">Habilidades</span>
        <ul className="t_list">
            {PokeAbiType?.abilities.map(abiliInfo => (
                <li className="list_value" key={abiliInfo.ability.url}>{abiliInfo.ability.name}</li>
            ))}
        </ul>
    </div>
</article>
  )
}

export default PokeAbiType