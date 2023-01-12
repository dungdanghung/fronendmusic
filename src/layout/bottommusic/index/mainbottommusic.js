import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons"
import { faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actionplay, changeranges } from "../redux/actionredux"

function Mainbottommusic() {
    const [duration, setduration] = useState('');
    const [currentimevalue, setcurrentimevalue] = useState("0:00");
    const select = useSelector(state => state.bottommusic)
    const dispath = useDispatch()

    function dispathplaymusic() {
        if (select.play) {
            dispath(actionplay(false))
            document.querySelector(".music").pause()
        } else {
            dispath(actionplay(true))
            document.querySelector(".music").play()
            handleactionplay(document.querySelector(".music"))
        }
    }
    function handleactionplay(elemen) {
        let a, b
        elemen.ontimeupdate = () => {
            a = Math.floor(elemen.currentTime / 60)
            b = Math.floor(elemen.currentTime - a * 60)
            if (b < 10) {
                b = "0" + b
            }
            setcurrentimevalue(`${a}:${b}`)
        }
    }
    useEffect(()=>{
         if(!select.changerange){
            handlethanhchayplay(document.querySelector(".music"))
         }
    },[currentimevalue])
    function handlethanhchayplay(elemen, check = false) {
        if (check !== false) {
            document.querySelector(".timemusicitem").style.background = `linear-gradient(to right, black ${(check)}%, #fff 0%)`
        } else {
            document.querySelector(".timemusicitem").style.background = `linear-gradient(to right, black ${(elemen.currentTime / elemen.duration * 100)}%, #fff 0%)`
        }
    }
    function Handlemousedow(e) {
        dispath(changeranges(true))
        handlethanhchayplay({}, (e.nativeEvent.offsetX / e.target.clientWidth * 100))
        let maxoffsetx = e.screenX + e.target.clientWidth - e.nativeEvent.offsetX
        let minoffsetx = maxoffsetx - e.target.clientWidth
        let main = maxoffsetx - minoffsetx
        function callhandlemousemove(even) {
            handlemousemove(even, main, minoffsetx)
        }
        function removeevent(e) {
            window.removeEventListener("mousemove", callhandlemousemove)
            window.removeEventListener("mouseup", removeevent)
            dispath(changeranges(false))
            document.querySelector(".music").currentTime = (((e.screenX - minoffsetx) /main *100)*document.querySelector(".music").duration/100)
        }
        window.addEventListener("mousemove", callhandlemousemove)
        window.addEventListener("mouseup", removeevent)
    }
    function handlemousemove(e, main, min) {
        let value = (e.screenX - min) / main * 100;
        if (value <= 0) handlethanhchayplay({}, 0);
        else if (value >= 100) handlethanhchayplay({}, 100);
        else handlethanhchayplay({}, value)
    }
    useEffect(() => {
        const t = new ResizeObserver((e) => {
            const currentimevalue = new Promise((resolve, reject) => {
                const intev = setInterval(() => {
                    if (e[0].target.childNodes[1].duration) {
                        clearInterval(intev)
                        resolve(e[0].target.childNodes[1].duration)
                    }
                }, 10)
            })
            currentimevalue.then((a) => {

                setduration((a / 60).toFixed(2))
            })
        })
        t.observe(document.querySelector(".musicplaying"))
    }, [])
    return (
        <div className="itemplaymusic">
            <div className='controplay'>
                <div className='cssbtnplay active'><FontAwesomeIcon icon={faShuffle} /></div>
                <div className='cssbtnplay'><FontAwesomeIcon icon={faBackwardStep} /></div>
                <div className='cssbtnplaymusic' onClick={dispathplaymusic}>
                    <FontAwesomeIcon icon={faCirclePlay} className={`playclick ${select.play ? "" : "activebtnplay"}`} />
                    <FontAwesomeIcon icon={faCirclePause} className={`pauseclick ${select.play ? "activebtnplay" : ""}`} />
                </div>
                <div className='cssbtnplay'><FontAwesomeIcon icon={faForwardStep} /></div>
                <div className='cssbtnplay'><FontAwesomeIcon icon={faRepeat} /></div>
            </div>
            <div className="musicplaying">
                <div className="wrapmusicplaying">
                    <p className="starttime">{currentimevalue}</p>
                    <div className="timemusic" onMouseDown={Handlemousedow} >
                        <div className="timemusicitem" style={{ background: "linear-gradient(to right, black 0%, #fff 0%)" }}>
                            {/* <div className="wrapnutchay" style={{width: "0%"}}>
                                <div className="nutchay"></div>
                            </div> */}
                        </div>

                    </div>
                    <p className="endtime">{duration}</p>
                </div>
                <audio className="music" src={select.url} ></audio>
            </div>
        </div>
    )
}

export default Mainbottommusic