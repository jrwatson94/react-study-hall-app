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
        //clear form after submit
        this.setState({
            name:"",
            anime:"",
            img:""
        })
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    render(){
        return(
            <form className="text-center" onSubmit={this.submit}>
                <div className="form-group">
                    <h2>Create New Character</h2>
                    <label>Name:</label>
                    <input type="form-control" name="name" value={this.state.name} onChange={this.changeHandler}></input>
                </div>
                <div className="form-group">
                    <label>Anime:</label>
                    <input type="text" name="anime" value={this.state.anime} onChange={this.changeHandler}></input>
                    <br></br>
                </div>
                <div className="form-group">
                    <label>Image Link:</label>
                    <input type="text" name="img" value={this.state.img} onChange={this.changeHandler}></input>
                </div>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        )
    }
}