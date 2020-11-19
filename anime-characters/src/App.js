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
    console.log(charObj)
    const newCharArray = this.state.characters
    newCharArray.push(charObj)
    this.setState({
      characters: newCharArray
    })
  }

  onChangeHandler = (charName) =>{
    const selectedCharacter = characters.filter(char =>char.name=== charName)

    if (charName== "All"){
      this.setState({
        characters: characters
      })
    }else{
      this.setState({
        characters: selectedCharacter
      })
    }
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
