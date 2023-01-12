import Header from "../header/index";
import "./mainlayout.scss"
import Sidebar from "../sidebar/index";
import Bottommusic from "../bottommusic/index/index";
import Scrollconten from "../../scroll/scroll";
function Mainlayout({children}) {

    return (
        <div className="app" style={{ backgroundColor: "black", height: "100%", flexDirection: "column", display: "flex", backgroundImage: "url(https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/xone-bg.jpg)", backgroundAttachment: "fixed" }}>
            <div className="main" style={{ flex: "1", display: "flex", width: "100%" }}>
                <Sidebar />
                <div className="wrapmainheaderandconten">
                    <Header />
                    <div className="content">
                        <div className="wrapconten">
                            {children}
                        </div>
                        <Scrollconten/>
                    </div>
                </div>
            </div>


            <Bottommusic></Bottommusic>


        </div>
    )
}

export default Mainlayout;