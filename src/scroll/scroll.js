import { useEffect, useState, useRef } from "react"
import "./scroll.scss"

function Scrollconten(props) {
    const [test, settest] = useState(30)
    

    useEffect(() => {
        const ro = new ResizeObserver((e) => {
            console.log(e)
        })
        ro.observe(document.querySelector(".scroll"))
    }, [])
    return (
        <div className="scroll">
            <div className="scrollitem" style={{ height: `${test}%` }}></div>
        </div>
    )
}

export default Scrollconten

