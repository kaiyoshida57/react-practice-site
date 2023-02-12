import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="border-b-4 py-4 text-blue-400">
        <div className=" container mx-auto flex max-w-7xl  items-center gap-2">
          <a href="#">
            <span className="text-center text-4xl font-medium ">
              ポートフォリオ 📔
            </span>
          </a>
          <nav className="ml-auto [&_a]:ml-4 [&_a]:text-xl">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#gallery">Gallery</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
