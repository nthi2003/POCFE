import type React from "react"
import "../../assets/css/Sidebar.css"
import SidebarMenu from "../shared/SidebarMenu"
import SidebarBanners from "../shared/SidebarBanners"
import SidebarDocs from "../shared/SidebarDocs"


const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* Menu */}
      <SidebarMenu />

      {/* Banners */}
      <SidebarBanners />

      {/* Latest Documents */}
      <SidebarDocs />
    </aside>
  )
}

export default Sidebar
