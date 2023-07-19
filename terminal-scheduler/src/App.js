
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Pages and Components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Gantt from "./pages/Gantt"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
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