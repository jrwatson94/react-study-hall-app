import React from 'react';

export default class CharacterForm extends React.Component {
    state={
        name: "",
        anime: "",
        img:""
    }
    submit = (event) => {
        event.preventDefault()
        console.log("working")
        console.log(document.getElementById("name").value)
        this.setState({
            name: document.getElementById("name").value,
            anime: document.getElementById("anime").value,
            img: document.getElementById("image").value
        })
        this.props.newCharacter(this.state)
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <h2>Create New Character</h2>
                <label>Name:</label>
                <input type="text" id="name"></input>
                <br></br>

                <label>Anime:</label>
                <input type="text" id="anime"></input>
                <br></br>

                <label>Image Link:</label>
                <input type="text" id="image"></input>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        )
    }
}