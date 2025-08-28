import type React from "react"
import { mockDocuments } from "../../mock/DocumentItem.json"

const SidebarDocs: React.FC = () => {
  return (
    <div className="sidebar-docs">
      <div className="box-title-news">
        <a href="https://vbpl.vn/pages/vanbanmoi.aspx">Văn bản mới</a>
      </div>
      <div className="content-news">
        <ul>
          {mockDocuments.filter(doc => doc.categoryId === "1").map((doc) => (
            <li key={doc.id}>
              <i className="fa fa-file-o" aria-hidden="true"></i>
              <a href="#" title={doc.title + " - " + doc.description}>
                {doc.title + " - " + doc.description}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SidebarDocs
