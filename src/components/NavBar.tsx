import { menuItems } from "../hooks/menuData";
import { HeaderMenu } from "./HeaderMenu";

export function NavBar(){
    return (
        <header className="bg-slate-50 text-custon-black text-xs rounded-xl">
            <div className="container flex justify-between items-center py-4 px-6 ">
                <img
                    src="/src/assets/logo-menu.png"
                    alt="Logo Casa do Menino Deus"
                    className="max-w-44 inline-block"
                />
                <nav className="grid grid-cols-4 gap-4 justify-center ml-4">
                {menuItems.map((menuItem, index) => (
                    <HeaderMenu key={index} title={menuItem.title} items={menuItem.submenu}/>
                ))}
                </nav>
                <button className="bg-gradient-to-r from-orange-500  text-xl to-red-500 font-medium text-white  h-11 w-36 rounded-lg shadow hover:bg-blue-600 transition">Contactos</button>
            </div>
        </header>
  );
}