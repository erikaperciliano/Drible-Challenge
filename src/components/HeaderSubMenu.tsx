import { HeaderSubMenuItem } from "./HeaderSubMenuItem"

interface HeaderSubMenuProps {
  items: { title: string }[]
}

export function HeaderSubMenu({ items }: HeaderSubMenuProps) {
    return (
      <div className="absolute bg-gray-900 text-white mt-1 py-2 px-4 rounded-lg shadow-lg hidden group-hover:block">
        {items.map((item, index) => (
          <HeaderSubMenuItem key={index} title={item.title} />
        ))}
    </div>
    )
}