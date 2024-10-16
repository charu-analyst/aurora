import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/NavBar/NavBar';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Homes/Home';
import About from './Pages/AboutUs/AboutUs';
import Admission from './Pages/Admissions/Admissions';
import Classes from './Pages/Classes/Classes';
import Contact from './Pages/ContactUS/ContactUs';
import OurJourney from './Pages/OurJourney/OurJourney';
import OurTeam from './Pages/OurTeam/OurTeam'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <OurJourney />
        <OurTeam />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
