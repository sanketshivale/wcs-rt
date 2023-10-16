import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="mt-2">
        <ul className="flex space-x-4 text-white items-center">
          <h1 className="text-2xl font-semibold">WordCamp Schedule Calendar Viewer</h1>
          
          <li><Link to="/" className="hover:underline">Calender View</Link></li>
          <li><Link to="/map" className="hover:underline">Map View</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;