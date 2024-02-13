import { useEffect, useState } from "react";
// import {link} from "./pages/SignUp"
import NavBar from "./components/NavBar"
// import counterSlice from "./features/CounterSlice"
import MainPage from "./components/MainPage";
import './components/style.css';
import './App.css';
import PokemonInfo from "./components/Pokeinfo";



function App() {
  const [Pokemon, setPokemon] = useState([]);
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <h1>Pokedex App</h1>
      {/* <SignUp/> */}
     <MainPage/>
     <PokemonInfo/>
     
    </div>
  );
}

export default App;
