import { useState, useRef } from "react";
import "../../assets/css/NavSearch.css";
import FloatWindow from "./FloatWindow";
import mockdata from "../../mock/floatWindow-mockdata.json";

const SearchRightSidebar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  const handleMouseEnter = (itemCode: string, event: React.MouseEvent<HTMLLIElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const floatWindowWidth = 600; 
    const offset = 10; 
    setHoveredItem(itemCode);
    setPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX - floatWindowWidth - offset,
    });
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const frequentlyViewed = [
    "Thông tư 39/2016/TT-NHNN",
    "Luật 58/2014/QH13",
    "Nghị định 01/2017/NĐ-CP",
    "Thông tư 22/2019/TT-NHNN",
    "Quyết định 1895/1997/QĐ-BYT",
    "Luật 16/1999/QH10",
    "Nghị định 07/BGDĐT-VBHN",
    "Bộ luật 91/2015/QH13",
    "Nghị quyết 1211/2016/UBTVQH13",
    "Nghị định 11/2020/NĐ-CP",
  ];

  const ofInterest = [
    "Nghị định 52/2015/NĐ-CP",
    "Luật 62/2014/QH13",
    "Thông tư 84/2014/TT-BTC",
    "Thông tư 08/2013/TT-BTTTT",
    "Thông tư 14/2012/TT-BVHTTDL",
  ];

  const findDocument = (code: string) =>
    mockdata.documents.find((doc) => doc.code === code || doc.title === code);

  return (
    <>
      {/* section */}
      <div className="box-content">
        <h4 className="label">
          <span>Văn bản được xem nhiều</span>
        </h4>
        <ul className="mid nav">
          {frequentlyViewed.map((item) => (
            <li
              key={item}
              className="mid-nav-item"
              ref={(el) => {
                itemRefs.current[item] = el;
              }}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="nav-item">
                <a className="mid-hightlight">{item}</a>
              </span>
              {hoveredItem === item && findDocument(item) && (
                <FloatWindow data={findDocument(item)!} position={position} />
              )}
            </li>
          ))}
        </ul>
        <div className="nav-footer-content"></div>
      </div>
      {/* section */}
      <div className="box-content">
        <h4 className="label">
          <span>Văn bản được quan tâm</span>
        </h4>
        <ul className="mid nav">
          {ofInterest.map((item) => (
            <li
              key={item}
              className="mid-nav-item"
              ref={(el) => {
                itemRefs.current[item] = el;
              }}
              onMouseEnter={(e) => handleMouseEnter(item, e)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="nav-item">
                <a className="mid-hightlight">{item}</a>
              </span>
              {hoveredItem === item && findDocument(item) && (
                <FloatWindow data={findDocument(item)!} position={position} />
              )}
            </li>
          ))}
        </ul>
        <div className="nav-footer-content"></div>
      </div>
    </>
  );
};

export default SearchRightSidebar;