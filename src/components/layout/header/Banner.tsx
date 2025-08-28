import React from "react";

interface BannerProps {
  bannerTitle: string;
  bgBanner: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({ bannerTitle, bgBanner, subtitle = "Trung ương" }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bgBanner})`,
      }}
    >
      <img src={bannerTitle} alt="Banner Title" className="banner-title" />
      <p className="banner-subtitle">{subtitle}</p>
    </div>
  );
};

export default Banner;