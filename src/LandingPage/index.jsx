import "./style.css"
import { ButtonBuy } from "../components/ButtonBuy"
import barcobg from "../assets/barco-silhueta.png"
import pescadorkaapua from "../assets/274176696_1094212471398362_8107857512694593257_n 1.png"
import fundorajado from "../assets/FUNDO RAJADO 1.png"
import camisetaverde from "../assets/verde-3 1.png"
import { AdjectiveBlock } from "../components/AdjectiveBlock"
import {CiSun} from "react-icons/ci"
import {RxMagicWand} from "react-icons/rx"
import {BiTimer} from "react-icons/bi"
import {BiInfinite} from "react-icons/bi"
import {SiStylelint} from "react-icons/si"

export function LandingPage(){
    return(
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
                        <p>Experimente a combinação perfeita de conforto e proteção com nossas <span>camisetas de pesca personalizadas com proteção UV</span>.</p>
                        <p>Feitas com <span>tecido de alta qualidade e tecnologia avançada</span>, estas camisetas garantem conforto durante todo o dia, mantendo a pele protegida dos danos causados pelos raios UV.</p>
                        <p>Personalize a sua camiseta com o <span>seu design</span>  e tenha uma peça única para as suas <span>aventuras de pesca</span>.</p>
                        <p>Aproveite a pesca sem se preocupar com a exposição ao sol e <span>garanta a sua camiseta personalizada com proteção UV agora</span>!</p>
                    </section>
                    <ButtonBuy textButton={'SOLICITE UM ORÇAMENTO'} url={'https://wa.me/5562984343574?text=Ol%C3%A1%2C+gostaria+de+comprar+uma+camiseta+de+pesca+personalizada%21'}/>
                    <img src={fundorajado} alt="" className="FundoRajado"/>
                </div>
                <div className="Div3">
                    <img src={camisetaverde} alt="" className="CamisetaVerde"/>
                    <section>
                        <div className="TextContent2">
                            <AdjectiveBlock 
                            icon={<CiSun size={36} color={'#D9B346'} />} 
                            title={'PROTEÇÃO UV'} 
                            text={'A proteção contra os raios UV é essencial para manter a pele saudável durante as aventuras de pesca.'}/>

                            <AdjectiveBlock 
                            icon={<RxMagicWand size={28} color={'#D9B346'} />} 
                            title={'PERSONALIZAÇÃO'} 
                            text={'A possibilidade de personalização com o seu design ou logotipo favorito torna a camiseta única e ainda mais especial.'}/>

                            <AdjectiveBlock 
                            icon={<BiTimer size={28} color={'#D9B346'} />} 
                            title={'SECAGEM RÁPIDA'} 
                            text={'Nossas camisas de proteção UV possuem a tecnologia DRY FIT de secagem ultra rápida.'}/>

                            <AdjectiveBlock 
                            icon={<BiInfinite size={32} color={'#D9B346'} />} 
                            title={'DURABILIDADE'} 
                            text={'As camisetas são feitas com materiais de alta qualidade que garantem durabilidade e resistência, mesmo em condições adversas.'}/>

                            <AdjectiveBlock 
                            icon={<SiStylelint size={28} color={'#D9B346'} />} 
                            title={'ESTILO'} 
                            text={'Além de ser funcional, a camiseta de pesca personalizada com proteção UV é uma peça estilosa que pode ser usada em diversas ocasiões.'}/>
                            
                        </div>
                        <ButtonBuy textButton={'QUERO MINHA CAMISA PERSONALIZADA'} url={'https://wa.me/5562984343574?text=Ol%C3%A1%2C+gostaria+de+comprar+uma+camiseta+de+pesca+personalizada%21'}/>
                        <img src={fundorajado} alt="" className="FundoRajadoInv"/>
                    </section>
                </div>
            </main>
        </div>
    )
}