import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-4 border-t border-white/10 ">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
                <div className="text-center">
                    <h4 className="text-xl font-bold mb-2 text-white">SmartMemo</h4>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} SmartMemo. All rights reserved.
                    </p>
                </div>


            </div>
        </footer>
    );
};

export default Footer;
