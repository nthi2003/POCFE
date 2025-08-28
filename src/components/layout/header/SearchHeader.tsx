
import { useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState("");
  const [searchLocation, setSearchLocation] = useState("all");
  const [searchType, setSearchType] = useState("number");

  const handleSearch = () => {
    console.log({
      searchText,
      searchLocation,
      searchType,
    });
  };

  const handleAdvancedSearch = () => {
    console.log("Mở tìm kiếm nâng cao");
  };

  return (
    <div className="search-form-header-container ">
      <div className="search-header-form ">Tìm kiếm văn bản</div>

      <div className="search-body-form">
        {/* Input */}
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Từ khóa tìm kiếm"
          className="search-input"
        />

        {/* Tùy chọn vị trí */}
        <div className="search-options">
          <label>
            <input
              type="radio"
              name="searchLocation"
              value="all"
              checked={searchLocation === "all"}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            Tất cả từ trên
          </label>
          <label>
            <input
              type="radio"
              name="searchLocation"
              value="exact"
              checked={searchLocation === "exact"}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            Chính xác cụm từ trên
          </label>
        </div>

        {/* Tùy chọn tìm trong */}
        <div className="search-type">
          <span>Tìm trong</span>
          <label>
            <input
              type="radio"
              name="searchType"
              value="all"
              checked={searchType === "all"}
              onChange={(e) => setSearchType(e.target.value)}
            />
            Tất cả
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="title"
              checked={searchType === "title"}
              onChange={(e) => setSearchType(e.target.value)}
            />
            Số hiệu
          </label>
          <label>
            <input
              type="radio"
              name="searchType"
              value="number"
              checked={searchType === "number"}
              onChange={(e) => setSearchType(e.target.value)}
            />
            Số hiệu & trích yếu
          </label>
        </div>

        {/* Buttons */}
        <div className="search-actions">
          <button onClick={handleSearch} className="btn-search">
            TÌM KIẾM
          </button>
          <button onClick={handleAdvancedSearch} className="btn-advanced">
            Tìm kiếm nâng cao
          </button>
        </div>
      </div>
    </div>
  );
}
