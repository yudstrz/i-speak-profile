import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar navigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage navigate={navigate} />}
        {currentPage === 'about' && <AboutSection />}
        {currentPage === 'team' && <TeamSection />}
        {currentPage === 'contact' && <ContactSection />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;