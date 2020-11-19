import React from 'react';
import Character from './Character';

class CharacterList extends React.Component{
    renderList = () => {
        return this.props.characters.map(charObj => <Character {...charObj}/> )
    }
    render(){
        return(  
            <div className="list-container">
                <h2>Index</h2>
                    {this.renderList()}
            </div>
        )
    }
}

export default CharacterList;