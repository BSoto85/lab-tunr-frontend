import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

const SongEditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    genre: "",
    song_duration: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const updateSong = () => {
    fetch(`${API}/songs/${id}`, {
      method: "PUT",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate(`/songs/${id}`))
      .catch((error) => console.error("catch", error));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSong();
  };

  useEffect(() => {
    fetch(`${API}/songs/${id}`)
      .then((res) => res.json())
      .then((data) => setSong(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={song.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="artist">Artist:</label>
        <input
          id="artist"
          type="text"
          required
          value={song.artist}
          onChange={handleTextChange}
        />
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          type="text"
          name="genre"
          required
          value={song.genre}
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          required
          onChange={handleCheckboxChange}
          checked={song.is_favorite}
        />
        <label htmlFor="song_duration">Song Duration:</label>
        <textarea
          id="song_duration"
          name="song_duration"
          required
          value={song.song_duration}
          onChange={handleTextChange}
          placeholder="min:sec"
        />
        <button>Update</button>
        <Link to={`/songs/${id}`}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
};

export default SongEditForm;
