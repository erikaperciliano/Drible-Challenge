import React, { useEffect } from 'react';
import { menuItems } from "../hooks/menuData";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  expandedMenus: { [key: number]: boolean };
  toggleSubMenu: (index: number) => void;
}

const Modal = ({ isOpen, onClose, expandedMenus, toggleSubMenu }: ModalProps) => {
  // Adiciona o event listener quando o componente é montado e remove quando é desmontado
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {  // Ajuste o valor conforme necessário para o breakpoint desejado
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 mt-20 flex justify-center items-start bg-gray-800 bg-opacity-50 z-40">
      <div className="bg-white rounded-lg w-full overflow-hidden shadow-lg">
        <div className="overflow-y-auto max-h-[80vh] p-4">
          <nav>
            {menuItems.map((menuItem, index) => (
              <div key={index} className="py-2 text-sm font-poppins font-medium tracking-wide leading-relaxed">
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
                <hr className='text-black w-full'/>
              </div>
            ))}
            {/* Botão "Contactos" dentro do menu hamburguer */}
            <button
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-xs font-medium text-white h-11 w-1/4 rounded-lg shadow hover:bg-blue-600 transition mt-4"
            >
              Contactos
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Modal;
