import "./compunent02.scss"
import handleapi from "../../../handleapi"
import { useEffect, useState } from "react"
function Compunent02() {
    const [dataganday, setdataganday] = useState([])



    async function handlegetdataganday() {
        let c = await handleapi.getallimgganday();
        setdataganday(c)
    }
    useEffect(() => {
        handlegetdataganday()
    }, [])
    return (
        <div className='ganday'>
            <div className='gandaytitle'>
                <div className='titleganday'><p>GẦN ĐÂY</p></div>
                <div className='titletatca'>
                    <p>TẤT CẢ</p>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>

            </div>
            <div className='gandayconten'>
                <div className="wrapgandayconten">
                    <div className="wrap_gandayconten_item">
                        {dataganday.map((da, index) => {
                            return da.active ? rendernoactive(da, index) : renderwithactive(da, index)
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

function renderwithactive(prop, index) {
    return <div key={index} className="gandayconten_item">
        <div className="circlegandayitem">
            <div className="wrapimgactive">
                <img className="gandayimg" src={prop.img}></img>
                <div className="gandayaction">
                    <div className="wrapbtnheartganday">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="wrapbtnplayganday">
                        <i className="fa-sharp fa-solid fa-play"></i>
                    </div>
                    <div className="wrapbtnmoreganday">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="gandayitem_title">
            <span className="gandayactiveitem_title-text">{prop.title}</span>
        </div>
    </div>
}
function rendernoactive(prop, index) {
    return <div key={index} className="gandayconten_item">
        <div className="circlegandayitem">
            <div className="mainimgganday">
                <svg className="svg" width="100%" height="100%" viewBox="0 0 100 100"><circle fill="none" stroke="rgba(255, 255, 255, 0.2)" cx={50} cy={50} r="48.75" strokeWidth="2.5" /><circle fill="none" stroke="#ff4b4a" cx={50} cy={50} r="48.75" strokeWidth="2.5" strokeDasharray="306.3052837250048" strokeDashoffset={0} style={{ transition: "stroke-dashoffset 850ms ease-in-out 0s" }} /></svg>
                <img className="gandayimg" src={prop.img}></img>
                <div className="gandayaction">
                    <div className="wrapbtnplayganday">
                        <i className="fa-sharp fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
            <div className="like">
                <img src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"></img>
            </div>
            <div className="gandayitemchild">
                <img src={prop.img}></img>
            </div>
        </div>
        <div className="gandayitem_title">
            <span className="gandayactiveitem_title-text">{prop.title}</span>
        </div>
    </div>
}

export default Compunent02