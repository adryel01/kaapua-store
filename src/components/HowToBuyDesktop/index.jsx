import "./style.css"

export function HowToBuyDesktop({icon, title, text}) {
    return (
        <div className="HowToBuyBlockDesktop">
            <div className="IconBgHTBDesktop">{icon}</div>
            <div className="TextBlockContainerHTBDesktop">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}