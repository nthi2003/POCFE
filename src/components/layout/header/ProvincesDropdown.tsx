import React from "react";
import provincesData from "../../../mock/mockProvinces.json";

const ProvincesDropdown: React.FC = () => {
  const mockProvinces = provincesData.provinces; 

  return (
    <li className="dropdown">
      <a href="#" className="menu-item dropdown-toggle">
        ĐỊA PHƯƠNG ▾
      </a>
      <div className="dropdown-modal">
        <div className="dropdown-menu-background">

        <div className="dropdown-modal-header">
            Danh sách các Tỉnh, Thành phố trực thuộc Trung ương
        </div>
        <div className="dropdown-modal-content">
          <div className="provinces-content">
            {/* Cột Thành phố */}
            <div className="provinces-column">
              <div className="provinces-title">Thành phố</div>
              <div className="provinces-city-list">
                {mockProvinces.filter((p) => p.type === "city").map((city) => (
                  <a key={city.id} href={city.url || "#"}>{city.name}</a>
                ))}
              </div>
            </div>
            {/* Cột Các tỉnh */}
            <div className="provinces-column">
              <div className="provinces-title">Các tỉnh</div>
              <div className="provinces-grid">
                {mockProvinces.filter((p) => p.type === "province").map((province) => (
                  <a key={province.id} href={province.url || "#"}>{province.name}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </li>
  );
};

export default ProvincesDropdown;