import "./portfolio.css";
import { Tabs, Tab, Nav } from "react-bootstrap";
import { HiOutlineRefresh, HiMinus } from "react-icons/hi";

function Portfolio({ handleShowOrderBook, show }) {
  return (
    <div id="portfolio-box-container">
      <Tab.Container defaultActiveKey="open-position">
        <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="open-position" style={{ fontSize: "13px" }}>
              Vị thế mở
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="close-position" style={{ fontSize: "13px" }}>
              Vị thế đóng
            </Nav.Link>
          </Nav.Item>
          <div className="icon-order-box">
            <span style={{ margin: "0 8px" }}>
              <HiOutlineRefresh />
            </span>
            <span
              onClick={() => {
                handleShowOrderBook(false);
              }}
              style={{ marginRight: "8px" }}
            >
              <HiMinus />
            </span>
          </div>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="open-position" className="tab-open-position">
            <div className="command-list">
              <div style={{ textAlign: "left", paddingLeft: "3px" }}>Mã</div>
              <div>KL</div>
              <div>Giá vốn</div>
              <div>Giá hiện tại</div>
              <div style={{ textAlign: "right" }}>+/-</div>
              <div></div>
            </div>
            <p>Chưa có mã nào trong danh mục của Quý khách.</p>
          </Tab.Pane>
          <Tab.Pane eventKey="close-position" className="tab-close-position">
            <div className="command-list">
              <div style={{ textAlign: "left", paddingLeft: "3px" }}>Mã</div>
              <div>KL</div>
              <div>Giá mua</div>
              <div>Giá bán</div>
              <div>Lãi/lỗ đã thực hiện</div>
            </div>
            <p>Chưa có dữ liệu</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
}

export default Portfolio;
