import './App.css';
import CharacterForm from './Components/CharacterForm'
import CharacterList from './Components/CharacterList'
import Filter from './Components/Filter'
import characters from './api'

function App() {
  return (
  <div>
    <CharacterList />
    <CharacterForm />
    <Filter />
  </div>
  );
}

export default App;
