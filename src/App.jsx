import React from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white">
      <Hero />
      <VideoSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
