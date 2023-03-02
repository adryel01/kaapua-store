import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"
import "./style.css"

export function FormView(){

    const {setValueInput, inputValue, selectValue, setSelectValue} = useContext(ImageContext)

    function changeSelect(event){
        setSelectValue(event.currentTarget.value)
    }

    function valueName(event){
        setValueInput(event.currentTarget.value)
    }

    return (
        <form className="FormInput">
            <label htmlFor="selectForm">SELECIONE O LADO</label>
            <select name="selectForm" id="selectForm" onChange={(event)=>changeSelect(event)}>
                <option value="costas" selected>COSTAS</option>
                <option value="frente">FRENTE</option>
            </select>

            <label htmlFor="inputName">DIGITE SEU NOME</label>
            <input type="text" id="inputName" placeholder="SEU NOME..." maxLength={12} onChange={(event)=>valueName(event)}/>
        </form>
    )
}