import data from '../mock/news.json';
import '../assets/css/New.css';
import { useState } from 'react';
import SidebarDocs from '../components/shared/SidebarDocs';
import SidebarMenu from '../components/shared/SidebarMenu';
import '../assets/css/Sidebar.css'

export const New = () => {
    const announcements = data.announcements;
    const dates = data.dates;

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [filtered, setFiltered] = useState(announcements.slice(0, 7));

    const handleFilter = () => {
        const dateStr = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
        const result = announcements.filter(item => item.date === dateStr);
        setFiltered(result.length > 0 ? result : []);
    }

    return (
           <div style={{ display: 'flex', padding: '10px', gap: '10px' }} className='bg-new'>
            <div style={{ width: "30%" }}>
                <SidebarMenu />
                <SidebarDocs/>
            </div>
            <div style={{ width: "70%" }}>
                <div className='box-news-top'>
                    <div className='box-news-top-c'>
                        <div className='box-map'>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <i style={{ color: '#006699' }} className="fa-solid fa-house"></i>
                                <div><a style={{textDecoration: 'none', color: '#006699'}} href="/">Trang chủ</a></div>
                                <div>»</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='box-news box-news-home'>
                    {filtered.length > 0 ? filtered.map(item => (
                        <div className='news-items' key={item.id}>
                            <p className='title' style={{ gap: '5px', padding: '7px 0' }}>
                                <a href="" style={{ color: '#006699', textDecoration: 'none' }}>
                                    {item.title}
                                </a>
                                <span style={{ color: '#999999', marginLeft: '5px' }}>({item.date})</span>
                            </p>
                            <div className='description'>{item.description}</div>
                        </div>
                    )) : <div>Không có tin nào cho ngày này.</div>}
                </div>
                <div className='filter'>
                    <span>Các tin đã đưa ngày: </span>
                    <select value={day} onChange={e => setDay(e.target.value)}>
                        <option value="">Ngày</option>
                        {dates.days.map(day => (
                            <option key={day} value={String(day).padStart(2, '0')}>{day}</option>
                        ))}
                    </select>
                    <select value={month} onChange={e => setMonth(e.target.value)}>
                        <option value="">Tháng</option>
                        {dates.months.map(month => (
                            <option key={month} value={String(month).padStart(2, '0')}>{month}</option>
                        ))}
                    </select>
                    <select value={year} onChange={e => setYear(e.target.value)}>
                        <option value="">Năm</option>
                        {dates.years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <input type="button" onClick={handleFilter} value="Xem" />
                </div>
            </div>
        </div>
    );
};