import "./style.css"
import { ButtonBuy } from "../components/ButtonBuy"
import barcobg from "../assets/barco-silhueta.png"
import pescadorkaapua from "../assets/274176696_1094212471398362_8107857512694593257_n 1.png"
import fundorajado from "../assets/FUNDO RAJADO 1.png"
import camisetaverde from "../assets/verde-31.png"
import { AdjectiveBlock } from "../components/AdjectiveBlock"
import { CiSun } from "react-icons/ci"
import { RxMagicWand } from "react-icons/rx"
import { BiTimer } from "react-icons/bi"
import { BiInfinite } from "react-icons/bi"
import { SiStylelint } from "react-icons/si"
import { HowToBuy } from "../components/HowToBuy"
import { ImWhatsapp } from "react-icons/im"
import { TbReportMoney } from "react-icons/tb"
import { MdDesignServices } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"
import { CarouselPartners } from "../components/PartnersSlider/PartnersSlider"
import {Carousel} from "react-responsive-carousel"
import { CarouselProjects } from "../components/ProjectMaked"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FormView } from "../components/Form"
import { useContext } from "react"
import { ImageContext } from "../components/context/ImageContext"
import { ImageInput } from "../components/ImageInput"



export function LandingPage() {

    const {inputValue} = useContext(ImageContext)

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="Div1">
                    <h1>SUA PESCARIA FICOU AINDA MAIS ESTILOSA COM AS <span>CAMISETAS PERSONALIZADAS</span></h1>
                </div>

                <div className="Div2">
                    <img src={pescadorkaapua} alt="" />
                    <section className="TextContent1">
                        <p>
                            Experimente a combinação perfeita de conforto e proteção com nossas <span>camisetas de pesca personalizadas com proteção UV</span>.
                        </p>
                        <p>
                            Feitas com <span>tecido de alta qualidade e tecnologia avançada</span>, estas camisetas garantem conforto durante todo o dia, mantendo a pele protegida dos danos causados pelos raios UV.
                        </p>
                        <p>
                            Personalize a sua camiseta com o <span>seu design</span>  e tenha uma peça única para as suas <span>aventuras de pesca</span>.
                        </p>
                        <p>
                            Aproveite a pesca sem se preocupar com a exposição ao sol e <span>garanta a sua camiseta personalizada com proteção UV agora</span>!
                        </p>
                    </section>
                    <ButtonBuy textButton={'SOLICITE UM ORÇAMENTO'} url={'https://wa.me/5562984343574?text=Ol%C3%A1%2C+gostaria+de+comprar+uma+camiseta+de+pesca+personalizada%21'} />
                    <img src={fundorajado} alt="" className="FundoRajado" />
                </div>

                <div className="Div3">
                    <img src={camisetaverde} alt="" className="CamisetaVerde" />
                    <section>
                        <div className="TextContent2">
                            <AdjectiveBlock
                                icon={<CiSun size={36} color={'#D9B346'} />}
                                title={'PROTEÇÃO UV'}
                                text={'A proteção contra os raios UV é essencial para manter a pele saudável durante as aventuras de pesca.'} />

                            <AdjectiveBlock
                                icon={<RxMagicWand size={28} color={'#D9B346'} />}
                                title={'PERSONALIZAÇÃO'}
                                text={'A possibilidade de personalização com o seu design ou logotipo favorito torna a camiseta única e ainda mais especial.'} />

                            <AdjectiveBlock
                                icon={<BiTimer size={28} color={'#D9B346'} />}
                                title={'SECAGEM RÁPIDA'}
                                text={'Nossas camisas de proteção UV possuem a tecnologia DRY FIT de secagem ultra rápida.'} />

                            <AdjectiveBlock
                                icon={<BiInfinite size={32} color={'#D9B346'} />}
                                title={'DURABILIDADE'}
                                text={'As camisetas são feitas com materiais de alta qualidade que garantem durabilidade e resistência, mesmo em condições adversas.'} />

                            <AdjectiveBlock
                                icon={<SiStylelint size={28} color={'#D9B346'} />}
                                title={'ESTILO'}
                                text={'Além de ser funcional, a camiseta de pesca personalizada com proteção UV é uma peça estilosa que pode ser usada em diversas ocasiões.'} />

                        </div>
                        <ButtonBuy textButton={'QUERO MINHA CAMISA PERSONALIZADA'} url={'https://wa.me/5562984343574?text=Ol%C3%A1%2C+gostaria+de+comprar+uma+camiseta+de+pesca+personalizada%21'} />
                        <img src={fundorajado} alt="" className="FundoRajadoInv" />
                    </section>
                </div>

                <div className="Div4">
                    <h1>COMO COMPRAR CONOSCO</h1>
                    <section>
                        <div className="TextContent3">
                            <HowToBuy
                                icon={<ImWhatsapp size={56} color={'#D9B346'} />}
                                title={'1º PASSO'}
                                text={'Entre em contato com nossos especialistas em vendas para solicitar um orçamento.'} />

                            <HowToBuy
                                icon={<TbReportMoney size={56} color={'#D9B346'} />}
                                title={'2º PASSO'}
                                text={'Após a aprovação do orçamento, é necessário efetuar o pagamento de 50% do valor total do projeto.'} />

                            <HowToBuy
                                icon={<MdDesignServices size={56} color={'#D9B346'} />}
                                title={'3º PASSO'}
                                text={'Nossos designers entrarão em contato com você para desenvolver o layout e definir todos os detalhes do projeto.'} />

                            <HowToBuy
                                icon={<TbTruckDelivery size={56} color={'#D9B346'} />}
                                title={'4º PASSO'}
                                text={'Após aprovação, o pedido será produzido e, após sua finalização, é necessário efetuar o pagamento restante para envio da sua camisa.'} />


                        </div>
                        <img src={fundorajado} alt="" className="FundoRajadoTransparente" />
                    </section>
                </div>

                <div className="Div5">
                    <h1>PARCEIROS KAAPUÃ</h1>
                    <CarouselPartners/>
                    <img src={fundorajado} alt="" className="FundoRajadoTransparente2" />
                </div>

                <div className="Div6">
                    <h1>PROJETOS</h1>
                    <CarouselProjects/>
                    <ButtonBuy textButton={'JÁ QUERO A MINHA'} url={'https://wa.me/5562984343574?text=Ol%C3%A1%2C+gostaria+de+comprar+uma+camiseta+de+pesca+personalizada%21'} />
                    {/* <img src={fundorajado} alt="" className="FundoRajadoDiv6" /> */}
                </div>

                <div className="Div7">
                <img src={fundorajado} alt="" className="FundoRajadoDiv6" />
                    <h1>VEJA COMO FICA</h1>
                    <FormView/>
                    {/* <p>{inputValue}</p> */}
                    {/* <img src={fundorajado} alt="" className="FundoRajadoTransparente" /> */}
                    <ImageInput/>
                </div>
            </main>
        </div>
    )
}