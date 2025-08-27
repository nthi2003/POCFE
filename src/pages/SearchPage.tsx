
import "../assets/css/SearchPage.css";
import SearchBox from "../components/shared/SearchBox";
import SearchLeftSideBar from "../components/shared/SearchLeftSideBar";
import SearchRightSidebar from "../components/shared/SearchRight";
const SearchPage = () => {
  return (
    <>
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
      </footer>
    </>
  );
};

export default SearchPage;
