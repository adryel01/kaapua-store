import "./style.css"



export function AdjectiveBlock({icon, title, text}) {
    return (
        <div className="AjdectiveBlock">
            <div className="IconBg">{icon}</div>
            <div className="TextBlockContainer">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    )
}