import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIALS } from '../data/socials';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 mt-16 border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-6">

                {/* Social Links */}
                <div className="flex gap-8">
                    <a
                        href={SOCIALS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 text-2xl"
                    >
                        <FiGithub />
                    </a>
                    <a
                        href={SOCIALS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-400 hover:text-[#0a66c2] hover:scale-110 transition-all duration-300 text-2xl"
                    >
                        <FiLinkedin />
                    </a>
                    <a
                        href={`mailto:${SOCIALS.email}`}
                        aria-label="Email"
                        className="text-gray-400 hover:text-primary hover:scale-110 transition-all duration-300 text-2xl"
                    >
                        <FiMail />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm font-light tracking-wide">
                    © {new Date().getFullYear()} Abhishek Gaud. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
