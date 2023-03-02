import "./style.css"

export function HowToBuy({icon, title, text}) {
    return (
        <div className="HowToBuyBlock">
            <div className="IconBgHTB">{icon}</div>
            <div className="TextBlockContainer">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}