import React from 'react';
import Character from './Character'

export default class CharacterForm extends React.Component {
    renderOptions = () => {
    return this.props.characters.map(charObj => <option>{charObj.name}</option> )
    }
    render(){
        return(
            <div>
                <h2>Filter By Name</h2>
                <select className="select-character">
                    {this.renderOptions()}
                </select>
            </div>

        )
    }
}