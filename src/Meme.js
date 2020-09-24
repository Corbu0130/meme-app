import React from "react"

function Meme(props) {
    return (
        <div className="meme">
            <img src={props.item.randomImage} alt=""/>
            <h2 className="top">{props.item.topText}</h2>
            <h2 className="bottom">{props.item.bottomText}</h2>
        </div>
    )
}

export default Meme