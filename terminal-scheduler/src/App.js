
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';




//Pages and Components
import Home from "./pages/Home"
import Navigation from "./components/Navbar"
import Gantt from "./pages/Gantt"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gantt" element = {<Gantt />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
