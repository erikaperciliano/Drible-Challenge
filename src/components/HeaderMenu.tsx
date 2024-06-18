import { HeaderSubMenu } from "./HeaderSubMenu";

interface HeaderMenuProps {
    title?: string;
    items?: { title: string }[];
}

export function  HeaderMenu({ title, items }: HeaderMenuProps) {
  return (
    <div className="group relative">
    <span className="cursor-pointer">{title}</span>
    {items && (
      <HeaderSubMenu items={items}/>
    )}
  </div>
  );
  }