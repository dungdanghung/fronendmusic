import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faShirt } from '@fortawesome/free-solid-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import handle_api from "../../handleapi/index"


function Header() {
    const [value_search, setvalue_search] = useState("")

    async function handle_change_value_search(e) {
        setvalue_search(e.target.value)
        if (e.target.value) {
            let a = await handle_api.getsearch(e.target.value)
            console.log(a)
        }
    }

    return (
        <div className="header" style={{ backdropFilter: "blur(50px)" }}>
            <div className='wrapbtnandsearch'>
                <div className='nextprev'>
                    <div className='btnprev'><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div className='btnnext'><FontAwesomeIcon icon={faArrowRight} /></div>
                </div>

                <div className='search'>
                    <div className="wrapiconsearch"><FontAwesomeIcon className='iconsearch' icon={faMagnifyingGlass} /></div>
                    <input placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...' className='inputsearch' value={value_search} onChange={handle_change_value_search}></input>
                </div>
            </div>

            <div className='action'>
                <div className='chude'><FontAwesomeIcon icon={faShirt} /></div>
                <div className='nangcapvip'><FontAwesomeIcon icon={faGem} /></div>
                <div className='tailen'><FontAwesomeIcon icon={faArrowUpFromBracket} /></div>
                <div className='setting'><FontAwesomeIcon icon={faGear} /></div>
                <div className='user'><img width={'46px'} src='https://s120-ava-talk-zmp3.zmdcdn.me/5/6/7/7/0/120/a71f5c89b6d8c19dacec9263f862ac5e.jpg'></img></div>
            </div>


        </div>

    )
}

export default Header