import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import goias from "../../assets/ESCUDOGOIAS.png"
import atletico from "../../assets/logo-atletico-goianiense-com-estrela-1024.png"
import vila from "../../assets/VilaNovaFC2021.png"
import multicanal from "../../assets/MULTICANALATACADO1.png"
import luarmilitaria from "../../assets/LUAR_MILITARIA-removebg-preview1.png"
import riodaspedras from "../../assets/RIODASPEDRAS1.png"

export function CarouselPartners(){
    return(
        <Carousel autoPlay={true} infiniteLoop={true}>
                        <div className="CarouselImages">
                            <img src={goias} className="ImagePartners1"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={atletico} className="ImagePartners2"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={vila} className="ImagePartners1"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={multicanal} className="ImagePartners3"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={luarmilitaria} className="ImagePartners2"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={riodaspedras} className="ImagePartners3"/>
                        </div>
                    </Carousel>
    )
}