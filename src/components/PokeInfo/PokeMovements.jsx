import './styles/PokeMovements.css'

const PokeMovements = ({ PokeMove }) => {
 
 
return (
    <div className="movements-s" >
        {
            PokeMove?.moves.map( moveInfo => (
                <li className="movements-list" key={moveInfo.move.url}>{moveInfo.move.name}</li>
            ))
        }
    </div>

  )
}

export default PokeMovements