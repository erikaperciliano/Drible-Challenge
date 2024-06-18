interface HeaderSubMenuItemProps {
    title?: string
}

export function HeaderSubMenuItem({ title }: HeaderSubMenuItemProps) {
    return (
      <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">{title}</a>
    );
}