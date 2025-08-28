import React from "react";

interface BannerProps {
  bannerTitle: string;
  bgBanner: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = ({ bannerTitle, bgBanner }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${bgBanner})`,
      }}
    >
      <img src={bannerTitle} alt="Banner Title" className="banner-title" />
    </div>
  );
};

export default Banner;