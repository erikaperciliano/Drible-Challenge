import React from 'react';
import { menuItems } from "../hooks/menuData";
import { HeaderMenu } from "./HeaderMenu";

export function NavBar() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-4/5 bg-slate-50 text-custon-black text-xs rounded-xl z-50 mt-4 min-w-max">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <img
          src="/src/assets/logo-menu.png"
          alt="Logo Casa do Menino Deus"
          className="max-w-44 inline-block"
        />
        <nav className="hidden md:flex md:justify-center ml-4">
          {menuItems.map((menuItem, index) => (
            <HeaderMenu key={index} title={menuItem.title} items={menuItem.submenu}/>
          ))}
        </nav>
        <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-xl font-medium text-white h-11 w-36 rounded-lg shadow hover:bg-blue-600 transition md:block hidden">Contactos</button>
      </div>
    </header>
  );
}
