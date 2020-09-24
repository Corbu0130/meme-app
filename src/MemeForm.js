import React from "react"

function MemeForm(props) {
    return (
        <form className="meme-form" onSubmit={props.handleSubmit}>
            <input 
                type="text"
                placeholder="Top Text"
                name="topText"
                value={props.item.topText}
                onChange={props.handleChange} />
            <input 
                type="text"
                placeholder="Bottom Text"
                name="bottomText"
                value={props.item.bottomText}
                onChange={props.handleChange} />
            <button>Gen</button>
        </form>
    )
}

export default MemeForm