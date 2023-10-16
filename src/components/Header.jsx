import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="mt-2">
        <ul className="flex space-x-4 text-white items-center">
          <h1 className="text-2xl font-semibold">WordCamp Schedule Calendar Viewer</h1>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline ">About</a></li>
          <li><a href="/contact" className="hover:underline ">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;