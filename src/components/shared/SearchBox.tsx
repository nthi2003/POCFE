import "../../assets/css/SearchBox.css";
import { useEffect, useState, type FormEvent } from "react";

import questionIcon from "../../assets/img/faq_question_icon.gif";
import mockDocuments from "../../mock/searchbox-mockdata.json";

interface Document {
  id: string;
  title: string;
  summary: string;
  issuedDate: string;
  effectiveDate: string;
  status: string;
}

const SearchBox: React.FC = () => {
  type SearchType = "exact" | "allWords";
  type SearchIn = "all" | "title" | "summary";
  type SortBy = "issuedDate";
  type SortOrder = "desc" | "asc";

  const [keyword, setKeyword] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchType>("allWords");
  const [searchIn, setSearchIn] = useState<SearchIn>("all");
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortBy>("issuedDate");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [searchResults, setSearchResults] = useState<Document[]>([]);

  useEffect(() => {
    const filtered = (mockDocuments as Document[]).filter((doc) => {
      // Filter theo ngày ban hành
      const issued = new Date(doc.issuedDate);
      const from = fromDate ? new Date(fromDate) : new Date(0);
      const to = toDate ? new Date(toDate) : new Date();
      return issued >= from && issued <= to;
    });

    // Sắp xếp kết quả
    filtered.sort((a, b) => {
      if (sortBy === "issuedDate") {
        const dateA = new Date(a.issuedDate);
        const dateB = new Date(b.issuedDate);
        return sortOrder === "desc"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      }
      return 0;
    });

    setSearchResults(filtered);
  }, [fromDate, toDate, sortBy, sortOrder]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filtered = (mockDocuments as Document[]).filter((doc) => {
      const query = keyword.toLowerCase().trim();
      let matchesKeyword = true;

      if (query) {
        if (searchType === "exact") {
          if (searchIn === "title") {
            matchesKeyword = doc.title.toLowerCase() === query;
          } else if (searchIn === "summary") {
            matchesKeyword = doc.summary.toLowerCase() === query;
          } else {
            matchesKeyword =
              doc.title.toLowerCase() === query ||
              doc.summary.toLowerCase() === query;
          }
        } else {
          const words = query.split(" ");
          if (searchIn === "title") {
            matchesKeyword = words.every((word) =>
              doc.title.toLowerCase().includes(word)
            );
          } else if (searchIn === "summary") {
            matchesKeyword = words.every((word) =>
              doc.summary.toLowerCase().includes(word)
            );
          } else {
            matchesKeyword = words.every(
              (word) =>
                doc.title.toLowerCase().includes(word) ||
                doc.summary.toLowerCase().includes(word)
            );
          }
        }
      }

      const issued = new Date(doc.issuedDate);
      const from = fromDate ? new Date(fromDate) : new Date(0);
      const to = toDate ? new Date(toDate) : new Date();
      const matchesDate = issued >= from && issued <= to;

      return matchesKeyword && matchesDate;
    });

    filtered.sort((a, b) => {
      if (sortBy === "issuedDate") {
        const dateA = new Date(a.issuedDate);
        const dateB = new Date(b.issuedDate);
        return sortOrder === "desc"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      }
      return 0;
    });

    setSearchResults(filtered);
  };

  return (
    <>
      <form className="search-section" onSubmit={handleSubmit}>
        <div className="box-search">
          <div className="search-header">
            <h4>Tìm kiếm văn bản</h4>
            <a href="#">Tìm kiếm nâng cao</a>
          </div>

          <div className="search-main">
            <span>Từ khóa tìm kiếm</span>
            <div className="search-main-userInput">
              <div className="input">
                <input
                  type="text"
                  placeholder="Từ khóa tìm kiếm"
                  className="user-input"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              </div>
              <div className="search-opt">
                <label className="ratio-search">
                  <input
                    type="radio"
                    name="search-type"
                    checked={searchType === "exact"}
                    onChange={() => setSearchType("exact")}
                  />
                  Chính xác cụm từ trên
                </label>
                <label className="ratio-search">
                  <input
                    type="radio"
                    name="search-type"
                    checked={searchType === "allWords"}
                    onChange={() => setSearchType("allWords")}
                  />
                  Có tất cả từ trên
                </label>
              </div>
            </div>
          </div>

          <div className="search-filter-ratio">
            <span>Tìm trong</span>
            <div className="otpSection">
              <label className="otp">
                <input
                  type="radio"
                  name="search-in"
                  className="radio"
                  checked={searchIn === "all"}
                  onChange={() => setSearchIn("all")}
                />
                Tất cả
              </label>
              <label className="otp">
                <input
                  type="radio"
                  name="search-in"
                  className="radio"
                  checked={searchIn === "title"}
                  onChange={() => setSearchIn("title")}
                />
                Tiêu đề
              </label>
              <label className="otp">
                <input
                  type="radio"
                  name="search-in"
                  className="radio"
                  checked={searchIn === "summary"}
                  onChange={() => setSearchIn("summary")}
                />
                Trích yếu
              </label>
            </div>
          </div>

          <div className="search-filter-date">
            <span>Thời gian ban hành</span>
            <div className="searchDate-input">
              Từ ngày
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>
            <div className="searchDate-input">
              Đến ngày
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>

          <div className="short-option">
            <span>Sắp xếp theo</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortBy)}
            >
              <option value="issuedDate">Ngày ban hành</option>
              <option>Loại văn bản</option>
              <option>Kết quả chính xác</option>
              <option>Ngày hiệu lực</option>
              <option>Ngày hết hiệu lực</option>
            </select>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            >
              <option value="desc">Mới đến cũ</option>
              <option value="asc">Cũ đến mới</option>
            </select>
            <button type="submit">Tìm kiếm</button>
            <div className="tooltip-container">
              <img className="question-icon" src={questionIcon}></img>
              <div className="tooltip-content">
                <h5>Cách thức tìm kiếm</h5>
                <div className="tooltip-text">
                  <p>
                    <strong>1.</strong> Nhập từ khóa cần tìm kiếm vào ô text "Từ
                    khóa tìm kiếm"
                  </p>
                  <p>
                    <strong>2.</strong> Lựa chọn một trong 2 option:
                  </p>
                  <p>
                    - Chính xác cụm từ trên: kết quả trả về chứa chính xác cụm
                    từ được nhập theo đúng thứ tự hiển thị của các từ khóa
                  </p>
                  <p>
                    - Có tất cả từ trên: kết quả trả về chứa tất cả các từ trong
                    cụm từ khóa, không quan tâm vị trí hiển thị
                  </p>
                  <p>
                    <strong>3.</strong> Tìm trong: lựa chọn vị trí cần tìm nằm
                    trong thuộc tính nào của văn bản:
                  </p>
                  <p>- Tiêu đề: bao gồm số ký hiệu và Loại văn bản</p>
                  <p>- Trích yếu: nội dung trích yếu của văn bản.</p>
                  <p>
                    <strong>4.</strong> Ngoài ra, có thể tìm kiếm theo nhiều
                    tiêu chí hơn thông qua Tìm kiếm nâng cao.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="listLawSection">
        {searchResults.length > 0 && (
          <div className="search-results">
            <ul className="listLaw">
              {searchResults.map((doc) => (
                <li key={doc.id} className="lawItem">
                  <p className="law-title">
                    <a href="#">{doc.title}</a>
                  </p>
                  <div className="law-content">
                    <div className="left">
                      <p>{doc.summary}</p>
                      <div className="link">
                        <a href="#" className="opt opt1">Bản PDF</a>
                        <a href="#" className="opt opt2">VB liên quan</a>
                        <a href="#" className="opt opt3">Thuộc tính </a>
                        <a href="#" className="opt opt4">Lược đồ</a>
                        <a href="#" className="opt opt5">Tải về </a>
                      </div>
                    </div>
                    <div className="right">
                      <p className="right-item">
                        <span className="regular">Ban hành: </span>
                        <span className="regular">{doc.issuedDate}</span>
                      </p>
                      <p className="right-item">
                        <span className="regular">Hiệu lực:</span>
                        <span className="regular">{doc.effectiveDate}</span>
                      </p>
                      <p className="right-item">
                        <span className="law-status">Trạng thái:</span>
                        <span className="law-status">
                          {doc.status || "Đang hiệu lực"}
                        </span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
