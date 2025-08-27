
import "../../assets/css/Footer.css";
import ncaLogo from "../../assets/img/nca_cert.jpg";

const Footer = () => {
  return (
    <div id="footer">
      <div className="content">
        <div className="footer-simple">
          <div className="footer-title">
            <p>CƠ SỞ DỮ LIỆU QUỐC GIA VỀ VĂN BẢN PHÁP LUẬT</p>
          </div>
          
          <div className="footer-certification">
            <div className="cert-container">
              <div className="nca-logo">
                <img src={ncaLogo} alt="NCA Certification" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
