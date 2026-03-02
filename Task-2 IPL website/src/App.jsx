import PlayerDetails from "./pages/PlayerDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Teams from "./pages/Teams";
import Schedule from "./pages/Schedule";
import Players from "./pages/Players";
import Stats from "./pages/Stats";
import News from "./pages/News";
import Fans from "./pages/Fans";
import Scorecard from "./pages/Scorecard";
 

function App() {
  return (
    <Router>
      <>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/players" element={<Players />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/news" element={<News />} />
          <Route path="/fans" element={<Fans />} />
          <Route path="/player/:id" element={<PlayerDetails />} />
          <Route path="/score/:id" element={<Scorecard />} />
         </Routes>
        <Footer /> 
      </>
    </Router>
  );
}

export default App;