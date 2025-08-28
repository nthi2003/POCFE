import "../../assets/css/Window.css";

interface FloatWindowProps {
  data: {
    title: string;
    description: string;
    code: string;
    issue_date: string;
    document_type: string;
    signer: string;
    scope: string;
    publication_date?: string;
    field: string;
    sub_field: string;
    authority: string;
    position: string;
    validity_status: string;
    effective_date: string;
    expiration_reason?: string;
    expiration_date?: string;
    partially_expired_section?: string;
    application_date?: string;
  };
  position: { top: number; left: number };
}

const FloatWindow = ({ data, position }: FloatWindowProps) => {
  return (
    <div
      className="window"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        zIndex: 1000,
      }}
    >
      <div className="header-wrapper">
        <span className="header-content">{data.title}</span>
      </div>

      <div className="window-container">
        <table className="document-table">
          <tr>
            <td className="subheader" colSpan={4}>
              {data.description}
            </td>
          </tr>
          <tr>
            <td className="label-cell">Số ký hiệu</td>
            <td className="value">{data.code}</td>
            <td className="label-cell">Ngày ban hành</td>
            <td className="value">{data.issue_date}</td>
          </tr>
          <tr>
            <td className="label-cell">Loại văn bản</td>
            <td>
              <span className="blue-link value">{data.document_type}</span>
            </td>
            <td className="label-cell">Người ký</td>
            <td className="value">{data.signer}</td>
          </tr>
          <tr>
            <td className="label-cell">Phạm vi</td>
            <td className="value">{data.scope}</td>
            <td className="label-cell">Ngày đăng công báo</td>
            <td className="value">{data.publication_date || "..."}</td>
          </tr>
          <tr>
            <td className="label-cell">Ngành</td>
            <td className="value">{data.field}</td>
            <td className="label-cell">Lĩnh vực</td>
            <td className="value">{data.sub_field}</td>
          </tr>
          <tr>
            <td className="label-cell">Cơ quan ban hành/ Chức danh/ Người ký</td>
            <td>
              <span className="blue-link value">{data.authority}</span>
            </td>
            <td className="label-cell">{data.position}</td>
            <td className="value">{data.signer}</td>
          </tr>
          <tr>
            <td className="subheader" colSpan={4}>
              Hiệu lực văn bản
            </td>
          </tr>
          <tr>
            <td className="label-cell">Tình trạng hiệu lực</td>
            <td className="value">{data.validity_status}</td>
            <td className="label-cell">Ngày có hiệu lực</td>
            <td className="value">{data.effective_date}</td>
          </tr>
          <tr>
            <td className="label-cell">Lí do hết hiệu lực</td>
            <td className="value">{data.expiration_reason || "..."}</td>
            <td className="label-cell">Ngày hết hiệu lực</td>
            <td className="value">{data.expiration_date || "..."}</td>
          </tr>
          <tr>
            <td className="label-cell">Phần hết hiệu lực</td>
            <td className="value">{data.partially_expired_section || "..."}</td>
            <td className="label-cell">Ngày áp dụng</td>
            <td className="value">{data.application_date || "..."}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default FloatWindow;