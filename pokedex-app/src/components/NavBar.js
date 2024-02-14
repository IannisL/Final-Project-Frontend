import { Link } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext.js";

function NavBar() {
    const themeCtx = useContext(ThemeContext);
    const {theme, setTheme} = themeCtx
  
    console.log(themeCtx);
  
    const handleClick = () => {
      setTheme(theme === 'light' ? 'dark': 'light');
    }
  
    return (
      <nav>
        <h1 style={{ color: "#e50914" }}>Pokedex App</h1>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/MainPage">PokeDex</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/SignUp">Sign Up</Link>
            </li>
        </ul>
        <button onClick={handleClick}>{theme}</button>
        
      </nav>
    );
  }
  
  export default NavBar;