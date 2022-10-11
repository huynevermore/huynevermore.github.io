import Chart from "../Chart/Chart";
import Market from "../Market/Market";
import "./layoutleft.css";
import {memo} from 'react'

function LayoutLeft() {
  return (
    <div className="layout-left">
      <Chart />
      <Market />
    </div>
  );
}

export default memo(LayoutLeft);
