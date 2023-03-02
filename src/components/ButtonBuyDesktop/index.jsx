import { Link } from "react-router-dom"
import "./style.css"
import 'animate.css'

export function ButtonBuyDesktop({ textButton, url }) {

    return (
        <>
            <Link to={url} className="ButtonBuyDesktop animate__animated animate__pulse animate__infinite">{textButton}</Link>
        </>
    )
}