import "./market.css";
import { Tab, Nav } from "react-bootstrap";
import { FaChartPie, FaChartBar } from "react-icons/fa";
import { SymbolOverview } from "react-tradingview-embed";
import { memo } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function Market() {
  return (
    <div id="market">
      <Tab.Container defaultActiveKey="vn30-intraday">
        <Tab.Content style={{ height: "100%" }}>
          <Tab.Pane
            eventKey="vn30-intraday"
            className="tab-step-price "
            style={{ height: "100%" }}
          >
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.DARK}
              locale="fr"
              autosize
            />
          </Tab.Pane>
          <Tab.Pane
            eventKey="vn30"
            className="tab-step-price"
            style={{ height: "100%" }}
          >
            <TradingViewWidget
              symbol="NASDAQ:AAPL"
              theme={Themes.LIGHT}
              locale="fr"
              autosize
            />
          </Tab.Pane>
          <Tab.Pane
            eventKey="bar-chart"
            className="tab-step-price"
            style={{ height: "100%", width: "100%" }}
          >
            <iframe
              src="https://mkw.vndirect.com.vn/leader_lagger?color=gray&amp;height=280"
              title="Chart"
              width="100%"
              height="100%"
            ></iframe>
          </Tab.Pane>
          <Tab.Pane
            eventKey="pie-chart"
            className="tab-command-match-history"
            style={{ height: "100%" }}
          >
            <div style={{ height: "100%" }}>
              <TradingViewWidget symbol="NASDAQ:AAPL" locale="fr" autosize />
            </div>
          </Tab.Pane>
        </Tab.Content>
        <div className="market-bottom">
          <p>Bản quyền thuộc về VNDIRECT © 2022. v2.2.3</p>
          <Nav variant="pills" className="flex-row  align-items-center">
            <Nav.Item>
              <Nav.Link eventKey="vn30-intraday">VN30 INTRADAY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vn30">VN30</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bar-chart">
                <span style={{ fontSize: "20px" }}>
                  <FaChartBar />
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pie-chart">
                <span style={{ fontSize: "20px" }}>
                  <FaChartPie />
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Tab.Container>
    </div>
  );
}

export default memo(Market);
