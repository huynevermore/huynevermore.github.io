import "./login.css";
import axios from "axios";
import { FaInfoCircle, FaSignInAlt, FaLock } from "react-icons/fa";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrorMsg] = useState(false);

  const navigate = useNavigate();
  let data = JSON.stringify({
    username,
    password,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setErrorMsg(false);
    }, 3000);

    return () => {
      clearTimeout(id);
    };
  }, [errMsg]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const api = axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: "https://auth-api.vndirect.com.vn/v2/auth",
      data,
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/homepage");
        }
        localStorage.setItem("auth", res.data.token);
        localStorage.setItem("name", username);
      })

      .catch((error) => {
        setErrorMsg(true);
      });
  };
  return (
    <div className="login-page" >
      {errMsg && (
        <div className="toast-error">
          <p>
            Tên đăng nhập hoặc mật khẩu bạn vừa nhập chưa đúng, xin vui lòng thử
            lại. (AUTH-02) (faybd)
          </p>
        </div>
      )}

      <div className="overlay"></div>

      <div className="dialog">
        <div id="login-popup">
          <form name="login" >
            <p className="login-with-trade-acc">
              Đăng nhập với tài khoản VNDIRECT
            </p>
            <div className="form-row">
              <div className="form-field">
                <label>Tên đăng nhập:</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label>Mật khẩu:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="remember-me">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                  ></input>
                  Ghi nhớ trạng thái đăng nhập trên trình duyệt này{" "}
                  <OverlayTrigger
                    key={"top"}
                    placement={"top"}
                    overlay={
                      <Tooltip id="tooltip-top">
                        Ghi nhớ trạng thái đăng nhập giúp Quý khách không cần
                        phải login lại mỗi lần vào VNDIRECT trên trình duyệt
                        này. Để hủy trạng thái, Quý khách vui lòng Đăng xuất.
                      </Tooltip>
                    }
                  >
                    <span className="icon-info relative">
                      <FaInfoCircle />
                    </span>
                  </OverlayTrigger>
                </label>
              </div>
            </div>
            <Button className="sign-in-btn" onClick={handleSubmit}  >
              <span>
                <FaSignInAlt />
              </span>{" "}
              Đăng nhập
            </Button>
          </form>
          <hr className="login-divider" />

          <div className="register-wrp">
            <Button className="register-btn">
              <span>
                <FaLock />
              </span>{" "}
              Mở tài khoản
            </Button>
          </div>
          <p className="login-helper">
            <a
              href="https://www.vndirect.com.vn/portal/tro-giup/hoi-dap-huong-dan.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="support"
            >
              Trợ giúp
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
