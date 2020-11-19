import React from 'react';

export default class CharacterForm extends React.Component {
    renderOptions = () => {

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