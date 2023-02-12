import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <footer className="border-b-4 bg-blue-300 py-4 text-blue-400">
        <div className=" container mx-auto flex  max-w-7xl items-center  justify-center gap-2">
          <nav className=" [&_a]:ml-4 [&_a]:text-xl [&_a]:text-slate-100">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#gallery">Gallery</a>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Header;
