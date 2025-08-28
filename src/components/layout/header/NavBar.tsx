import React from "react";
import SearchForm from "./SearchHeader";

interface MenuItem {
  id?: string;
  label: string;
  href: string;
}

interface NavBarProps {
  leftMenuItems?: MenuItem[];
  rightMenuItems?: MenuItem[];
}

const defaultLeftMenuItems: MenuItem[] = [
  { id: "1", label: "TRANG CHỦ", href: "#" },
  { id: "2", label: "TÌM KIẾM", href: "#" },
  { id: "3", label: "TIN TỨC", href: "#" },
  { id: "4", label: "TÌNH HUỐNG PHÁP LUẬT", href: "#" },
  { id: "5", label: "ENGLISH", href: "#" },
];

const NavBar: React.FC<NavBarProps> = ({
  leftMenuItems = defaultLeftMenuItems,
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-left">
          {leftMenuItems.map((item) => (
            <li key={item.id || item.label}>
              <a href={item.href} className="menu-item">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <SearchForm />
      </div>
    </nav>
  );
};

export default NavBar;
