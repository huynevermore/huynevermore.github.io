import "./dialog.css";
import logo from "../../assets/imgs/top-derivative.bb0daf79.png";
import top1 from "../../assets/imgs/1st.png";
import top2 from "../../assets/imgs/2nd.png";
import top3 from "../../assets/imgs/3rd.png";
import { VscClose } from "react-icons/vsc";
import { FaArrowCircleUp } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState, memo } from "react";

function Dialog({ parentCallback }) {
  const [rankList, setRankList] = useState([]);

  const formatNumber = (e) =>
    e.toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  useEffect(() => {
    axios
      .get("https://dertrial-api.vndirect.com.vn/demotrade/assets")
      .then((res) =>
        setRankList(res.data.sort((a, b) => b.netAssetValue - a.netAssetValue))
      )
      .catch((error) => console.log(error));
    let timer = setInterval(() => {
      axios
        .get("https://dertrial-api.vndirect.com.vn/demotrade/assets")
        .then((res) =>
          setRankList(
            res.data.sort((a, b) => b.netAssetValue - a.netAssetValue)
          )
        );
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  console.log(rankList)
  return (
    <div className="dialog-wrapper">
      <div className="overlay"></div>
      <div className="dialog">
        <span
          className="close"
          onClick={() => {
            parentCallback(false);
          }}
        >
          <VscClose />
        </span>
        <div id="top-popup">
          <div className="top-month">
            <div className="top-header">
              <img src={logo} height="130" />
              <div className="title">BẢNG XẾP HẠNG THÁNG</div>
            </div>
            <div className="top-box">
              <div className="top-box-header">
                <span style={{ paddingLeft: "25px" }}>CAO THỦ PHÁI SINH</span>
                <span className="unit">Đơn vị: VND</span>
                <span className="nav">
                  <FaArrowCircleUp style={{ marginRight: "4px" }} />
                  NAV
                </span>
              </div>

              {rankList.slice(0, 1).map((item) => (
                <div className="top item" key={item._id}>
                  <span
                    className="icon"
                    style={{ top: "-19px", left: "-23px" }}
                  >
                    <img src={top1} height="50" />
                  </span>

                  <span
                    className="username"
                    style={{ paddingLeft: "30px", color: "rgb(255, 170, 0)" }}
                  >
                    {item.username}
                  </span>

                  <span
                    className="number"
                    style={{ color: "rgb(255, 170, 0)" }}
                  >
                    {formatNumber(item.netAssetValue + item.totalPnlAmount)}
                  </span>
                </div>
              ))}
              {rankList.slice(1, 2).map((item) => (
                <div className="top item" key={item._id}>
                  <span className="icon">
                    <img src={top2} height="40" />
                  </span>

                  <span
                    className="username"
                    style={{ paddingLeft: "30px", color: "white" }}
                  >
                    {item.username}
                  </span>

                  <span className="number" style={{ color: "white" }}>
                    {formatNumber(item.netAssetValue + item.totalPnlAmount)}
                  </span>
                </div>
              ))}
              {rankList.slice(2, 3).map((item) => (
                <div className="top item" key={item._id}>
                  <span className="icon">
                    <img src={top3} height="40" />
                  </span>

                  <span
                    className="username"
                    style={{ paddingLeft: "30px", color: "white" }}
                  >
                    {item.username}
                  </span>

                  <span className="number" style={{ color: "white" }}>
                    {formatNumber(item.netAssetValue + item.totalPnlAmount)}
                  </span>
                </div>
              ))}

              <div className="others">
                {rankList.slice(3, 10).map((item) => (
                  <div className="item" key={item._id}>
                    <span className="username">{item.username}</span>
                    <span className="number">
                      {formatNumber(item.netAssetValue + item.totalPnlAmount)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="join">
              <a href="#">THAM GIA NGAY TẠI ĐÂY</a>
            </div>
          </div>
          <div className="top-week">
            <div className="title">BẢNG XẾP HẠNG TUẦN</div>
            <div className="notice">
              (Từ 8h00 thứ 2 đến 15H00 thứ 6 hàng tuần)
            </div>
            <div className="top-box">
              <div className="top-box-header">
                <span style={{ paddingLeft: "25px" }}>CAO THỦ PHÁI SINH</span>
                <span className="unit">Đơn vị: VND</span>
                <span className="nav">
                  <FaArrowCircleUp style={{ marginRight: "4px" }} />
                  NAV
                </span>
              </div>
              {rankList.slice(0, 3).map((item, index) => (
                <div className={`top top${index + 1} item`} key={item._id}>
                  <span className="username" style={{ paddingLeft: " 10px" }}>
                    {item.username}
                  </span>
                  <span className="number" style={{ paddingRight: "20px" }}>
                    {formatNumber(item.netAssetValue + item.totalPnlAmount)}
                  </span>
                </div>
              ))}

              <div className="others">
                {rankList.slice(3, 20).map((item) => (
                  <div className="item" key={item._id}>
                    <span
                      className="username"
                      style={{ color: "rgb(51, 51, 51)" }}
                    >
                      {item.username}
                    </span>
                    <span
                      className="number"
                      style={{ color: "rgb(100, 100, 100)" }}
                    >
                      {formatNumber(item.netAssetValue + item.totalPnlAmount)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Dialog);
