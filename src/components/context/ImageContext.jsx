import { createContext } from "react";
import { useState } from "react";
import camisetafrente from "../../assets/AUZL 2 (1).png"
import camisetacostas from "../../assets/AUZL 2 (3).png"

export const ImageContext = createContext({})

export function ImageProvider ({children}){
    const [inputValue, setValueInput] = useState('')
    const [selectValue, setSelectValue] = useState('costas')
    const [camisetaValue, setCamisetaValue] = useState('')
    console.log(inputValue)

    return (

        <ImageContext.Provider value={{inputValue, setValueInput, selectValue, setSelectValue}} >
            {children}
        </ImageContext.Provider>
    )
}