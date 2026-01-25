import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Work from "./pages/Work.jsx";
import Projects from "./pages/Projects.jsx";
import Anime from "./pages/Anime.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </>
);

export default App;
