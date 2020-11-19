import React from 'react';
import Character from './Character';

class CharacterList extends React.Component{
    renderList = () => {
        
        if (this.props.characters.length == 1){
            console.log(this.props.characters)
            return <Character {...this.props.characters[0]}/>
        }
        // return this.props.characters[0].map(charObj => <Character {...charObj}/> )
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