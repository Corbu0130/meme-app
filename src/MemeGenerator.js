import React from "react"

import MemeForm from "./MemeForm"
import Meme from "./Meme"

class MemeGenerator extends React.Component {
    state = {
        topText: "",
        bottomText: "",
        randomImage: "",
        allMemeImgs: []
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const memes = response.data.memes
            //console.log(memes[0])
            this.setState({allMemeImgs: memes})
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.topText.length>0 && this.state.bottomText.length>0) {
            const ind = Math.floor(Math.random()*100)
            const imgurl = this.state.allMemeImgs[ind].url
            this.setState({randomImage: imgurl})
        }
    }

    render() {
        const submit = this.state.randomImage.length>0
        return (
            <div>
                <MemeForm key="meme-form"
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    item={this.state} />
                {
                    submit ?
                    <Meme key="meme" item={this.state} /> :
                    null
                }
            </div>
        )
    }
}

export default MemeGenerator