import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

const SongNewForm = () => {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    genre: "",
    song_duration: "",
    is_favorite: false,
  });

  const addSong = () => {
    fetch(`${API}/songs`, {
      method: "POST",
      body: JSON.stringify(song),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => navigate(`/songs`))
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setSong({ ...song, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSong();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            value={song.name}
            type="text"
            onChange={handleTextChange}
            required
          />
        </section>
        <section>
          <label htmlFor="artist">Artist:</label>
          <input
            id="artist"
            type="text"
            required
            value={song.artist}
            onChange={handleTextChange}
          />
        </section>
        <section>
          <label htmlFor="genre">Genre:</label>
          <input
            id="genre"
            type="text"
            name="genre"
            required
            value={song.genre}
            onChange={handleTextChange}
          />
        </section>
        <section>
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            className="check-input"
            id="is_favorite"
            type="checkbox"
            required
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
        </section>
        <section>
          <label htmlFor="song_duration">Song Duration:</label>
          <input
            className="duration-input"
            type="text"
            id="song_duration"
            name="song_duration"
            required
            value={song.song_duration}
            onChange={handleTextChange}
            placeholder="min:sec"
          />
        </section>
        <button>Add Song</button>
      </form>
    </div>
  );
};

export default SongNewForm;
