import React from 'react';

export default class CharacterForm extends React.Component {
    render(){
        return(

            <form>
                <h2>Create New Character</h2>
                <label>Name:</label>
                <input type="text" name="name"></input>

                <label>Anime:</label>
                <input type="text" name="anime"></input>

                <label>Image Link:</label>
                <input type="text" name="image"></input>
            </form>
        )
    }
}