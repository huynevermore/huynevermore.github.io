import "./chart.css";
import { AdvancedChart } from "react-tradingview-embed";
import { memo } from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

function Chart() {
  return (
    <div className="chart" style={{ height: "100%" }}>
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.DARK}
        locale="fr"
        autosize
      />
    </div>
  );
}

export default memo(Chart);
