import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
    return (
        <section className="flex justify-center items-center py-20 px-4 bg-black/30 backdrop-blur-md">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full max-w-5xl glass-panel p-4 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
                    <video
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        muted
                        loop
                        poster="/assets/logo.png" // Fallback
                    >
                        <source src="/assets/SmartMemo-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Optional Overlay if video has no controls initially 
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <Play size={32} className="ml-1" />
             </div>
          </div>
          */}
                </div>

                <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">See SmartMemo in Action</h3>
                    <p className="text-gray-400">Discover how semantic discovery transforms your workflow.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default VideoSection;
