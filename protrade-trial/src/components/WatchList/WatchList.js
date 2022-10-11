import "./watchlist.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function WatchList() {
  return (
    <div id="watchlist">
      <div className="watchlist-table">
        <div className="watchlist-table-head">
          <div className="text-center">Mã</div>
          <div>Giá</div>
          <div>
            <span>
              <FaCaretLeft style={{ marginRight: "-4px" }} />
            </span>
            <span> +/- </span>
            <span>
              <FaCaretRight style={{ marginLeft: "-4px" }} />
            </span>
          </div>
          <div>Lệch</div>
          <div className="text-center">Tổng KL</div>
        </div>

        <div className="watchlist-table-row">
          <p className="symbol txt-green">VN30F2210</p>
          <p className="txt-green text-end">1,115.2 </p>
          <p className="txt-green">1.2</p>
          <p className="txt-red">-2.18</p>
          <p className="text-end">370,445</p>
        </div>
        <div className="watchlist-table-row">
          <p className="symbol txt-green">VN30F2211 </p>
          <p className="txt-green text-end">1,115 </p>
          <p className="txt-green">1.36</p>
          <p className="txt-red">-2.38</p>
          <p className="text-end">1,070</p>
        </div>
        <div className="watchlist-table-row">
          <p className="symbol txt-green">VN30F2210</p>
          <p className="txt-green text-end">1,115.2 </p>
          <p className="txt-green">1.2</p>
          <p className="txt-red">-2.18</p>
          <p className="text-end">370,445</p>
        </div>
        <div className="watchlist-table-row">
          <p className="symbol txt-green">VN30F2211 </p>
          <p className="txt-green text-end">1,115 </p>
          <p className="txt-green">1.36</p>
          <p className="txt-red">-2.38</p>
          <p className="text-end">1,070</p>
        </div>
      </div>
    </div>
  );
}

export default WatchList;
