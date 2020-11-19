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
        this.props.newCharacter(this.state)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    render(){
        return(
            <form onSubmit={this.submit}>
                <h2>Create New Character</h2>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}></input>
                <br></br>

                <label>Anime:</label>
                <input type="text" name="anime" value={this.state.anime} onChange={this.changeHandler}></input>
                <br></br>

                <label>Image Link:</label>
                <input type="text" name="img" value={this.state.img} onChange={this.changeHandler}></input>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        )
    }
}