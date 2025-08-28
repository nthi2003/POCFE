import type React from "react"
import { useState } from "react"
import { ministries } from "../../mock/mockMinistries.json"
import { provinces } from "../../mock/mockProvinces.json"

// Create dropdown data structure from imported mock data
const dropdownData = {
  centralLaw: {
    sections: [
      {
        title: "Trung ương",
        items: [{ name: "Trung ương", url: "/tv" }],
      },
      {
        title: "Các bộ, ngành Trung ương",
        items: ministries.map(ministry => ({ name: ministry.name, url: ministry.url })),
      },
    ],
  },
  localLaw: {
    sections: [
      {
        title: "Thành phố",
        items: provinces.filter(province => province.type === "city").map(city => ({ name: city.name, url: city.url })),
      },
      {
        title: "Các tỉnh",
        items: provinces.filter(province => province.type === "province").map(province => ({ name: province.name, url: province.url })),
      },
    ],
  },
}

const SidebarMenu: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="sidebar-menu">
      <ul>
        <li id="#hover1" onMouseEnter={() => setHoveredItem("central-law")} onMouseLeave={() => setHoveredItem(null)}>
          <a href="#" className="sidebar-btn">
            <span className="arrow-icon">►</span>
            <span>Văn bản pháp luật Trung ương</span>
          </a>
          <div
            id="div1"
            className="list-diaphuong"
            style={{ display: hoveredItem === "central-law" ? "block" : "none" }}
          >
            <div className="dropdown-container">
              {dropdownData.centralLaw.sections.map((section, index) => (
                <div key={index} className={`dropdown-section ${index === 1 ? "ministries-section" : ""}`}>
                  <p className="section-title">{section.title}</p>
                  <ul className={index === 1 ? "ministries-grid" : ""}>
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <a href={item.url}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </li>
        <li id="#hover2" onMouseEnter={() => setHoveredItem("local-law")} onMouseLeave={() => setHoveredItem(null)}>
          <a href="#" className="sidebar-btn">
            <span className="arrow-icon">►</span>
            <span>Văn bản pháp luật địa phương</span>
          </a>
          <div
            id="div2"
            className="list-diaphuong"
            style={{ display: hoveredItem === "local-law" ? "block" : "none" }}
          >
            <div className="dropdown-container">
              <p className="title">Danh sách các tỉnh & thành phố trực thuộc Trung ương</p>
              <table cellSpacing="1" cellPadding="5">
                <tbody>
                  <tr className="header">
                    <td>Thành phố</td>
                    <td colSpan={4}>Các tỉnh</td>
                  </tr>
                  <tr>
                    <td className="cities-column">
                      <ul>
                        {dropdownData.localLaw.sections[0].items.map((item) => (
                          <li key={item.name}>
                            <a href={item.url}>
                              <strong>{item.name}</strong>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="provinces-column">
                      <ul>
                        {dropdownData.localLaw.sections[1].items.slice(0, 15).map((item) => (
                          <li key={item.name}>
                            <a href={item.url}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="provinces-column">
                      <ul>
                        {dropdownData.localLaw.sections[1].items.slice(15, 30).map((item) => (
                          <li key={item.name}>
                            <a href={item.url}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="provinces-column">
                      <ul>
                        {dropdownData.localLaw.sections[1].items.slice(30, 45).map((item) => (
                          <li key={item.name}>
                            <a href={item.url}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="provinces-column">
                      <ul>
                        {dropdownData.localLaw.sections[1].items.slice(45).map((item) => (
                          <li key={item.name}>
                            <a href={item.url}>{item.name}</a>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li id="#hover3" onMouseEnter={() => setHoveredItem("legal-code")} onMouseLeave={() => setHoveredItem(null)}>
          <a href="#" className="sidebar-btn">
            <span className="arrow-icon">►</span>
            <span>Bộ Pháp điển điện tử</span>
          </a>
          <div id="div3"></div>
        </li>
      </ul>
    </div>
  )
}

export default SidebarMenu
