import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './elements/Loader'; // Assuming Loader is in the elements folder

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Loader will be displayed for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-gray-900">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Work />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
