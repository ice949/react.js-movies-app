import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Pages/Container/Container';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Container/>} >
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="about" element={<About />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;