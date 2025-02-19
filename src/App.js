import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Destinations from './DestinationCard';
import DestinationDetails from './DestinationDetails';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/booking" element={<BookingPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
