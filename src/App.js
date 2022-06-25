import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './component/About';
import Home from './component/Home';
import NoteState from './Context/Notes/NoteState'


function App() {
  return (
    <>
      <NoteState>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </Router>
      </NoteState>
      </>
  );
}

export default App;
