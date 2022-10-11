import "./header.css";
import logo from "../../assets/imgs/logo.svg";
import { FaTrophy, FaUser, FaCaretDown, FaSignOutAlt } from "react-icons/fa";
import Dialog from "../Dialog/Dialog";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useMemo, memo, useCallback } from "react";
import axios from "axios";

function Header({ decode }) {
  const [isDialoging, setIsDialoging] = useState(false);
  const [dateTime, setDateTime] = useState(getDateTime);
  const navigate = useNavigate();
  function getDateTime() {
    let date =
      new Date().getFullYear() +
      "/" +
      (new Date().getMonth() + 1) +
      "/" +
      new Date().getDate();
    let time =
      new Date().getHours() +
      ":" +
      new Date().getMinutes() +
      ":" +
      new Date().getSeconds();

    return {
      date,
      time,
    };
  }
  const logOut = () => {
    navigate("/");
    localStorage.removeItem("auth");
    localStorage.removeItem("name");
  };

  useEffect(() => {
    let idIterval = setInterval(() => {
      setDateTime(getDateTime);
    }, 1000);
    return () => {
      clearInterval(idIterval);
    };
  }, []);
  const callbackFunction = useCallback((childData) => {
    setIsDialoging(childData);
  }, []);

  return (
    <div className="header">
      <div id="logo"></div>
      <div id="vnds-clock">
        <span className="digital-clock" id="clock-time">
          {dateTime.time}
        </span>
        <span className="date" id="clock-date">
          {dateTime.date}
        </span>
      </div>
      <div id="horizontal-menu">
        <ul className="horizontal-menu-root">
          <li className="active">
            <a href="/trang-chu">Trang chủ</a>
          </li>
          <li className="">
            <a href="/tai-san">Tài sản</a>
          </li>
          <li className="">
            <a href="/huong-dan-su-dung">Hướng dẫn</a>
          </li>
        </ul>
      </div>
      <span id="profitloss">
        Lãi lỗ:
        <span className="number txt-gia-tc">0</span>
        <span
          className="top"
          onClick={() => {
            setIsDialoging(!isDialoging);
          }}
        >
          <FaTrophy /> Top cao thủ phái sinh
        </span>
      </span>
      <div className="menu" id="menuWrp">
        <div id="demo">BẢN TRIAL</div>
        <div className="buttons show-custody-id">
          <a
            id="goto-btn"
            href="https://myaccount.vndirect.com.vn/account-info?tab=account-register"
            target="_blank"
          >
            Nâng cấp tài khoản
          </a>
        </div>
        <div className="account-dropdown">
          <div className="account-dropdown-btn">
            <span className="btn-icon">
              <span style={{ padding: "0 8px" }}>
                <FaUser />
              </span>
              {decode ? decode.customerName : "USER NAME"}
              <span style={{ padding: "0 8px" }}>
                <FaCaretDown />
              </span>
            </span>
            <ul className="account-dropdown-list">
              <li onClick={logOut}>
                <a>
                  <span>
                    <span>
                      <FaSignOutAlt />
                    </span>
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isDialoging && <Dialog parentCallback={callbackFunction} />}
    </div>
  );
}

export default memo(Header);
