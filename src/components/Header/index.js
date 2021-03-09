import React from 'react';
import Nav from '../Nav';

function Header() {
    return (
        <header >
          <div className="bg-theme-2 title-bar my-4 ml-5 py-0">
            <h1 className="text-theme-1 pl-4">Michael Spore</h1>
          </div>
          <div className="bg-theme-2 subtitle-bar py-2 pl-4">
            <h2 className="text-theme-1 pl-2">Full Stack Developer</h2>
          </div>
          <Nav />
        </header>
      );
}

export default Header
