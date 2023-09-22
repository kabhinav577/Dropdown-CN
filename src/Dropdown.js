import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // For toggling dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // this function works on when mouse leave the whole div which contains dropdown button and dropdown list
  const handleMouseLeave = () => {
    setIsOpen(!isOpen);
  };

  // For selected item from dropdown list
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseLeave={handleMouseLeave}>
      <button
        className="dropdown-button"
        onMouseEnter={toggleDropdown}
        onClick={toggleDropdown}
      >
        Select{' '}
        <i class="fa-solid fa-caret-down" style={{ marginLeft: '50px' }}></i>
      </button>

      {/* if in open State then map through items array and show item in dropdown list */}
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className={`dropdown-item ${
                selectedItem === item ? 'selected' : ''
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
