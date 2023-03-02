import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import camiseta1 from "../../assets/camiseta10-frete.png"
import camiseta2 from "../../assets/AÇU (2).png"
import camiseta3 from "../../assets/AÇU (3).png"
import camiseta4 from "../../assets/AÇU (1).png"
import camiseta5 from "../../assets/PACA (2).png"
import camiseta6 from "../../assets/PACA (1).png"
import camiseta7 from "../../assets/PACA (3).png"
import camiseta8 from "../../assets/cam3.png"
import camiseta9 from "../../assets/camiseta10-frete-removebg-preview.png"
import camiseta10 from "../../assets/camiseta10-LATERAL-removebg-preview.png"
import camiseta11 from "../../assets/AZUL (3).png"
import camiseta12 from "../../assets/AZUL (1).png"
import camiseta13 from "../../assets/AZUL (2).png"


export function CarouselProjects(){
    return(
        <Carousel autoPlay={true} infiniteLoop={true}>
                        <div className="CarouselImages">
                            <img src={camiseta2} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta3} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta4} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta5} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta6} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta7} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta8} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta9} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta10} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta11} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta12} className="ImageProjects"/>
                        </div>
                        <div className="CarouselImages">
                            <img src={camiseta13} className="ImageProjects"/>
                        </div>
                    </Carousel>
    )
}