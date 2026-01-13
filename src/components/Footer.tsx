import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-socials">
                    <a href="https://github.com/abhishekgaud7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a href="https://linkedin.com/in/abhishekgaud" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>
                    <a href="mailto:ritikempire505@gmail.com" aria-label="Email">
                        <FiMail />
                    </a>
                </div>
                <p className="copyright">
                    © 2025 Abhishek Gaud. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
