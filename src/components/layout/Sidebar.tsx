import type React from "react"
import "../../assets/css/Sidebar.css"
import govBanner from "../../assets/img/gov_banner.jpg"
import mojBanner from "../../assets/img/moj_banner.jpg"
import csdlBanner from "../../assets/img/csdl_banner.jpg"
import { mockDocuments } from "../../mock/DocumentItem.json"
import SidebarMenu from "./SidebarMenu"

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* Menu */}
      <SidebarMenu />

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
            {mockDocuments.filter(doc => doc.categoryId === "1").map((doc) => (
              <li key={doc.id}>
                <i className="fa fa-file-o" aria-hidden="true"></i>
                <a href="#" title={doc.title + " - " + doc.description}>
                  {doc.title + " - " + doc.description}
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
