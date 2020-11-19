import './App.css';
import CharacterForm from './Components/CharacterForm'
import CharacterList from './Components/CharacterList'
import Filter from './Components/Filter'
import characters from './api'


function newCharacter(charObj){
  characters.push(charObj)
  console.log(characters)
}
function App() {
  return (
  <div className="container">
    <CharacterList  characters= {characters}/>
    <Filter characters={characters}/>
    <CharacterForm newCharacter={newCharacter}/>
  </div>
  );
}

export default App;
