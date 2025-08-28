import React from "react";
import { Link, useLocation } from "react-router-dom";
import SearchForm from "./SearchHeader";
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
  { id: "1", label: "TRANG CHỦ", href: "/" },
  { id: "2", label: "TÌM KIẾM", href: "/search" },
  { id: "3", label: "TIN TỨC", href: "/new" },
  { id: "4", label: "TÌNH HUỐNG PHÁP LUẬT", href: "/law" },
  { id: "5", label: "ENGLISH", href: "#" },
];

const defaultRightMenuItems: MenuItem[] = [
  { id: "6", label: "TRUNG ƯƠNG", href: "#" },
];

const NavBar: React.FC<NavBarProps> = ({
  leftMenuItems = defaultLeftMenuItems,
  rightMenuItems = defaultRightMenuItems,
}) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-left">
          {leftMenuItems.map((item) => (
            <li key={item.id || item.label}>
              <Link to={item.href} className="menu-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {isHome ? (
          <SearchForm />
        ) : (
          <ul className="navbar-right">
            {rightMenuItems.map((item) => (
              <li key={item.id || item.label}>
                <a href={item.href} className="menu-item dropdown-toggle">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <MinistriesDropdown />
            </li>
            <li>
              <ProvincesDropdown />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
