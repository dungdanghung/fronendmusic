import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react'

function Leftbottommusic() {
  const select = useSelector(state => state.data_of_bottommusic)
  


  return (
    <>
      <div className="itemuser">
        <div className="thumner">
          <div className={`thumneritem ${select.checkload?"":"loading"}`}>
            {select.checkload?<img className='hg' src={select.img}></img>:<></>}
          </div>
        </div>
        <div className="contenplaymusic">
          <div className='wrapcontenplaymusic'>
            <div className={`titlecontenplaymusic ${select.checkload?"":"loading"}`}>
              {select.checkload?<a href='/'><span className='text_titlecontenplaymusic'>{select.name}</span></a>:<></>}
            </div>
            <div className={`titleitemcontenplaymusic ${select.checkload?"":"loading"}`}>
              {select.checkload?<a href="/" className="titleitemcontenplaymusic_title2">{select.author}</a>:<></>}
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