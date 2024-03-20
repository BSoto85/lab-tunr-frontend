import { Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import PlaylistsIndex from "./Pages/PlaylistsIndex";
import ShowPlaylist from "./Pages/ShowPlaylist";

// COMPONENTS
import NavBar from "./Components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/new" element={<New />} />
          <Route exact path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
          <Route path="/playlists" element={<PlaylistsIndex />} />
          <Route path="/playlists/:id/songs" element={<ShowPlaylist />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
