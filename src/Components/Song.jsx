import { Link } from "react-router-dom";

const Song = ({ song }) => {
  const { id, name, artist, genre, song_duration, is_favorite } = song;

  return (
    <div>
      <p>
        {is_favorite ? <span>⭐️</span> : <span>&nbsp; &nbsp; &nbsp;</span>}{" "}
        Name: {name}
      </p>
      <p>Artist: {artist}</p>
      <p>Genre: {genre}</p>
      <p>Duration: {song_duration} min</p>
      <Link to={`/songs/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default Song;
