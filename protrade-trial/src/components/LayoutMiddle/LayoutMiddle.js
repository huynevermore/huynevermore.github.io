import "./layoutmiddle.css"
import History from "../History/History";
import WatchList from "../WatchList/WatchList";

function LayoutMiddle() {
    return ( <div className="layout-middle">
        <History/>
        <WatchList/>
    </div> );
}

export default LayoutMiddle