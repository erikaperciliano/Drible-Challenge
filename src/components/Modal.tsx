import React from 'react';
import { menuItems } from "../hooks/menuData";
import { HeaderMenu } from './HeaderMenu';

const Modal = ({ isOpen, onClose, expandedMenus, toggleSubMenu }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed mt-10 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <button onClick={onClose}>
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto max-h-80vh p-4">
          <nav>
            {menuItems.map((menuItem, index) => (
              <div key={index} className="py-2">
                <div className="flex justify-between items-center">
                  <button
                    className="w-full text-left font-medium"
                    onClick={() => toggleSubMenu(index)}
                  >
                    {menuItem.title}
                  </button>
                  {menuItem.submenu && (
                    <button onClick={() => toggleSubMenu(index)}>
                      <svg
                        className={`ml-2 w-4 h-4 transition-transform transform ${expandedMenus[index] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                  )}
                </div>
                {expandedMenus[index] && (
                  <div className="pl-4 mt-2">
                    {menuItem.submenu?.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="py-1 cursor-pointer hover:bg-gray-200"
                        onClick={() => console.log('Clicked subItem:', subItem.title)} // Ação ao clicar no submenu
                      >
                        {subItem.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Modal;
