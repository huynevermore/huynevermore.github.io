import "./history.css";
import ReactTooltip from "react-tooltip";
import { Tabs, Tab, Nav } from "react-bootstrap";

function History() {
  return (
    <div id="history">
      <div className="derivative-info">
        <div className="symbol" style={{ lineHeight: "43px" }}>
          VN30F2210
        </div>
        <div className="flex-column d-flex align-center ">
          <span>Sàn: </span>
          <span
            data-tip="Click đúp để đặt lệnh"
            data-for="double"
            data-class="double-tooltip"
            className="cl tool-tip-item"
            style={{ cursor: "pointer", color: "#00c5c5" }}
          >
            1024.9
          </span>
        </div>
        <div className="flex-column d-flex align-center ">
          <span>TC: </span>
          <span
            data-tip="Click đúp để đặt lệnh"
            data-for="double"
            data-class="double-tooltip"
            className="cl tool-tip-item"
            style={{ cursor: "pointer", color: "#ffd900" }}
          >
            1102.0
          </span>
        </div>
        <div className="flex-column d-flex align-center ">
          <span>Trần: </span>
          <span
            data-tip="Click đúp để đặt lệnh"
            data-for="double"
            data-class="double-tooltip"
            className="cl tool-tip-item"
            style={{ cursor: "pointer", color: "#ff25ff" }}
          >
            1179.1
          </span>
        </div>
        <ReactTooltip
          className="react-tooltip place-top type-light double-tooltip"
          id="double"
          data-id="tooltip"
        ></ReactTooltip>
      </div>

      <div className="derivative-info-table-wrp">
        <Tab.Container defaultActiveKey="step-price">
          <Nav variant="pills" className="flex-row justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="step-price">Bước giá</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="command-match-history">
                Lịch sử khớp lệnh
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="step-price" className="tab-step-price">
              <div className="command-list">
                <div>KL Mua</div>
                <div>Giá Mua</div>
                <div>Giá Bán</div>
                <div>KL Bán</div>
              </div>
              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>58</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.2
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.4
                </div>
                <div style={{ textAlign: "center" }}>2</div>
              </div>

              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>27</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.1
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.6
                </div>
                <div style={{ textAlign: "center" }}>1</div>
              </div>

              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>372</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.0
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.7
                </div>
                <div style={{ textAlign: "center" }}>100</div>
              </div>
              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>58</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.2
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.4
                </div>
                <div style={{ textAlign: "center" }}>2</div>
              </div>

              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>27</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.1
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.6
                </div>
                <div style={{ textAlign: "center" }}>1</div>
              </div>

              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>372</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.0
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.7
                </div>
                <div style={{ textAlign: "center" }}>100</div>
              </div>
              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>58</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.2
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.4
                </div>
                <div style={{ textAlign: "center" }}>2</div>
              </div>

              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>27</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.1
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.6
                </div>
                <div style={{ textAlign: "center" }}>1</div>
              </div>

              <div className="derivative-info-row-price">
                <div style={{ textAlign: "center" }}>372</div>
                <div
                  style={{ textAlign: "left", paddingLeft: "20px" }}
                  className="txt-green"
                >
                  1115.0
                </div>
                <div
                  style={{ textAlign: "right", paddingRight: "20px" }}
                  className="txt-green"
                >
                  1115.7
                </div>
                <div style={{ textAlign: "center" }}>100</div>
              </div>
            </Tab.Pane>
            <Tab.Pane
              eventKey="command-match-history"
              className="tab-command-match-history"
            >
              <div className="command-list">
                <div>TG</div>
                <div>Giá</div>
                <div>+/-</div>
                <div>KL</div>
                <div>KL tích lũy</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>

              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
              <div className="derivative-info-row">
                <div style={{ textAlign: "center" }}>14:45:06</div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  1115.2
                </div>
                <div style={{ textAlign: "right" }} className="txt-green">
                  13.2
                </div>
                <div style={{ textAlign: "right" }}>12,071</div>
                <div style={{ textAlign: "right" }}>370,445</div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
}

export default History;
