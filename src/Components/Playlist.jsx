import { Link } from "react-router-dom";

const Playlist = ({ playlist }) => {
  const { id, name, description } = playlist;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <Link to={`/playlists/${id}/songs`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Playlist;
