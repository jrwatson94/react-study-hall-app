import React from 'react';

export default class Character extends React.Component{
    
    render(){
        return(
            <div className="character-card">
                <img src={this.props.img} alt="anime"></img>
                <h2>{this.props.name}</h2>
                <h3>{this.props.show}</h3>
            </div>
        )

    }
}
