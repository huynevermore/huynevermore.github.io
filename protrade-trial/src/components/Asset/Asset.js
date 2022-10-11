import "./asset.css";
import { HiOutlineRefresh, HiMinus } from "react-icons/hi";
import { FaExternalLinkAlt, FaMinus } from "react-icons/fa";

function Asset({ handleShowOrderBook, show }) {
  return (
    <div className="assets">
      <div className="assets-header">
        <span style={{ fontSize: "13px" }}>Thông tin tài sản</span>
        <div className="assets-action">
          <span>
            <HiOutlineRefresh
              style={{ fontSize: "18px", fontWeight: "700", margin: "0 4px" }}
            />
          </span>
          <span>
            <FaExternalLinkAlt
              style={{ fontSize: "14px", fontWeight: "700", margin: "0 4px" }}
            />
          </span>
          <span
            onClick={() => {
              handleShowOrderBook(!show);
            }}
          >
            <FaMinus
              style={{ fontSize: "14px", fontWeight: "700", margin: "0 6px" }}
            />
          </span>
        </div>
      </div>

      <div className="assets-content">
        <div className="net-worth">
          <span>Tài sản ròng</span>
          <span>40,000,000</span>
        </div>
        <div className="margin-blance">
          <span>Số dư ký quỹ</span>
          <span>7,374,000</span>
        </div>
        <div className="tax-fees">
          <span>Thuế và phí</span>
          <span>0</span>
        </div>
      </div>
    </div>
  );
}

export default Asset;
