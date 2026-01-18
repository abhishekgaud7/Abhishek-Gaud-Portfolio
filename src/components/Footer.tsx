import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SOCIALS } from '../data/socials';
import './Footer.css';

const Footer: React.FC = () => {


    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-socials">
                    <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>
                    <a href={`mailto:${SOCIALS.email}`} aria-label="Email">
                        <FiMail />
                    </a>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Abhishek Gaud. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
