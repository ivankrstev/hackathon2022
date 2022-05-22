import "./App.css";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Gym from "./components/Gym";
import ThreadMill from "./components/ThreadMill";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<h1 className='center mt-5'>VR GYM TRAINER</h1>}
        />
        <Route path='/gym' element={<Gym />} />
        <Route path='/threadmill' element={<ThreadMill />} />
      </Routes>
    </div>
  );
}

export default App;
