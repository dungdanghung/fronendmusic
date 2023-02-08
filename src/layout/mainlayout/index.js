import Header from "../header/index";
import "./mainlayout.scss"
import Sidebar from "../sidebar/index";
import Bottommusic from "../bottommusic/index/index";
import { useEffect } from "react";
import dung_react_scrollbar from "dung_react_scrollbar"

function Mainlayout({ children }) {

    useEffect(()=>{
        let a = document.querySelector(".content")
        dung_react_scrollbar(a)
    })

    return (
        <div className="app" style={{ backgroundColor: "#170f23", height: "100%", flexDirection: "column", display: "flex", backgroundAttachment: "fixed" }}>
            <div className="main" style={{ flex: "1", display: "flex", width: "100%" }}>
                <Sidebar />
                <div className="wrapmainheaderandconten">
                    <Header />
                        <div className="content">
                            {children}
                        </div>
                </div>
            </div>


            <Bottommusic></Bottommusic>


        </div>
    )
}

export default Mainlayout;