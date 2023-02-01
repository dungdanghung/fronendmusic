import { useEffect, useState } from "react"
import handleapi from "../handleapi"
import {useDispatch } from "react-redux"
import {Change_data_of_bottummusic} from "../redux/mainactionredux/data_of_bottommusic-action"


function Render_listmusic({ ...props }) {
    const dispath = useDispatch()
    const [listmusic, setlistmusic] = useState([])
    let r = []
    listmusic.reduce((a, b, c) => {
        if (c < (props.lengthofcolumn ? (props.coustcolumn * props.lengthofcolumn) : listmusic.length)) {
            a.push(b)
            if (a.length === props.lengthofcolumn) {
                r.push(a)
                return []
            } else {
                return a
            }
        }
    }, [])

    useEffect(() => {
        new Promise(async (resolve) => {
            let a = await handleapi.getlistsong()
            setlistmusic(a)
            resolve(a)
        })
    }, [])

    function callback_function(da) {
        return async function(e){
            let a = await handleapi.getsongofid(da.id)
            dispath(Change_data_of_bottummusic(a))
        }
    }

    return (
        <>
            {r.map((data, index) => {
                return (
                    <div key={index} className="wraplistmusicitem">
                        {data.map((da, index) => {
                            return (
                                <div key={da.id} className="listmusic_item" onClick={callback_function(da)}>       
                                    <div className="listmusic_item_thumbnail">
                                        <img src={da.img}></img>
                                    </div>
                                    <div className="listmusic_item_infor">
                                        <div className="wraplistmusic_item_infor">
                                            <div className="listmusic_item_infor1">
                                                <div>
                                                    <h4>{da.name}</h4>
                                                </div>
                                            </div>
                                            <div className="listmusic_item_infor2">
                                                <h5>{da.auther}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    )
}




export default Render_listmusic