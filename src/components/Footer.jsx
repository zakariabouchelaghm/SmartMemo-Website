import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-white/10 bg-black/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                <div className="text-center">
                    <h4 className="text-xl font-bold mb-2 text-white">SmartMemo</h4>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} SmartMemo. All rights reserved.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
                    <span className="hover:text-green-400 transition-colors cursor-default">#AI</span>
                    <span className="hover:text-blue-400 transition-colors cursor-default">#KnowledgeManagement</span>
                    <span className="hover:text-purple-400 transition-colors cursor-default">#RAG</span>
                    <span className="hover:text-yellow-400 transition-colors cursor-default">#MachineLearning</span>
                    <span className="hover:text-pink-400 transition-colors cursor-default">#SoftwareEngineering</span>
                    <span className="hover:text-red-400 transition-colors cursor-default">#DataPrivacy</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
