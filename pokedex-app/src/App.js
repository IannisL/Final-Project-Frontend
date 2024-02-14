import { useEffect, useState } from "react";
import NavBar from "./components/NavBar"
import MainPage from "./components/MainPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './components/style.css';
import PokemonInfo from "./components/Pokeinfo";
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  const [Pokemon, setPokemon] = useState([]);
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <h1>Pokedex App</h1>
      {/* <BrowserRouter> */}
   
      <div className="signup-login">
        <Routes>
        <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/About"
            element={<About />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/Signup"
            element={<SignUp />}
          />
          <Route className="main"
            path="/MainPage"
            element={<MainPage />}
          /><Route className="info"
          path="/PokemonInfo"
          element={<PokemonInfo />}
        />
        </Routes>
      </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
