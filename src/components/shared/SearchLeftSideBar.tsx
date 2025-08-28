
import "../../assets/css/NavSearch.css";
const SearchLeftSideBar = () => {
  return (
    <>
      <div className="box-content">
        <ul className="top nav">
          <li className="top-nav-item">
            <span>
              <a className="hightlight">Văn bản quy phạm pháp luật</a>
            </span>
          </li>
          <li className="top-nav-item">
            <span>
              <a className="hightlight">Văn bản hợp nhất</a>
            </span>
          </li>
          <li className="top-nav-item">
            <span>
              <a className="hightlight">Văn bản hóa VBQPPL</a>
            </span>
          </li>
        </ul>
         <div className="nav-footer-content"></div>
      </div>
      {/* section */}
      <div className="box-content">
        <h4 className="label">
          <span>Cơ quan ban hành</span>
        </h4>
        <ul className="mid nav">
          <li className="mid-nav-item ">
            <span className="nav-item">
              <a className="mid-hightlight">Tòa án nhân dân tối cao</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Quốc hội</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Ủy ban thường vụ Quốc hội</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Chính phủ</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Thủ tướng Chính phủ</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Các Bộ, cơ quan ngang Bộ</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Các cơ quan khác</a>
            </span>
          </li>
        </ul>
        <div className="nav-footer-content"></div>
      </div>
      {/* section */}
      <div className="box-content">
        <h4 className="label">
          <span>Loại văn bản</span>
        </h4>
        <ul className="mid nav">
          <li className="mid-nav-item ">
            <span className="nav-item">
              <a className="mid-hightlight">Hiến pháp</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Bộ luật</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Luật</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Pháp lệnh</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Lệnh</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Nghị quyết</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Nghị quyết liên tịch</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Nghị định</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Quyết định</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Thông tư</a>
            </span>
          </li>{" "}
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">Thông tư liên tịch</a>
            </span>
          </li>
        </ul>
        <div className="nav-footer-content"></div>
      </div>

      {/* section */}
      <div className="box-content">
        <h4 className="label">
          <span>Năm ban hành</span>
        </h4>
        <ul className="mid nav">
          <li className="mid-nav-item ">
            <span className="nav-item">
              <a className="mid-hightlight">1945 đến 1950</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">1951 đến 1960</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">1961 đến 1970</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">1971 đến 1980</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">1981 đến 1990</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">1991 đến 2000</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">2001 đến 2010</a>
            </span>
          </li>
          <li className="mid-nav-item">
            <span className="nav-item">
              <a className="mid-hightlight">2011 đến 2020</a>
            </span>
          </li>
        </ul>
        <div className="nav-footer-content"></div>
      </div>
    </>
  );
};

export default SearchLeftSideBar;
