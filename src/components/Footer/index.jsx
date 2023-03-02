import "./style.css"
import logokaapua from "../../assets/Sem-título-2.png"
import { BsInstagram } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { Link } from "react-router-dom"

export function FooterComponent() {

    return (
        <footer className="FooterLanding">
            <div>
                <img src={logokaapua} alt="" />
                <p>
                    Há mais de 20 anos no mercado desenvolvendo vestuário esportivo de alta qualidade.
                </p>
                <ul className="ListSocials">
                    <li>
                        <Link to={'https://www.instagram.com/kaapua_/'}>
                            {<BsInstagram size={32} color={'#fff'} />}
                        </Link>
                    </li>
                    <li>
                        <Link to={'https://www.facebook.com/camisetaspescaeciclismo/'}>
                            {<FaFacebookF size={32} color={'#fff'} />}
                        </Link>
                    </li>
                </ul>
                <p>Copyright © 2023 - TODOS OS DIREITOS RESERVADOS.</p>
            </div>
        </footer>
    )
}