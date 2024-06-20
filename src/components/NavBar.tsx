import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { menuItems } from "../hooks/menuData";
import { HeaderMenu } from './Headers/HeaderMenu';
import Modal from './FirstSection/Modal';

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
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-4/5 bg-custom-header-color text-custon-black text-xs rounded-xl z-50 mt-4 min-w-max">
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
          {isMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
              />
            </svg>
          )}
        </button>
      </div>
      {/* Modal com o menu expandido */}
      <Modal isOpen={isMenuOpen} onClose={toggleMenu} expandedMenus={expandedMenus} toggleSubMenu={toggleSubMenu} />
    </header>
  );
}
