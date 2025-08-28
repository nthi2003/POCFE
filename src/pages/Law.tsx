
import SidebarMenu from '../components/shared/SidebarMenu'
import SidebarDocs from '../components/shared/SidebarDocs'
import '../assets/css/Law.css'

export const Law = () => {
    return (
        <div style={{ display: 'flex', padding: '10px', gap: '10px' }} className='bg-new'>
            <div style={{ width: "30%" }}>
                <SidebarMenu />
                <SidebarDocs />
            </div>
            <div style={{ width: "70%" }}>
                <div className='box-news-top'>
                    <div className='box-news-top-c'>
                        <div className='box-map'>
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <i style={{ color: '#006699' }} className="fa-solid fa-house"></i>
                                <div><a style={{ textDecoration: 'none', color: '#006699' }} href="/">Trang chủ</a></div>
                                <div>»</div>
                                <div style={{ color: "red" }}>Tình huống pháp luật</div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="search-bar">
                    <span>Tìm kiếm</span>
                    <input type="text" placeholder="Từ khóa tìm kiếm..." />
                    <button>Tìm kiếm</button>
                </div>

            </div>
        </div>
    )
}
