import { HeaderSubMenuItem } from "./HeaderSubMenuItem";

interface HeaderSubMenuProps {
  items: { title: string }[];
}

export function HeaderSubMenu({ items }: HeaderSubMenuProps) {
  return (
    <div className="absolute bg-slate-50 text-custon-black mt-1 py-2 px-4 rounded-lg shadow-lg flex flex-row">
      {items.map((item, index) => (
        <HeaderSubMenuItem key={index} title={item.title} />
      ))}
    </div>
  );
}
