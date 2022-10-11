import "./orderbook.css";
import { Tabs, Tab, Nav } from "react-bootstrap";
import {
  HiOutlineRefresh,
  HiMinus,
  HiMinusCircle,
  HiCheckCircle,
} from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaRegTimesCircle, FaHourglassStart, FaTrashAlt } from "react-icons/fa";
import { useState, useEffect, memo } from "react";
import axios from "axios";
import ReactTooltip from "react-tooltip";

function OrderBook({ handleShowOrderBook, show, isSuccess }) {
  const name = localStorage.getItem("name");
  const [dataOrder, setDataOrder] = useState([]);
  const [selectItem, setSelectItem] = useState();
  const handleCancel = (id) => {
    axios({
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      url: "https://dertrial-api.vndirect.com.vn/demotrade/orders",
      data: { userName: name, orderID: id },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          setDataOrder((prev) => {
            const nextData = prev.map((item) => {
              if (item.orderID + "" === id) {
                return { ...item, status: "Cancelled" };
              }
              return item;
            });
            return nextData;
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(
        `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${name}`
      )
      .then((res) => setDataOrder(res.data));
  }, [isSuccess, name]);

  const handleRefresh = () => {
    axios
      .get(
        `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${name}`
      )
      .then((res) => setDataOrder(res.data));
  };
  return (
    <div id="order-box-container">
      <Tab.Container defaultActiveKey="order-day">
        <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="order-day">Lệnh trong ngày</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="conditional-order">Lệnh điều kiên</Nav.Link>
          </Nav.Item>
          <div className="icon-order-box">
            <span style={{ margin: "0 8px" }} onClick={handleRefresh}>
              <HiOutlineRefresh />
            </span>
            <span
              onClick={() => {
                handleShowOrderBook(!show);
              }}
              style={{ marginRight: "8px" }}
            >
              <HiMinus />
            </span>
          </div>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="order-day" className="tab-order-day">
            <div className="command-list">
              <div></div>
              <div>Lệnh</div>
              <div>Mã</div>
              <div>KL Khớp</div>
              <div>Giá</div>
              <div>TT</div>
            </div>
            {dataOrder.length > 0 ? (
              dataOrder.map((item) => (
                <div className="inactive" key={item.orderID}>
                  <div
                    className="checkbox"
                    style={{ padding: "6px", height: "32px" }}
                  >
                    {item.status === "New" || item.status === "PendingNew" ? (
                      <input type="checkbox" id="" name="" placeholder="" />
                    ) : (
                      <div></div>
                    )}
                  </div>

                  <div className={item.side === "NB" ? "txt-green" : "txt-red"}>
                    {item.side === "NB" ? "Mua" : "Bán"}
                  </div>
                  <div>{item.symbol}</div>
                  <div className="tc">
                    {item.matchedQuantity !== 0 ? (
                      item.quantity
                    ) : (
                      <span>
                        <span style={{ color: "#f8a01b" }}>
                          {item.matchedQuantity}
                        </span>{" "}
                        /{item.quantity}
                      </span>
                    )}
                  </div>
                  <div>{item.orderType}</div>

                  {selectItem !== item ? (
                    <div className="d-flex justify-content-between">
                      {item.status === "New" || item.status === "PendingNew" ? (
                        <span style={{ color: "#f8a01b" }}>
                          <FaHourglassStart
                            data-tip="Đã lên sàn"
                            data-for="hour"
                          />
                        </span>
                      ) : (
                        <></>
                      )}
                      {item.status === "Filled" ? (
                        <span
                          className="txt-green f-15"
                          data-tip="Khớp"
                          data-for="check"
                        >
                          <HiCheckCircle />
                        </span>
                      ) : (
                        <></>
                      )}
                      {item.status === "Cancelled" ? (
                        <span style={{ color: "#af449c" }}>
                          <FaTrashAlt
                            data-tip="Hủy thành công"
                            data-for="trash"
                          />
                        </span>
                      ) : (
                        <></>
                      )}
                      {item.status === "Rejected" ? (
                        <span className="txt-red f-15">
                          <HiMinusCircle
                            data-tip="Hệ thống Demo không hỗ trợ đặt lệnh giá này (FDS-079)"
                            data-for="reject"
                          />
                        </span>
                      ) : (
                        <></>
                      )}

                      {item.status === "New" || item.status === "PendingNew" ? (
                        <span
                          className="txt-red"
                          style={{ marginRight: "4px", cursor: "pointer" }}
                          onClick={() => {
                            setSelectItem(item);
                          }}
                        >
                          <FaRegTimesCircle />
                        </span>
                      ) : (
                        <></>
                      )}

                      <ReactTooltip
                        place="top"
                        type="light"
                        id="hour"
                        data-id="hour"
                        className="react-tooltip"
                      ></ReactTooltip>
                      <ReactTooltip
                        place="top"
                        type="light"
                        id="check"
                        data-id="check"
                        className="react-tooltip"
                      ></ReactTooltip>
                      <ReactTooltip
                        place="top"
                        type="light"
                        id="trash"
                        data-id="trash"
                        className="react-tooltip"
                      ></ReactTooltip>
                      <ReactTooltip
                        place="top"
                        type="light"
                        id="reject"
                        data-id="reject"
                        className="react-tooltip"
                      ></ReactTooltip>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-end ">
                      <ToastContainer />
                      <button
                        className="btn-yes"
                        onClick={() => {
                          handleCancel(item.orderID + "");
                          toast("Hủy lệnh thành công", {
                            hideProgressBar: true,
                          });
                        }}
                      >
                        Hủy
                      </button>
                      <button
                        className="btn-no"
                        onClick={() => {
                          setSelectItem();
                        }}
                      >
                        Không
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Chưa có lệnh nào trong sổ lệnh</p>
            )}
          </Tab.Pane>
          <Tab.Pane
            eventKey="conditional-order"
            className="tab-conditional-order"
          >
            <div className="command-list">
              <div>Lệnh</div>
              <div>Mã</div>
              <div>Giá kích hoạt</div>
              <div>KL</div>
              <div>Giá</div>
              <div>Ngày hết hạn</div>
              <div>TT</div>
              <div></div>
            </div>
            <p>Chưa có lệnh nào trong sổ lệnh</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default memo(OrderBook);
