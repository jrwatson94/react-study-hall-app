import React from 'react'
import './App.css';
import CharacterForm from './Components/CharacterForm'
import CharacterList from './Components/CharacterList'
import Filter from './Components/Filter'
import characters from './api'




class App extends React.Component {
  state ={
    characters: characters
  }
  newCharacter= (charObj)=>{
    characters.push(charObj)
    console.log(characters)
  }

  onChangeHandler = (charName) =>{
    const selectedCharacter = characters.filter(char =>char.name=== charName)
    console.log(selectedCharacter)
    this.setState({
      characters: selectedCharacter
    })
    console.log(this.state)
  }

  
  render(){
    return (
    <div className="container">
      <CharacterList  characters= {this.state.characters}/>
      <Filter onChangeHandler={this.onChangeHandler} characters={characters}/>
      <CharacterForm newCharacter={this.newCharacter}/>
    </div>
    );
  }
}

export default App;
