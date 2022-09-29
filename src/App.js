import logo from './logo.svg';
import './App.css';
import Home from "./components/home"

import Eventspage from './components/eventspage';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="eventspage" element={<Eventspage />} />
      </Routes>
  

    </div>
  );
}

export default App;
