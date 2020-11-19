import React from 'react';

export default class CharacterForm extends React.Component {
    state = {
        selectedChar: ""
    }
    updateIndex = (event) =>{
        this.props.onChangeHandler(event.target.value)
    }
    
    renderOptions = () => {
        return this.props.characters.map(charObj => <option>{charObj.name}</option> )
    }
    render(){
        return(
            <div className="dropdown text-center">
                <h2>Filter By Name</h2>
                <br></br>
                <select onChange={this.updateIndex} className="select-character">
                    <option>All</option>
                    {this.renderOptions()}
                </select>
            </div>

        )
    }
}