import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Songs from './Components/Songs';
import Sidebar from './Components/Sidebar';
import Favorities from './Components/Favorities';
import Playlist from './Components/Playlist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* Default route */}
          <Route path="/" element={<Songs />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/favorities" element={<Favorities />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
