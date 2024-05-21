import './styles/PokeStats.css'


const PokeStats = ({ pokestats }) => {



  return (
<div className="stats_container">
    <h2 className='stats'>Stats</h2>
    <article>
        <ul className="stats_list">
            {pokestats?.stats.map(statInfo => (
                <li className="stat_item" key={statInfo.stat.url}>
                    <span className="stat_name">{statInfo.stat.name}</span> 
                    <div className="stat_bar_container">
                        <div 
                            className="stat_bar" 
                            style={{ width: `${(statInfo.base_stat / 150) * 100}%` }}
                        ></div>
                    </div>
                    <span className="stat_value">{statInfo.base_stat}</span>
                </li>
            ))}
        </ul>
    </article>
</div>
  )
}

export default PokeStats