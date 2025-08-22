import { Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './componets/navbar/navbar'
import Quiz from "./page/quiz/quiz";
import Home from "./page/home";
import Profile from "./page/profile";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/profile" element={<Profile />} />
      
      </Routes>
    </>
  )
}

export default App
