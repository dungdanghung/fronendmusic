import "./bottommusic.scss"
import Leftbottommusic from './leftbottommusic'
import Mainbottommusic from './mainbottommusic'
import Rightbottommusic from './rightbottommusic'
import { useSelector } from "react-redux"


function Bottommusic() {
    // const select = useSelector(state => state.data_of_bottommusic)
    // if (select.id!=='') {
        return (
            <div className=" playmusicitem">
                <Leftbottommusic  ></Leftbottommusic>
                <Mainbottommusic  ></Mainbottommusic>
                <Rightbottommusic ></Rightbottommusic>
            </div>
        )
    // }
}

export default Bottommusic