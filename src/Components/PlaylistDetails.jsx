import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Playlist from "./Playlist";
const API = import.meta.env.VITE_BASE_URL;

const PlaylistDetails = () => {
  const [playlist, setPlaylist] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const shouldDelete = confirm(
      `Are you sure you want to delete this playlist?`
    );
    if (shouldDelete) {
      fetch(`${API}/playlists/${id}`, {
        method: "DELETE",
      })
        .then(() => navigate(`/playlists`))
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    fetch(`${API}/playlists/${id}/songs`)
      .then((response) => response.json())
      .then((data) => setPlaylist(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <Playlist playlist={playlist} />
      <Link to={`/playlists/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PlaylistDetails;
