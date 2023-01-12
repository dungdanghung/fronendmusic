
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
function Renderitemsibar({ title, icon }) {
    return (
        <div className="wrapitemsibar">
            <div className='wrapitemsibar2'>
                <div className="wrapiconrenderitemsibar">
                    {icon}
                </div>
                <div className="wraptitlerenderitemsibar"><span>{title}</span></div>
            </div>
            <FontAwesomeIcon className="ij" icon={faCirclePlay} />
        </div>
    )
}

export default Renderitemsibar