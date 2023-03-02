import { Link } from "react-router-dom"
import "./style.css"
import 'animate.css'

export function ButtonBuy({ textButton, url }) {

    return (
        <>
            <Link to={url} className="ButtonBuy animate__animated animate__pulse animate__infinite">{textButton}</Link>
        </>
    )
}