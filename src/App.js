import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} PP CAM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
