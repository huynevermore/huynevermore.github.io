import "./layoutright.css";
import { Nav, Tab } from "react-bootstrap";
import OrderBook from "../OrderBook/OrderBook";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import Portfolio from "../Portfolio/Portfolio";
import Asset from "../Asset/Asset";

import { useState,memo } from "react";

let footer = [
  { key: "first", name: "Sổ lệnh" },
  { key: "second", name: "Danh mục" },
  { key: "3rd", name: "Tài sản" },
];
function LayoutRight({ handleShow, isShow, isSuccess}) {
  const [active, setActive] = useState(null);
  const handleActive = (item) => {
    setActive(item);
    handleShow(true);
  };
  return (
    <Tab.Container defaultActiveKey="first">
      {isShow && (
        <div className="layout-right-content flex-column">
          <div className="layout-right-content-top">
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <OrderBook handleShowOrderBook={handleShow} show={isShow} isSuccess={isSuccess}/>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Portfolio handleShowOrderBook={handleShow} show={isShow} />
              </Tab.Pane>
              <Tab.Pane eventKey="3rd">
                <Asset handleShowOrderBook={handleShow} show={isShow} />
              </Tab.Pane>
            </Tab.Content>
          </div>
          <PlaceOrder />
        </div>
      )}

      <div id="footer">
        <Nav fill variant="tabs" className="d-flex">
          {footer.map((item, index) => {
            return (
              <Nav.Item key={index}>
                <Nav.Link
                  eventKey={item.key}
                  className={isShow ? "tab-link" : "default"}
                  onClick={handleActive}
                >
                  {item.name}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
      </div>
    </Tab.Container>
  );
}

export default memo(LayoutRight);
