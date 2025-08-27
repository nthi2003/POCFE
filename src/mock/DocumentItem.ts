export interface NavHeader {
  id: string;
  title: string;
  color : string;
  url : string
  
}
export const mockNavHeaders: NavHeader[] = [
  { id: '1', title: 'Giới thiệu', color: '#C48A39', url: 'https://vbpl.vn/VBQPPL_UserControls/Publishing_portal/Resources/imagesV2/gioithieu.png' },
  { id: '2', title: 'Văn bản pháp luật Trung ương', color: '#690C2A', url: 'https://vbpl.vn/VBQPPL_UserControls/Publishing_portal/Resources/imagesV2/tw.png' },
  { id: '3', title: 'Văn bản pháp luật địa phương', color: '#c9661fff', url: 'https://vbpl.vn/VBQPPL_UserControls/Publishing_portal/Resources/imagesV2/diaphuong.png' }
];
export interface Title {
  id: string;
  text: string;
  color : string;
}

export const mockTitles: Title[] = [
  { id: '1', text: 'Văn bản mới' , color : "#006699" },
  { id: '2', text: 'Tin tức' , color : "purple" },
  { id: '3', text: 'Tình huống pháp luật' , color : "purple" }
];

export interface DocumentItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  categoryId: string;
}

export const mockDocuments: DocumentItem[] = [
  {
    id: '1',
    icon: '/img/icon1.png',
    title: 'Thông tư 68/2025/TT-BCA',
    description:
      'Sửa đổi, bổ sung một số điều của Thông tư số 31/2023/TT-BCA ngày 20/7/2023 của Bộ trưởng Bộ Công an quy định về mẫu hộ chiếu, mẫu giấy thông hành và các biểu mẫu liên quan',
    categoryId: '1'
  },
  {
    id: '2',
    icon: '/img/icon2.png',
    title: 'Quyết định 39/2025/QĐ-UBND',
    description:
      'Ban hành Định mức kinh tế - kỹ thuật để xây dựng, điều chỉnh, bổ sung bảng giá đất; định giá đất cụ thể trên địa bàn tỉnh Kon Tum',
    categoryId: '1'
  },
  {
    id: '3',
    icon: '/img/icon3.png',
    title: 'Quyết định 63/2025/QĐ-UBND',
    description:
      'Quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Trung tâm Phục vụ hành chính công',
    categoryId: '1'
  },
  {
    id: '4',
    icon: '/img/icon4.png',
    title: 'Thông tư 52/2025/TT-BNNMT',
    description:
      'Quy định kỹ thuật quan trắc tài nguyên nước và cảnh báo, dự báo nguồn nước',
    categoryId: '1'
  },

  {
    id: '5',
    icon: '/img/icon5.png',
    title:
      'Thông cáo báo chí văn bản quy phạm pháp luật do Chính phủ, Thủ tướng Chính phủ ban hành trong tháng 8 năm 2021',
    description: '',
    categoryId: '2'
  },
  {
    id: '6',
    icon: '/img/icon6.png',
    title:
      'Thông cáo báo chí văn bản quy phạm pháp luật do Chính phủ, Thủ tướng Chính phủ ban hành trong tháng 9 năm 2020',
    description: '',
    categoryId: '2'
  },
  {
    id: '7',
    icon: '/img/icon7.png',
    title:
      'Thông cáo báo chí văn bản quy phạm pháp luật do Chính phủ, Thủ tướng Chính phủ ban hành trong tháng 8 năm 2020',
    description: '',
    categoryId: '2'
  },
  {
    id: '8',
    icon: '/img/icon8.png',
    title:
      'Thông cáo báo chí văn bản quy phạm pháp luật do Chính phủ, Thủ tướng Chính phủ ban hành trong tháng 7 năm 2020',
    description: '',
    categoryId: '2'
  },
  {
    id: '9',
    icon: '/img/icon9.png',
    title:
      'Thông cáo báo chí văn bản quy phạm pháp luật do Chính phủ, Thủ tướng Chính phủ ban hành trong tháng 6 năm 2020',
    description: '',
    categoryId: '2'
  }

];
