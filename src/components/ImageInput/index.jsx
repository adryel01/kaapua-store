import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"
import camisetafrente from "../../assets/AUZL 2 (1).png"
import camisetacostas from "../../assets/AUZL 2 (3).png"
import "./style.css"

export function ImageInput (){

    const {inputValue, selectValue} = useContext(ImageContext)

    function InputImage(selectValue){
        if(selectValue == 'costas'){
            return camisetacostas
        } else {
            return camisetafrente
        }
    }

    function inputNameImage(inputValue, selectValue){
        if(selectValue == 'costas'){
            return <p className="NameBack">{inputValue}</p>
        } else {
            return <p className="NameFront">{inputValue}</p>
        }
    }

    return (
        <div className="ImageContainer">
            <img className="ImageImported" src={InputImage(selectValue)} alt="" />
            <div>{inputNameImage(inputValue, selectValue)}</div>
        </div>
    )
}