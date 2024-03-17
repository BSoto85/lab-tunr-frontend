import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = import.meta.env.VITE_BASE_URL;

const SongDetails = () => {
  const [song, setSong] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    const shouldDelete = confirm(`Are you sure you want to delete this song?`);
    if (shouldDelete) {
      fetch(`${API}/songs/${id}`, {
        method: "DELETE",
      })
        .then(() => navigate(`/songs`))
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((response) => response.json())
      .then((data) => setSong(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <p>
        {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}{" "}
        Name: {song.name}
      </p>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Duration: {song.song_duration} min</p>
      <Link to={`/songs/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SongDetails;
