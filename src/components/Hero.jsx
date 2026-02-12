import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-4 md:p-12 max-w-5xl w-full flex flex-col items-center text-center z-10"
      >
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          src="/assets/logo.png"
          alt="SmartMemo Logo"
          className="w-24 h-24 mb-6 drop-shadow-lg"
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center gap-0.5">
          <span className="text-white">Smart</span>
          <span className="gradient-text">Memo</span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 font-light mb-2">
          Stop managing files; start managing insights.
        </p>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
          A high-performance desktop application bridging the gap between traditional note-taking and AI-driven information retrieval.
          Operating 100% offline for total data sovereignty.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-btn flex items-center justify-center gap-2 group text-sm md:text-base"
            onClick={() => window.open('https://www.mediafire.com/file/tgl4q67d4bkrw3g/SmartMemo-Setup-1.0.0.exe/file', '_blank')}
          >
            <Download size={20} />
            Download for Windows
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-panel px-6 py-3 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm md:text-base"
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>


      </motion.div>
    </section>
  );
};

export default Hero;
