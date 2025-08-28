import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="header-top">
      <div className="content-header-top">
        <a href="/_layouts/authenticate.aspx">
          <i className="fas fa-user"></i> Đăng nhập
        </a>
        <a href="/huongdan/CSDLVanbanphapluat.html">
          <i className="fas fa-headphones"></i> Hướng dẫn khai thác
        </a>
        <a href="/tw/Pages/sitemap.aspx">
          <i className="fas fa-chart-bar"></i> Sơ đồ cổng thông tin
        </a>
        <a href="/tw/Pages/hienthilienhe.aspx">
          <i className="fas fa-envelope"></i> Liên hệ
        </a>
      </div>
    </div>
  );
};

export default TopBar;