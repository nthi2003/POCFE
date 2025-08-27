import type React from "react"
import { useState } from "react"
import "../../assets/css/Sidebar.css"
import govBanner from "../../assets/img/gov_banner.jpg"
import mojBanner from "../../assets/img/moj_banner.jpg"
import csdlBanner from "../../assets/img/csdl_banner.jpg"

// Mock data for documents
const mockDocuments = [
  {
    id: 1,
    title: "Thông tư 68/2025/TT-BCA Sửa đổi, bổ sung một số điều của Thông tư 01/2021/TT-BCA",
    url: "#",
    date: "2025-01-15",
  },
  {
    id: 2,
    title: "Quyết định 39/2025/QĐ-UBND Ban hành định mức kinh tế - kỹ thuật xây dựng công trình",
    url: "#",
    date: "2025-01-12",
  },
  {
    id: 3,
    title: "Quyết định 63/2025/QĐ-UBND Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức",
    url: "#",
    date: "2025-01-10",
  },
  {
    id: 4,
    title: "Thông tư 52/2025/TT-BNNMT Quy định kỹ thuật quốc gia về an toàn thực phẩm",
    url: "#",
    date: "2025-01-08",
  },
  {
    id: 5,
    title: "Nghị định 15/2025/NĐ-CP Quy định chi tiết thi hành một số điều của Luật Đầu tư",
    url: "#",
    date: "2025-01-05",
  },
  {
    id: 6,
    title: "Thông tư 41/2025/TT-BTC Hướng dẫn thực hiện một số quy định về quản lý tài chính",
    url: "#",
    date: "2025-01-03",
  },
]

// Mock data for dropdown menu
const dropdownData = {
  centralLaw: {
    sections: [
      {
        title: "Trung ương",
        items: [{ name: "Trung ương", url: "/tv" }],
      },
      {
        title: "Các bộ, ngành Trung ương",
        items: [
          { name: "Bộ Công an", url: "#" },
          { name: "Bộ Công thương", url: "#" },
          { name: "Bộ Giáo dục và Đào tạo", url: "#" },
          { name: "Bộ Giao thông vận tải", url: "#" },
          { name: "Bộ Kế hoạch và Đầu tư", url: "#" },
          { name: "Bộ Khoa học và Công nghệ", url: "#" },
          { name: "Bộ Lao động - Thương Binh và Xã hội", url: "#" },
          { name: "Bộ Văn hóa - Thể thao và Du lịch", url: "#" },
          { name: "Bộ Nông nghiệp và Phát triển nông thôn", url: "#" },
          { name: "Bộ Nội vụ", url: "#" },
          { name: "Bộ Ngoại giao", url: "#" },
          { name: "Bộ Quốc phòng", url: "#" },
          { name: "Bộ Tài chính", url: "#" },
          { name: "Bộ Tài nguyên và Môi trường", url: "#" },
          { name: "Bộ Tư pháp", url: "#" },
          { name: "Bộ Thông tin và Truyền thông", url: "#" },
          { name: "Bộ Xây dựng", url: "#" },
          { name: "Bộ Y tế", url: "#" },
          { name: "Ngân hàng Nhà nước Việt Nam", url: "#" },
          { name: "Thanh tra Chính phủ", url: "#" },
          { name: "Ủy ban Dân tộc", url: "#" },
          { name: "Văn phòng Chính phủ", url: "#" },
          { name: "Kiểm toán Nhà nước", url: "#" },
          { name: "Tòa án nhân dân tối cao", url: "#" },
          { name: "Viện kiểm sát nhân dân tối cao", url: "#" },
        ],
      },
    ],
  },
  localLaw: {
    sections: [
      {
        title: "Thành phố",
        items: [
          { name: "Hà Nội", url: "#" },
          { name: "TP HCM", url: "#" },
          { name: "Đà Nẵng", url: "#" },
          { name: "Hải Phòng", url: "#" },
          { name: "Cần Thơ", url: "#" },
        ],
      },
      {
        title: "Các tỉnh",
        items: [
          { name: "An Giang", url: "#" },
          { name: "Bà Rịa - Vũng Tàu", url: "#" },
          { name: "Bắc Giang", url: "#" },
          { name: "Bắc Kạn", url: "#" },
          { name: "Bạc Liêu", url: "#" },
          { name: "Bắc Ninh", url: "#" },
          { name: "Bến Tre", url: "#" },
          { name: "Bình Định", url: "#" },
          { name: "Bình Dương", url: "#" },
          { name: "Bình Phước", url: "#" },
          { name: "Bình Thuận", url: "#" },
          { name: "Cà Mau", url: "#" },
          { name: "Cao Bằng", url: "#" },
          { name: "Đắk Lắk", url: "#" },
          { name: "Đắk Nông", url: "#" },
          { name: "Điện Biên", url: "#" },
          { name: "Đồng Nai", url: "#" },
          { name: "Đồng Tháp", url: "#" },
          { name: "Gia Lai", url: "#" },
          { name: "Hà Giang", url: "#" },
          { name: "Hà Nam", url: "#" },
          { name: "Hà Tĩnh", url: "#" },
          { name: "Hải Dương", url: "#" },
          { name: "Hậu Giang", url: "#" },
          { name: "Hòa Bình", url: "#" },
          { name: "Hưng Yên", url: "#" },
          { name: "Khánh Hòa", url: "#" },
          { name: "Kiên Giang", url: "#" },
          { name: "Kon Tum", url: "#" },
          { name: "Lai Châu", url: "#" },
          { name: "Lâm Đồng", url: "#" },
          { name: "Lạng Sơn", url: "#" },
          { name: "Lào Cai", url: "#" },
          { name: "Long An", url: "#" },
          { name: "Nam Định", url: "#" },
          { name: "Nghệ An", url: "#" },
          { name: "Ninh Bình", url: "#" },
          { name: "Ninh Thuận", url: "#" },
          { name: "Phú Thọ", url: "#" },
          { name: "Phú Yên", url: "#" },
          { name: "Quảng Bình", url: "#" },
          { name: "Quảng Nam", url: "#" },
          { name: "Quảng Ngãi", url: "#" },
          { name: "Quảng Ninh", url: "#" },
          { name: "Quảng Trị", url: "#" },
          { name: "Sóc Trăng", url: "#" },
          { name: "Sơn La", url: "#" },
          { name: "Tây Ninh", url: "#" },
          { name: "Thái Bình", url: "#" },
          { name: "Thái Nguyên", url: "#" },
          { name: "Thanh Hóa", url: "#" },
          { name: "Thừa Thiên Huế", url: "#" },
          { name: "Tiền Giang", url: "#" },
          { name: "Trà Vinh", url: "#" },
          { name: "Tuyên Quang", url: "#" },
          { name: "Vĩnh Long", url: "#" },
          { name: "Vĩnh Phúc", url: "#" },
          { name: "Yên Bái", url: "#" },
        ],
      },
    ],
  },
}

const Sidebar: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <aside className="sidebar">
      {/* Menu */}

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
                      <td >Các tỉnh</td>
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

      {/* Banners */}
      <div className="sidebar-banners">
        <a href="https://chinhphu.vn" target="_blank" rel="noreferrer">
          <img src={govBanner || "/placeholder.svg"} alt="Cổng thông tin Chính phủ" />
        </a>
        <a href="https://moj.gov.vn" target="_blank" rel="noreferrer">
          <img src={mojBanner || "/placeholder.svg"} alt="Cổng thông tin Bộ Tư pháp" />
        </a>
        <a href="https://dichvucong.gov.vn" target="_blank" rel="noreferrer">
          <img src={csdlBanner || "/placeholder.svg"} alt="Cơ sở dữ liệu quốc gia về Thủ tục hành chính" />
        </a>
      </div>

      {/* Latest Documents */}
      <div className="sidebar-docs">
        <div className="box-title-news">
          <a href="https://vbpl.vn/pages/vanbanmoi.aspx">Văn bản mới</a>
        </div>
        <div className="content-news">
          <ul>
            {mockDocuments.map((doc) => (
              <li key={doc.id}>
                <i className="fa fa-file-o" aria-hidden="true"></i>
                <a href={doc.url} title={doc.title}>
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
