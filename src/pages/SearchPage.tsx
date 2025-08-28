import { useEffect, useState } from "react";
import "../assets/css/SearchPage.css";
import SearchBox from "../components/shared/SearchBox";
import SearchLeftSideBar from "../components/shared/SearchLeftSideBar";
import SearchRightSidebar from "../components/shared/SearchRight";
const SearchPage = () => {
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;

      const nearBottom = scrollPosition + windowHeight >= documentHeight - 100;
      setShowScrollTop(nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="search-mainPage">
        <div className="container">
          <div className="page-content">
            <div className="left-side">
              <SearchLeftSideBar />
            </div>
            <div className="main">
              <SearchBox />
            </div>
            <div className="right-side">
              <SearchRightSidebar />
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="precontainer">
            <span className="footer-content">
              CƠ SỞ DỮ LIỆU VĂN BẢN PHÁP LUẬT TRUNG ƯƠNG
            </span>
          </div>
          {showScrollTop && (
            <button className="scroll-to-top" onClick={scrollToTop}>
             LÊN ĐẦU TRANG
            </button>
          )}
        </footer>
      </div>
    </>
  );
};

export default SearchPage;
