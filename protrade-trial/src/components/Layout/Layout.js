import "./layout.css";
import LayoutLeft from "../LayoutLeft/LayoutLeft";
import LayoutMiddle from "../LayoutMiddle/LayoutMiddle";
import LayoutRight from "../LayoutRight/LayoutRight";
import { useState ,memo} from "react";

function Layout({ isSuccess }) {
  const [isShow, setIsShow] = useState(true);
  const handleShow = (chilData) => {
    setIsShow(chilData);
  };
  return (
    <div className="layout-main">
      <LayoutLeft />
      <LayoutMiddle />
      <LayoutRight
        handleShow={handleShow}
        isShow={isShow}
        isSuccess={isSuccess}
      />
      {/* {isSuccess.show && (
        <div className={isSuccess.success ? "toast-success" : "toast-error"}>
          {isSuccess.success ? (
            <>
              <p className="toast-title success">Đặt lệnh thành công</p>
              <p>Lệnh của quý khách đã được đặt thành công, vui lòng kiểm tra Sổ lệnh</p>
            </>
          ) : (
            <>
            <p className="toast-title error">Đặt lệnh không thành công </p>
            <p>Không đủ sức mua vị thế (FDS-080)</p>
          </>
          )}
        </div>
      )} */}
    </div>
  );
}

export default memo(Layout);
