import React from 'react';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Global Background Gradients - Fixed to viewport */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-green-500/40 rounded-full" style={{ filter: 'blur(80px)' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full" style={{ filter: 'blur(80px)' }} />
      </div>

      <div className="min-h-screen text-white relative">
        <Hero />
        <VideoSection />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
