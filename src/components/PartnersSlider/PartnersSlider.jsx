import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarouselPartners(){
    return(
        <Carousel>
                <div>
                    <img src="../../assets/ESCUDOGOIAS.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../../assets/escudo_fundo_branco-removebg-preview1.png" />
                    <p className="legend">Legend 2</p>;
                </div>
                <div>
                    <img src="../../assets/VilaNovaFC2021.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}