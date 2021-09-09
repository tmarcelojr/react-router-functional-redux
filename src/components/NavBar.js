import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/giphy">Giphy</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;

// to start our query parameters we do ?
// if we wanted to add multiple PARAMETERS we use the &
// api.giphy.com/v1/gifs/random?api_key=MVcXXam6XOGmVb4QxFKzbzJf4GIhRyd9