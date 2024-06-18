import { useRef, useState } from "react";
import { HeaderSubMenu } from "./HeaderSubMenu";

interface HeaderMenuProps {
    title?: string;
    items?: { title: string }[];
}

export function  HeaderMenu({ title, items }: HeaderMenuProps) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // controla a visibilidade do submenu, limpando qualquer timeout pendente e abre o submenu imediatamente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSubMenuOpen(false);
    }, 200); // adiciona um atraso de 200ms no fechamento do submenu para evitar fechamentos acidentais. limpa o timeout se o mouse voltar a entrar antes do tempo expirar.
  };
  
  return (
    <div className="group relative"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    <span className="cursor-pointer">{title}</span>
    {items && isSubMenuOpen && (
      <HeaderSubMenu items={items} />
    )}
  </div>
  );
  }