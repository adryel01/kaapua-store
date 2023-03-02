import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import camiseta1 from "../../assets/camiseta10-frete.png"
import camiseta2 from "../../assets/camiseta10-LATERAL.png"
import camiseta3 from "../../assets/MATO-GROSSO. (1).png"
import camiseta4 from "../../assets/CAMISETA-LATERAL (1) 1.png"
import camiseta5 from "../../assets/MATO-GROSSO-2 (1).png"
import camiseta6 from "../../assets/branca (1).png"
import camiseta7 from "../../assets/verde-2.png"
import camiseta8 from "../../assets/cam3.png"


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
                    </Carousel>
    )
}