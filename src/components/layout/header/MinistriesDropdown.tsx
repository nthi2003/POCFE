import React from "react";
import ministriesData from "../../../mock/mockMinistries.json";

const MinistriesDropdown: React.FC = () => {
  const mockMinistries = ministriesData.ministries; 

  return (
    <li className="dropdown">
      <a href="#" className="menu-item dropdown-toggle">
        CÁC BỘ, NGÀNH ▾
      </a>
      <div className="dropdown-menu">
        <div className="dropdown-menu-header">Danh sách các Bộ, Ngành</div>
        <div className="dropdown-menu-content">
          <div className="dropdown-menu-grid">
            {mockMinistries.map((ministry) => (
              <a key={ministry.id} href={ministry.url || "#"} className="modal-item">
                {ministry.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default MinistriesDropdown;