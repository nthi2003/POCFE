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
  expirationDate?: string;
}

const SearchBox: React.FC = () => {
  type SearchType = "exact" | "allWords";
  type SearchIn = "all" | "title" | "summary";
  type SortBy = "issuedDate";
  type SortOrder = "desc" | "asc";
  type ActiveTab = "new" | "effective" | "expired";

  // Default filter values
  const DEFAULT_SEARCH_TYPE: SearchType = "allWords";
  const DEFAULT_SEARCH_IN: SearchIn = "all";
  const DEFAULT_SORT_BY: SortBy = "issuedDate";
  const DEFAULT_SORT_ORDER: SortOrder = "desc";
  const DEFAULT_TAB: ActiveTab = "new";

  const [keyword, setKeyword] = useState<string>("");
  const [searchType, setSearchType] = useState<SearchType>(DEFAULT_SEARCH_TYPE);
  const [searchIn, setSearchIn] = useState<SearchIn>(DEFAULT_SEARCH_IN);
  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortBy>(DEFAULT_SORT_BY);
  const [sortOrder, setSortOrder] = useState<SortOrder>(DEFAULT_SORT_ORDER);
  const [searchResults, setSearchResults] = useState<Document[]>([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<ActiveTab>(DEFAULT_TAB);

  const getCurrentMonthRange = () => {
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return { startOfMonth, endOfMonth };
  };

  const isWithinLast30Days = (date: string) => {
    const docDate = new Date(date);
    const now = new Date();
    const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));
    return docDate >= thirtyDaysAgo;
  };

  const filterByTab = (documents: Document[], tab: ActiveTab) => {
    const { startOfMonth, endOfMonth } = getCurrentMonthRange();
    return documents.filter((doc) => {
      const effective =
        doc.effectiveDate !== "Unknown" ? new Date(doc.effectiveDate) : null;
      const expiration = doc.expirationDate
        ? new Date(doc.expirationDate)
        : null;

      if (tab === "new") {
        return isWithinLast30Days(doc.issuedDate);
      } else if (tab === "effective") {
        return (
          effective && effective >= startOfMonth && effective <= endOfMonth
        );
      } else if (tab === "expired") {
        return (
          expiration && expiration >= startOfMonth && expiration <= endOfMonth
        );
      }
      return true;
    });
  };

  useEffect(() => {
    let results = [...mockDocuments] as Document[];

    if (!isSearchPerformed) {
      results = filterByTab(results, activeTab);
    }

    results.sort((a, b) => {
      if (sortBy === "issuedDate") {
        const dateA = new Date(a.issuedDate);
        const dateB = new Date(b.issuedDate);
        return sortOrder === "desc"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      }
      return 0;
    });

    setSearchResults(results);
  }, [sortBy, sortOrder, isSearchPerformed, activeTab]);

 
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearchPerformed(true);

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

    const tabFiltered = filterByTab(filtered, activeTab);

    tabFiltered.sort((a, b) => {
      if (sortBy === "issuedDate") {
        const dateA = new Date(a.issuedDate);
        const dateB = new Date(b.issuedDate);
        return sortOrder === "desc"
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      }
      return 0;
    });

    setSearchResults(tabFiltered);
  };

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Update states based on input name
    switch (name) {
      case "keyword":
        setKeyword(value);
        break;
      case "search-type":
        setSearchType(value as SearchType);
        break;
      case "search-in":
        setSearchIn(value as SearchIn);
        break;
      case "fromDate":
        setFromDate(value);
        break;
      case "toDate":
        setToDate(value);
        break;
      case "sortBy":
        setSortBy(value as SortBy);
        break;
      case "sortOrder":
        setSortOrder(value as SortOrder);
        break;
    }

    // Reset to initial state if all filters are cleared
    const isDefaultState =
      (!value && name !== "keyword" && !keyword) ||
      (name === "keyword" &&
        value === "" &&
        searchType === DEFAULT_SEARCH_TYPE &&
        searchIn === DEFAULT_SEARCH_IN &&
        !fromDate &&
        !toDate &&
        sortBy === DEFAULT_SORT_BY &&
        sortOrder === DEFAULT_SORT_ORDER);

    if (isDefaultState) {
      setIsSearchPerformed(false);
      setKeyword("");
      setSearchType(DEFAULT_SEARCH_TYPE);
      setSearchIn(DEFAULT_SEARCH_IN);
      setFromDate("");
      setToDate("");
      setSortBy(DEFAULT_SORT_BY);
      setSortOrder(DEFAULT_SORT_ORDER);
    }
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsSearchPerformed(false);
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
                  name="keyword"
                  onChange={handleFilterChange}
                />
              </div>
              <div className="search-opt">
                <label className="ratio-search">
                  <input
                    type="radio"
                    name="search-type"
                    checked={searchType === "exact"}
                    value="exact"
                    onChange={handleFilterChange}
                  />
                  Chính xác cụm từ trên
                </label>
                <label className="ratio-search">
                  <input
                    type="radio"
                    name="search-type"
                    checked={searchType === "allWords"}
                    value="allWords"
                    onChange={handleFilterChange}
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
                  value="all"
                  onChange={handleFilterChange}
                />
                Tất cả
              </label>
              <label className="otp">
                <input
                  type="radio"
                  name="search-in"
                  className="radio"
                  checked={searchIn === "title"}
                  value="title"
                  onChange={handleFilterChange}
                />
                Tiêu đề
              </label>
              <label className="otp">
                <input
                  type="radio"
                  name="search-in"
                  className="radio"
                  checked={searchIn === "summary"}
                  value="summary"
                  onChange={handleFilterChange}
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
                name="fromDate"
                onChange={handleFilterChange}
              />
            </div>
            <div className="searchDate-input">
              Đến ngày
              <input
                type="date"
                value={toDate}
                name="toDate"
                onChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="short-option">
            <span>Sắp xếp theo</span>
            <select value={sortBy} name="sortBy" onChange={handleFilterChange}>
              <option value="issuedDate">Ngày ban hành</option>
              <option>Loại văn bản</option>
              <option>Kết quả chính xác</option>
              <option>Ngày hiệu lực</option>
              <option>Ngày hết hiệu lực</option>
            </select>
            <select
              value={sortOrder}
              name="sortOrder"
              onChange={handleFilterChange}
            >
              <option value="desc">Mới đến cũ</option>
              <option value="asc">Cũ đến mới</option>
            </select>
            <button type="submit">Tìm kiếm</button>
            <div className="tooltip-container">
              <img className="question-icon" src={questionIcon} />
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

      {searchResults.length > 0 && (
        <>
          {isSearchPerformed ? (
            <div className="search-result-tab tab">
              <div className="search-result-content tab-content">
                Kết quả tìm kiếm:{" "}
                <span className="search-result-value">
                  Tìm thấy {searchResults.length} văn bản
                </span>
              </div>
            </div>
          ) : (
            <div className="navigation-container">
              <button
                className={`nav-button ${activeTab === "new" ? "active" : ""}`}
                onClick={() => handleTabChange("new")}
              >
                Văn bản mới
              </button>
              <button
                className={`nav-button ${
                  activeTab === "effective" ? "active" : ""
                }`}
                onClick={() => handleTabChange("effective")}
              >
                Văn bản có hiệu lực trong tháng
              </button>
              <button
                className={`nav-button ${
                  activeTab === "expired" ? "active" : ""
                }`}
                onClick={() => handleTabChange("expired")}
              >
                Văn bản hết hiệu lực trong tháng
              </button>
            </div>
          )}

          <div className="listLawSection">
            <div className="pagnition">
              <div className="pagnition-wrapper"></div>
            </div>
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
                          <a href="#" className="opt opt1">
                            Bản PDF
                          </a>
                          <a href="#" className="opt opt2">
                            VB liên quan
                          </a>
                          <a href="#" className="opt opt3">
                            Thuộc tính
                          </a>
                          <a href="#" className="opt opt4">
                            Lược đồ
                          </a>
                          <a href="#" className="opt opt5">
                            Tải về
                          </a>
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
          </div>
        </>
      )}
    </>
  );
};

export default SearchBox;
