import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Layers, Smartphone, Search } from 'lucide-react';

const features = [
    {
        icon: <Shield className="w-8 h-8 text-green-400" />,
        title: "Privacy-Centric Design",
        description: "Operates 100% offline, ensuring total data sovereignty and security for your sensitive information."
    },
    {
        icon: <Brain className="w-8 h-8 text-purple-400" />,
        title: "Semantic Intelligence",
        description: "Understands user intent, retrieving relevant documentation based on conceptual context rather than just keywords."
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: "High-Efficiency Performance",
        description: "Optimized for near-instantaneous retrieval across various hardware specifications."
    },
    {
        icon: <Search className="w-8 h-8 text-blue-400" />,
        title: "RAG Framework",
        description: "Leverages Retrieval-Augmented Generation to bridge the gap between note-taking and AI-driven retrieval."
    },
    {
        icon: <Layers className="w-8 h-8 text-pink-400" />,
        title: "Scalable Architecture",
        description: "Designed for future growth, including advanced embedding models to enhance retrieval precision."
    },
    {
        icon: <Smartphone className="w-8 h-8 text-orange-400" />, // Using Smartphone for potential mobile
        title: "Future Cross-Platform",
        description: "Planned expansion to mobile devices for seamless access to your knowledge base anywhere."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-20 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Key Strategic Advantages</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Why SmartMemo is the intelligent choice for modern knowledge management.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="glass-panel p-8 text-left hover:bg-white/5 transition-all duration-300"
                    >
                        <div className="mb-4 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
