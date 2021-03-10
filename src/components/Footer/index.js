import React from 'react';

function Footer() {
    return (
        <footer className="d-flex align-items-center flex-column">
            <div className="d-flex justify-content-between footer-links">
            <a href="https://github.com/spody10" target="_blank" rel="nofollow noopener noreferrer"><p>GitHub</p><i className="contact-link"></i></a>
            <a href="https://www.linkedin.com/in/michael-spore-6898ba2b/" target="_blank" rel="nofollow noopener noreferrer"><p>LinkedIn</p><i className="contact-link"></i></a>
            <a href="mailto:michaelpspore@gmail.com"><p>Email</p><i className="contact-link"></i></a>
            </div>
            <a href="https://reactjs.org/" className="mt-3"><p>Built with React</p><i className="fab fa-react icon footer-logo"></i></a>
        </footer>
    )
}

export default Footer;
