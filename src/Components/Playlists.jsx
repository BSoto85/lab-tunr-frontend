import { useState, useEffect } from "react";
import Playlist from "./Playlist";

const API = import.meta.env.VITE_BASE_URL;

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch(`${API}/playlists`)
      .then((res) => res.json())
      .then((data) => {
        setPlaylists(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {playlists &&
        playlists.map((playlist) => {
          return <Playlist key={playlist.id} playlist={playlist} />;
        })}
    </div>
  );
};

export default Playlists;
