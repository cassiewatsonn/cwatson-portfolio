import React from 'react';
import './App.css';
import AboutMe from './components/pages/AboutMe';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <AboutMe/>
        <Header/>
        <Footer/>
    </div>
  );
}

export default App;
