import { useEffect, useState } from "react";
import "../assets/css/HomePage.css";
import img5 from "../assets/img/img_5.jpg";
import img6 from "../assets/img/img_6.jpg";
import img7 from "../assets/img/img_7.jpg";
import data from "../mock/DocumentItem.json";

interface NavHeader {
  id: string;
  title: string;
  color: string;
  url: string;
}

export const Home = () => {
  const { mockDocuments, mockTitles, mockNavHeaders, mockMarquees } = data;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockNavHeaders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [mockNavHeaders.length]);

  const active: NavHeader = mockNavHeaders[currentIndex];

  return (
    <div className="container-home">
      <div className="bg-home">
        <div
          className="slider-wrapper"
          style={{ background: "#ccc", transition: "background 0.5s ease" }}
        >
          <div className="slider-container">
            <div style={{ height: "230px" }}>
              <img src={active.url} alt={active.title} className="slider-image" />
            </div>
            <div className="footer-navbar">
              <div style={{ width: "60%" }}>
                <ul className="nav-footer">
                  {mockNavHeaders.map((nav, i) => (
                    <li
                      key={nav.id}
                      className="font-nav"
                      style={{
                        background:
                          nav.id === active.id ? active.color : "transparent",
                        color: nav.id === active.id ? "#fff" : "#000",
                      }}
                      onClick={() => setCurrentIndex(i)}
                    >
                      {nav.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ width: "40%", overflow: "hidden" }}>
                <div className="marquee">
                  <div className="marquee__content">
                    {mockMarquees.map((marquee, index) => (
                      <a
                        key={index}
                        href={marquee.link}
                        style={{ alignItems: "center", marginRight: "50px" }}
                      >
                        <span style={{ color: "#006699" }}>
                          <i
                            className={marquee.icon}
                            style={{ color: "red", marginRight: "8px" }}
                          ></i>
                          {marquee.content}
                        </span>
                      </a>
                    ))}

                    {mockMarquees.map((marquee, index) => (
                      <a
                        key={`dup-${index}`}
                        href={marquee.link}
                        style={{ alignItems: "center", marginRight: "50px" }}
                      >
                        <i
                          className={marquee.icon}
                          style={{ color: "red", marginRight: "8px" }}
                        ></i>
                        <span style={{ color: "#006699" }}>
                          {marquee.content}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="box-banner">
            <div className="box-banner-ad">
              <a href="#">
                <img src={img5} alt="Cổng thông tin điện tử bộ tư pháp" />
              </a>
            </div>
            <div className="box-banner-ad">
              <a href="#">
                <img src={img6} alt="Cổng thông tin điện tử Pháp điển" />
              </a>
            </div>
            <div className="box-banner-ad">
              <a href="#">
                <img src={img7} alt="Cổng dịch vụ công quốc gia" />
              </a>
            </div>
          </div>

          <div className="content-box-news">
            <div className="box-news-home">
              <div className="news-columns">
                {mockTitles.map((title) => {
                  const docs = mockDocuments.filter(
                    (doc) => doc.categoryId === title.id
                  );
                  return (
                    <div key={title.id} className="box-title-news">
                      <a href="#" style={{ color: title.color , fontSize: "18px" }}>
                        {title.text}
                      </a>
                      {docs.length > 0 && (
                        <div className="content-news">
                          <ul>
                            {docs.map((doc) => (
                              <li key={doc.id}>
                                <i className="fa-regular fa-file"></i>
                                <a href="#">{doc.title}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
