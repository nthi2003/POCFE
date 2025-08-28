import type React from "react"
import govBanner from "../../assets/img/gov_banner.jpg"
import mojBanner from "../../assets/img/moj_banner.jpg"
import csdlBanner from "../../assets/img/csdl_banner.jpg"

const SidebarBanners: React.FC = () => {
  return (
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
  )
}

export default SidebarBanners
