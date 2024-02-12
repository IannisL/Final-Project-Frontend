import { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import './components/style.css';
import './App.css';

function App() {
  const [Pokemon, setPokemon] = useState([]);
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <h1>Pokedex App</h1>
     <MainPage/>
    </div>
  );
}

export default App;
