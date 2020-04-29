import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ isOpen = true }) => (
  <div>
    <button type="button">&#9776;</button>
    {isOpen && (
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
      </ul>
    )}
  </div>
);

Dropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Dropdown;
