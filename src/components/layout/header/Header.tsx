import React from "react";
import TopBar from "./TopBar";
import Banner from "./Banner";
import NavBar from "./NavBar";
import bannerTitle from "../../../assets/img/bannerTitle.png";
import bgBanner from "../../../assets/img/bg-baner.png";

import "../../../assets/css/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <TopBar />
      <Banner bannerTitle={bannerTitle} bgBanner={bgBanner} />
      <NavBar />
    </header>
  );
};

export default Header;