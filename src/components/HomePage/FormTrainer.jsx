import { useRef } from "react"
import  { setTrainer } from '../../store/states/trainer.slice'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './style/FromTrainer.css'

const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setTrainer(trainerInput.current.value.trim()))
        navigate('/pokedex')
    }

  return (
    <form className="Form__Trainer" onSubmit={handleSubmit}>
      <article className="form__container">
        <input className="Form__input" ref={trainerInput} type="text" />
        <button className="Form__btn" >Lets Start</button>
      </article>
    </form>
    
  )
}

export default FormTrainer