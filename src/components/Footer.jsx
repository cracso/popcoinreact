import React from 'react';
import TwitterIcon from './TwitterIcon';
import DiscordIcon from './DiscordIcon';

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="text-center">
                 <h3 className="footer-title">Join me on this slow, patient, and meaningful journey.</h3>
                 <div className="footer-socials">
                    <a href="#" className="footer-social-link">
                        <TwitterIcon />
                    </a>
                     <a href="#" className="footer-social-link">
                        <DiscordIcon />
                     </a>
                </div>
                 <p className="footer-copyright">
                    &copy; 2025 The Sentry Sanctuary. All Rights Reserved.
                 </p>
            </div>
        </div>
    </footer>
);

export default Footer;
