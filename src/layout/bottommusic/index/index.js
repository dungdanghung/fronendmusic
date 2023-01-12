import "./bottommusic.scss"
import Leftbottommusic from './leftbottommusic'
import Mainbottommusic from './mainbottommusic'
import Rightbottommusic from './rightbottommusic'


function Bottommusic() {
    
  
    return (
        <div className=" playmusicitem">
            <Leftbottommusic  ></Leftbottommusic>
            <Mainbottommusic  ></Mainbottommusic>
            <Rightbottommusic ></Rightbottommusic>
        </div>
    )
}

export default Bottommusic