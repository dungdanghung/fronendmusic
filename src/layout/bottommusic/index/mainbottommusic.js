import { faShuffle } from "@fortawesome/free-solid-svg-icons"
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons"
import { faForwardStep } from "@fortawesome/free-solid-svg-icons"
import { faRepeat } from "@fortawesome/free-solid-svg-icons"
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePause } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { actionplay, changeranges } from "../../../redux/mainactionredux/data_of_bottommusic-action"

function Mainbottommusic({ data }) {
    const [duration, setduration] = useState('');
    const [currentimevalue, setcurrentimevalue] = useState("0:00");
    // const select = useSelector(state => state.data_of_bottommusic)
    // const dispath = useDispatch()

    function handlechangbtnplayofpause(e) {
        if (document.querySelector(".cssbtnplaymusic").attributes[1].value === '0') {
            document.querySelector(".playclick").classList.add("activebtnplay")
            document.querySelector(".pauseclick").classList.remove("activebtnplay")
            document.querySelector(".cssbtnplaymusic").attributes[1].value = '1'
            document.getElementById("music").play()
        } else {
            document.querySelector(".playclick").classList.remove("activebtnplay")
            document.querySelector(".pauseclick").classList.add("activebtnplay")
            document.querySelector(".cssbtnplaymusic").attributes[1].value = '0'
            document.getElementById("music").pause();
        }
    }
    // function handleactionplay(elemen) {
    //     let a, b
    //     elemen.ontimeupdate = () => {
    //         a = Math.floor(elemen.currentTime / 60)
    //         b = Math.floor(elemen.currentTime - a * 60)
    //         if (b < 10) {
    //             b = "0" + b
    //         }
    //         setcurrentimevalue(`${a}:${b}`)
    //     }
    // }
    // useEffect(()=>{
    //      if(!select.changerange){
    //         handlethanhchayplay(document.querySelector(".music"))
    //      }
    // },[currentimevalue])
    // function handlethanhchayplay(elemen, check = false) {
    //     if (check !== false) {
    //         document.querySelector(".timemusicitem").style.background = `linear-gradient(to right, black ${(check)}%, #fff 0%)`
    //     } else {
    //         document.querySelector(".timemusicitem").style.background = `linear-gradient(to right, black ${(elemen.currentTime / elemen.duration * 100)}%, #fff 0%)`
    //     }
    // }
    // function Handlemousedow(e) {
    //     dispath(changeranges(true))
    //     handlethanhchayplay({}, (e.nativeEvent.offsetX / e.target.clientWidth * 100))
    //     let maxoffsetx = e.screenX + e.target.clientWidth - e.nativeEvent.offsetX
    //     let minoffsetx = maxoffsetx - e.target.clientWidth
    //     let main = maxoffsetx - minoffsetx
    //     function callhandlemousemove(even) {
    //         handlemousemove(even, main, minoffsetx)
    //     }
    //     function removeevent(e) {
    //         window.removeEventListener("mousemove", callhandlemousemove)
    //         window.removeEventListener("mouseup", removeevent)
    //         dispath(changeranges(false))
    //         document.querySelector(".music").currentTime = (((e.screenX - minoffsetx) /main *100)*document.querySelector(".music").duration/100)
    //     }
    //     window.addEventListener("mousemove", callhandlemousemove)
    //     window.addEventListener("mouseup", removeevent)
    // }
    // function handlemousemove(e, main, min) {
    //     let value = (e.screenX - min) / main * 100;
    //     if (value <= 0) handlethanhchayplay({}, 0);
    //     else if (value >= 100) handlethanhchayplay({}, 100);
    //     else handlethanhchayplay({}, value)
    // }


    useEffect(() => {
        // const t = new ResizeObserver((e) => {
        //     const currentimevalue = new Promise((resolve, reject) => {
        //         const intev = setInterval(() => {
        //             if (e[0].target.childNodes[1].duration) {
        //                 console.log(document.querySelector(".musicplaying"))
        //                 clearInterval(intev)
        //                 resolve(e[0].target.childNodes[1].duration)
        //             }
        //         }, 10)
        //     })
        //     currentimevalue.then((a) => {
        //         setduration((a / 60).toFixed(2))
        //     })
        // })
        // t.observe(document.querySelector(".musicplaying"))

        // var mutationObserver = new MutationObserver(function (mutations) {
        //     mutations.forEach(function (mutation) {
        //         console.log(mutation.target.childNodes[1].duration);
        //     });
        // });
        // mutationObserver.observe(document.querySelector(".musicplaying"), {
        //     attributes: true,
        //     characterData: true,
        //     childList: true,
        //     subtree: true,
        //     attributeOldValue: true,
        //     characterDataOldValue: true
        // });

        // let a = document.createElement("audio")
        // a.src = data.url
        // document.querySelector(".musicplaying").appendChild(a)
        // console.log(document.querySelector("audio").src)

        // var au = document.getElementById("music");
        // au.play()
        // au.onloadedmetadata = function () {
        //     console.log(au.duration)
        // };

    }, [data])



    return (
        // <div className="itemplaymusic">
        //     <div className='controplay'>
        //         <div className='cssbtnplay active'><FontAwesomeIcon icon={faShuffle} /></div>
        //         <div className='cssbtnplay'><FontAwesomeIcon icon={faBackwardStep} /></div>
        //         <div className='cssbtnplaymusic' check={0} onClick={handlechangbtnplayofpause}>
        //             <FontAwesomeIcon icon={faCirclePlay} className="playclick" />
        //             <FontAwesomeIcon icon={faCirclePause} className="pauseclick activebtnplay" />
        //         </div>
        //         <div className='cssbtnplay'><FontAwesomeIcon icon={faForwardStep} /></div>
        //         <div className='cssbtnplay'><FontAwesomeIcon icon={faRepeat} /></div>
        //     </div>
        //     <div className="musicplaying" onClick={(e) => { console.log(e) }}>
        //         <div className="wrapmusicplaying">
        //             <p className="starttime">{currentimevalue}</p>
        //             {/* <div className="timemusic" onMouseDown={Handlemousedow} > */}
        //             <div className="timemusic">
        //                 <div className="timemusicitem" style={{ background: "linear-gradient(to right, black 0%, #fff 0%)" }}>
        //                 </div>
        //             </div>
        //             <p className="endtime">{duration}</p>
        //         </div>
        //         <audio id="music" src={data.url} preload="metadata"></audio>
        //     </div>
        // </div>
        <></>
    )
}

export default Mainbottommusic