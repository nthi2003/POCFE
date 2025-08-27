import { useEffect, useState } from "react";
import "../assets/css/home.css";
import img5 from "../assets/img/img_5.jpg";
import img6 from "../assets/img/img_6.jpg";
import img7 from "../assets/img/img_7.jpg";
import {
  mockDocuments,
  mockTitles,
  mockNavHeaders,
  type NavHeader,
} from "../mock/DocumentItem";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockNavHeaders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const active: NavHeader = mockNavHeaders[currentIndex];

  return (
    <div className="container-home">
      <div className="bg-home">

        <div className="slider-wrapper" style={{ background: "#ccc", transition: "background 0.5s ease" }}>
          <div className="slider-container">
           <div style={{height: "230px"}}>
             <img src={active.url} alt={active.title} className="slider-image" />
           </div>
           <div>
             <ul className="nav-footer">
              {mockNavHeaders.map((nav, i) => (
                <li
                  key={nav.id}
                  className="font-nav"
                  style={{background : nav.id === active.id ? active.color : "transparent" , color: nav.id === active.id ?  "#fff" : "#000"}}
                  onClick={() => setCurrentIndex(i)}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
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
                      <a href="#" style={{ color: title.color }}>
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
