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
                <div className="footer-action-buttons" style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://discord.gg/NXRUFmHBZU"
                        className="btn-primary"
                        style={{ minWidth: 180, fontWeight: 700, fontSize: '1.1rem', padding: '1em 2.2em', borderRadius: '12px', textDecoration: 'none' }}
                        target="_blank" rel="noopener noreferrer"
                    >
                        Join Our Discord
                    </a>
                    <a
                        href="https://instagram.com/proofofpatience"
                        className="btn-secondary"
                        style={{ minWidth: 180, fontWeight: 700, fontSize: '1.1rem', padding: '1em 2.2em', borderRadius: '12px', textDecoration: 'none' }}
                        target="_blank" rel="noopener noreferrer"
                    >
                        Follow on Instagram
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
