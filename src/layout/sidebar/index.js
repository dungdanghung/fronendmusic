import './sidebar.scss'
import Renderitemsibar from '../../handle/handle_list_sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faRecordVinyl } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faRadio } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faBorderAll } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux"

function Sidebar() {
 

    return (
        <div className="sidebar">
            <div className='wrapcontensidebar'>

                <div className='sidebaricon'>
                    <img src='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg'></img>
                </div>

                <div className='listitem1'>
                    <Renderitemsibar title={"Cá Nhân"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faMusic} />} />
                    <Renderitemsibar title={"Khám Phá"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faRecordVinyl} />} />
                    <Renderitemsibar title={"#zingchart"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faBolt} />} />
                    <Renderitemsibar title={"Radio"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faRadio} />} />
                    <Renderitemsibar title={"Theo Dõi"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faEye} />} />
                </div>
                <div className='ngancach'>
                    <div className='itemngancach'></div>
                </div>
                <div className='listitem2'>
                    <Renderitemsibar title={"Nhạc Mới"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faHeadphones} />} />
                    <Renderitemsibar title={"Thể Loại"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faBorderAll} />} />
                    <Renderitemsibar title={"Top 100"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faStar} />} />
                    <Renderitemsibar title={"Radio"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faRadio} />} />
                    <Renderitemsibar title={"MV"} icon={<FontAwesomeIcon className='listitemiconsibar' icon={faCompactDisc} />} />
                </div>
                <div className='quangcaovip'>
                    <p className='title'>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                    <a className='btnvip' href='https://zingmp3.vn/vip?utm_source=desktop&utm_campaign=VIP&utm_medium=sidebar' >Nâng cấp VIP</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar