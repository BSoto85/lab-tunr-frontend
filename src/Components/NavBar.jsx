import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/songs" className="nav-link">
        <h1>All Songs</h1>
      </Link>
      <Link to="/songs/new" className="nav-link">
        <button className="nav-but">Add Song</button>
      </Link>
    </nav>
  );
};

export default NavBar;
