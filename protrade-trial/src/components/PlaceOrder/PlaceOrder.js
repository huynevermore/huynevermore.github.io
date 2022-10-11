import "./placeorder.css";
import { IoWarning } from "react-icons/io5";
import { useState, useEffect, useContext, memo } from "react";
import { UserContext } from "../../pages/HomePage/HomePage";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let dataHD = ["VN30F2210", "VN30F2211", "VN30F2212", "VN30F2303"];
const listSuggestPrice = ["ATO", "ATC", "MTL", "MOK", "MAK"];

function PlaceOrder() {
  const [isOrdering, setIsOrdering] = useState("Lệnh thường");
  const [active, setActive] = useState(1);
  const [symbol, setSymbol] = useState("VN30F2210");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [triggerPrice, setTriggerPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [isSuggest, setIsSuggest] = useState(false);
  const [openAcc, setOpenAcc] = useState(false);

  let name = localStorage.getItem("name");
  let data = JSON.stringify({
    side: "NB",
    symbol: symbol,
    priceType: price,
    quantity: parseInt(quantity),
    price: 0,
    userName: name,
  });
  console.log(data);

  const setIsSuccess = useContext(UserContext);
  useEffect(() => {
    const idOpenAcc = setTimeout(() => {
      setOpenAcc(false);
    }, 1000);
    return () => {
      clearTimeout(idOpenAcc);
    };
  }, [openAcc]);

  const handleSell = (e) => {
    e.preventDefault();
    axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: "https://dertrial-api.vndirect.com.vn/demotrade/orders",

      data: {
        side: "NS",
        symbol: symbol,
        priceType: price,
        quantity: parseInt(quantity),
        price: 0,
        userName: name,
      },
    })
      .then((res) => {
        toast.success("Đặt lệnh thành công");

        setIsSuccess({ show: true, success: 1 });
        setQuantity(0);
        setPrice("");
      })
      .catch((error) => {
        toast.error("Đặt lệnh không thành công");
        setIsSuccess({ show: true, success: 0 });
      });
  };

  const handleBuy = (e) => {
    e.preventDefault();

    axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: "https://dertrial-api.vndirect.com.vn/demotrade/orders",

      data,
    })
      .then((res) => {
        toast.success("Đặt lệnh thành công");
        setIsSuccess({ show: true, success: 1 });
        setQuantity(0);
        setPrice("");
      })
      .catch((error) => {
        toast.error("Đặt lệnh không thành công");
        setIsSuccess({ show: true, success: 0 });
      });
  };

  const handleSelect = (item) => {
    setShow(false);
    setSymbol(item);
  };

  const handleOpenAcc = () => {
    setOpenAcc(true);
    setIsOrdering(isOrdering);
  };
  console.log("render place order");
  return (
    <div id="placeorder">
      <ToastContainer />
      {openAcc && (
        <div className="placeorder-top txt-red">
          <span
            className="txt-red"
            style={{
              lineHeight: "50px",
              fontSize: "18px",
              marginRight: "4px",
            }}
          >
            <IoWarning />
          </span>
          <span
            style={{
              fontSize: "13px",
              marginTop: "10px",
              lineHeight: "50px",
            }}
          >
            Mở tài khoản tại VNDirect để sử dụng tính năng này
          </span>
        </div>
      )}
      <div className="place-form">
        <div className="type">
          <ul>
            <li>
              <input
                type="radio"
                id="order-normal"
                name="order"
                checked={isOrdering === "Lệnh thường"}
                onChange={() => {
                  setIsOrdering("Lệnh thường");
                }}
              />
              <label htmlFor="order-normal">Lệnh thường</label>
            </li>
            <li>
              <input
                type="radio"
                id="order-stop"
                name="order"
                checked={isOrdering === "Lệnh Stop"}
                onChange={() => {
                  setIsOrdering("Lệnh Stop");
                }}
              />
              <label htmlFor="order-stop">Lệnh Stop</label>
            </li>
            <li>
              <input
                onClick={handleOpenAcc}
                type="radio"
                id="order-trailing"
                name="order"
              />
              <label onClick={handleOpenAcc}>Lệnh trailing</label>
            </li>
            <li>
              <input
                onClick={handleOpenAcc}
                type="radio"
                id="order-oso"
                name="order"
              />
              <label onClick={handleOpenAcc}>Lệnh OSO</label>
            </li>
          </ul>
        </div>
        {isOrdering === "Lệnh thường" ? (
          <div>
            <div className="row symbol">
              <label htmlFor="symbol">Mã HĐTL: </label>
              <input
                type="text"
                placeholder="Mã"
                value={symbol}
                onChange={(e) => {
                  setShow(false);
                  setSymbol(e.target.value);
                }}
                onFocus={() => {
                  setShow(true);
                  setSymbol("");
                }}
              ></input>
              {show && (
                <div className="suggestion">
                  <ul>
                    {dataHD.map((item, key) => (
                      <li
                        key={key}
                        onClick={() => {
                          handleSelect(item);
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="row price1">
              <label>Giá đặt: </label>
              <input
                type="text"
                id="order-price-id"
                placeholder="Giá"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onFocus={() => {
                  setIsSuggest(true);
                }}
                onBlur={() => {
                  setIsSuggest(false);
                }}
              />
              {isSuggest && (
                <div
                  style={{
                    position: "absolute",
                    background: "#544e4e",
                    zIndex: "99999",
                    right: "60px",
                    top: "38px",
                    borderRadius: "3px",
                    width: "235px",
                  }}
                >
                  <ul className="suggest-price">
                    {listSuggestPrice.map((item, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => {
                          setPrice(item);
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="row quantity">
              <label>Khối lượng: </label>
              <input
                type="text"
                placeholder="KL"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="row button">
              <button
                className="buy"
                onClick={quantity !== 0 && price !== "" ? handleBuy : null}
              >
                MUA
              </button>
              <button
                className="sell"
                onClick={quantity !== 0 && price !== "" ? handleSell : null}
              >
                BÁN
              </button>
              <div className="save-order">
                <input type="checkbox" style={{ margin: "0 4px" }} />
                <span>Lưu lệnh</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="row symbol">
              <label>Mã HĐTL: </label>
              <input
                type="text"
                id="symbol"
                placeholder="Mã"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
              ></input>
            </div>
            <div className="row price">
              <label>Giá đặt: </label>
              <input
                type="text"
                id="order-price-id"
                placeholder="Giá"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="row quantity">
              <label>Khối lượng: </label>
              <input
                type="text"
                placeholder="KL"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="row d-flex">
              <label>Khi giá khớp</label>
              <div className="condition">
                <button
                  onClick={() => {
                    setActive(1);
                  }}
                  className={`btn-price-match ${
                    active === 1 && `btn-price-match-active`
                  }`}
                >
                  ≤
                </button>
                <button
                  onClick={() => {
                    setActive(2);
                  }}
                  className={`btn-price-match ${
                    active === 2 && `btn-price-match-active`
                  }`}
                >
                  ≥
                </button>
              </div>
              <div className="trigger-price-wrapper">
                <input
                  type="text"
                  placeholder="Giá kích hoạt"
                  value={triggerPrice}
                  onChange={(e) => setTriggerPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <label>Ngày hết hạn</label>
              <input type="date" />
            </div>

            <div className="row button">
              <button className="buy">MUA</button>
              <button className="sell">BÁN</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(PlaceOrder);
