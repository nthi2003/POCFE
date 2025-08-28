import React from "react";
import MinistriesDropdown from "./MinistriesDropdown";
import ProvincesDropdown from "./ProvincesDropdown";

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
  { id: "1", label: "CSDL QUỐC GIA", href: "#" },
  { id: "2", label: "TRANG CHỦ", href: "#" },
  { id: "3", label: "TÌM KIẾM", href: "#" },
  { id: "4", label: "ENGLISH", href: "#" }
];

const defaultRightMenuItems: MenuItem[] = [
  { id: "5", label: "TRUNG ƯƠNG", href: "#" }
];

const NavBar: React.FC<NavBarProps> = ({ 
  leftMenuItems = defaultLeftMenuItems,
  rightMenuItems = defaultRightMenuItems
}) => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        {leftMenuItems.map((item) => (
          <li key={item.id || item.label}> 
            <a href={item.href} className="menu-item">
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="navbar-right">
        {rightMenuItems.map((item) => (
          <li key={item.id || item.label}>
            <a href={item.href} className="menu-item dropdown-toggle">
              {item.label}
            </a>
          </li>
        ))}
        <li><MinistriesDropdown /></li> 
        <li><ProvincesDropdown /></li> 
      </ul>
    </nav>
  );
};

export default NavBar;