import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons"
import { faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actionplay, changeranges, changcheckload } from "../../../redux/mainactionredux/data_of_bottommusic-action"

function Mainbottommusic() {
    const [duration, setduration] = useState('');
    const [currentimevalue, setcurrentimevalue] = useState("0:00");
    const [btn_playofpause, set_btn_playofpause] = useState(true);
    const select = useSelector(state => state.data_of_bottommusic)
    const dispath = useDispatch()

    function handlechangbtnplayofpause(e) {
        if (!btn_playofpause) {
            set_btn_playofpause(true)
            if (select.checkload) {
                let a = document.getElementById("music")
                a.play()
                handleactionplay(a)
            }
        } else {
            set_btn_playofpause(false)
            document.getElementById("music").pause();
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
            document.getElementById("music").currentTime = (((e.screenX - minoffsetx) / main * 100) * document.getElementById("music").duration / 100)
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
        if (select.id !== "") {
            setcurrentimevalue("0:00")
            var au = document.getElementById("music");
            au.onloadedmetadata = function () {
                setduration(setdurationtime(au.duration))
                dispath(changcheckload())
                set_btn_playofpause(true)
                au.play()
                handleactionplay(au)
            };
        }
    }, [select])
    function setdurationtime(value) {
        let a = Math.floor(value / 60)
        let b = Math.floor(value - a * 60)
        if (b < 10) {
            b = "0" + b
        }
        return `${a}:${b}`
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
    function handlethanhchayplay(elemen, check = false) {
        if (check !== false) {
            document.querySelector(".timemusicitem").style.background = `linear-gradient(to right, black ${(check)}%, #fff 0%)`
        } else {
            document.querySelector(".timemusicitem").style.background = `linear-gradient(to right, black ${(elemen.currentTime / elemen.duration * 100)}%, #fff 0%)`
        }
    }
    useEffect(() => {
        if (!select.changerange) {
            handlethanhchayplay(document.getElementById("music"))
        }
    }, [currentimevalue])

    return (
        <div className="itemplaymusic">
            <div className='controplay'>
                <div className='cssbtnplay active'><FontAwesomeIcon icon={faShuffle} /></div>
                <div className='cssbtnplay'><FontAwesomeIcon icon={faBackwardStep} /></div>
                <div className='cssbtnplaymusic' onClick={handlechangbtnplayofpause}>
                    <FontAwesomeIcon icon={faCirclePlay} className={`playclick ${btn_playofpause ? "activebtnplay" : ""}`} />
                    <FontAwesomeIcon icon={faCirclePause} className={`pauseclick ${btn_playofpause ? "" : "activebtnplay"}`} />
                </div>
                <div className='cssbtnplay'><FontAwesomeIcon icon={faForwardStep} /></div>
                <div className='cssbtnplay'><FontAwesomeIcon icon={faRepeat} /></div>
            </div>
            <div className="musicplaying">
                <div className="wrapmusicplaying">
                    <p className="starttime">{select.checkload?currentimevalue:"0:00"}</p>
                    <div className="timemusic" onMouseDown={select.checkload ? Handlemousedow : () => { }} >
                        <div className="timemusicitem" style={{background: "linear-gradient(to right, black 0%, #fff 0%)" }}>
                        </div>
                    </div>
                    <p className="endtime">{select.checkload?duration:"0:00"}</p>
                </div>
                <audio id="music" src={select.url} preload="metadata"></audio>
            </div>
        </div>
    )
}

export default Mainbottommusic