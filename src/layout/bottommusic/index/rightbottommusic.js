import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneLines } from "@fortawesome/free-solid-svg-icons"
import { faExpand } from "@fortawesome/free-solid-svg-icons"
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import { faFileAudio } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

function Rightbottommusic() {

    const [indexvolume, setindexvolume] = useState(0.3)

    useEffect(() => {
        document.querySelector(".nutrange").style.background = `linear-gradient(to right, black ${(indexvolume*100)}%, #fff 0%)`
        document.getElementById("music").volume = indexvolume
    }, [indexvolume])

    function xulymove(e,min,max) {
        let value = ((e.screenX - min) / (max - min) * 100) / 100;
        if(value <= 0) setindexvolume(0)
        else if(value >= 1) setindexvolume(1) 
        else setindexvolume(value.toFixed(2))
    }

    function handlemousedow(e) {
        setindexvolume((((e.nativeEvent.offsetX / e.target.offsetWidth) * 100) / 100).toFixed(2))
        let min = e.screenX - e.nativeEvent.offsetX
        let max = e.screenX + e.target.offsetWidth - e.nativeEvent.offsetX
        function setmouseup() {
            window.removeEventListener('mousemove', callxulymove);
            window.removeEventListener('mouseup', setmouseup);
        }
        function callxulymove(e) {
            xulymove(e,min,max)
        }
        window.addEventListener("mousemove", callxulymove)
        window.addEventListener("mouseup", setmouseup)

    }
    return (
        <>
            <div className="itemactionmusic">
                <div className='wrapactionicon'>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faCompactDisc} /></div>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faMicrophoneLines} /></div>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faExpand} /></div>
                    <div className='wrapvolum'>
                        <div className='iconhover wrapactioniconitemvolum'><FontAwesomeIcon icon={faVolumeLow} className="kh" /></div>
                        <div className='wrapinputrange'>
                            <div className='rangevolume' onMouseDown={handlemousedow}>
                                <div className='nutrange' style={{ background: "linear-gradient(to right, black 20%, #fff 0%)" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className=' gach'>
                        <div className='gachitem'></div>
                    </div>
                    <div className='iconhover wrapactioniconitem'><FontAwesomeIcon icon={faFileAudio} /></div>
                </div>
            </div>
        </>
    )
}

export default Rightbottommusic