import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>
        Home
      </NavLink>
      {' | '}
      <NavLink to="/movies" style={({ isActive }) => ({ color: isActive ? 'red' : 'blue' })}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
