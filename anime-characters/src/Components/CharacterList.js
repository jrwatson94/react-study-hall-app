import React from 'react';
import Character from './Character'

function CharacterList(props){
    return(
        <div className="list-container">
            <h2>Index</h2>
            <ul>
                <li><Character /></li>
            </ul>
        </div>
    )
}

export default CharacterList;