import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { menuItems } from "../hooks/menuData";
import { HeaderMenu } from './HeaderMenu';

export function NavBar() {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 768 }); // Detecta se é mobile ou tablet
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{ [key: number]: boolean }>({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (index: number) => {
    setExpandedMenus((prevExpandedMenus) => ({
      ...prevExpandedMenus,
      [index]: !prevExpandedMenus[index],
    }));
  };

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-4/5 bg-slate-50 text-custon-black text-xs rounded-xl z-50 mt-4 min-w-max">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img
          src="/src/assets/logo-menu.png"
          alt="Logo Casa do Menino Deus"
          className="max-w-44 inline-block"
        />
        {/* Menu principal */}
        <nav className={`hidden md:flex md:justify-center ml-4 ${isMenuOpen || !isMobileOrTablet ? 'flex' : 'hidden'}`}>
          {menuItems.map((menuItem, index) => (
            <HeaderMenu key={index} title={menuItem.title} items={menuItem.submenu} />
          ))}
        </nav>
        {/* Botão "Contactos" */}
        {!isMobileOrTablet && (
          <button
          className={`bg-gradient-to-r from-orange-400 to-orange-500 text-xl font-medium text-white h-11 w-36 rounded-lg shadow hover:bg-blue-600 transition ${isMenuOpen || !isMobileOrTablet ? 'md:block hidden' : 'md:hidden'}`}
        >
          Contactos
        </button>
        )}
        
        {/* Ícone de hamburguer */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Menu hamburguer */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-50 text-black p-4">
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
                      <div key={subIndex} className="py-1 cursor-pointer hover:bg-gray-200">
                        {subItem.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* Botão "Contactos" dentro do menu hamburguer */}
            <button
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-xs font-medium text-white h-11  w-2/3  rounded-lg shadow hover:bg-blue-600 transition mt-4"
            >
              Contactos
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
