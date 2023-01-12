import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import {useSelector} from "react-redux"

function Leftbottommusic({data}){
    const selet = useSelector(state => state.bottommusic)
    return(
        <>
         <div className="itemuser">
              <div className="thumner">
                <img className='hg' src={selet.images[1].url}></img>
              </div>
              <div className="contenplaymusic">
                <div>
                  <div className="titlecontenplaymusic">
                    <a href="/">
                      <span className="text_titlecontenplaymusic">{selet.name}</span>
                    </a>
                  </div>
                  <div className="titleitemcontenplaymusic">
                    <a href="/" className="titleitemcontenplaymusic_title2">{selet.author}</a>
                  </div>
                </div>
              </div>
              <div className="icenitemuser">
                <div className="tim">
                  <button><FontAwesomeIcon className='coler' icon={faHeart} /></button>
                </div>
                <div className="more">
                  <button><FontAwesomeIcon className='coler' icon={faEllipsis} /></button>
                </div>
              </div>
            </div>
        </>
    )
}

export default Leftbottommusic