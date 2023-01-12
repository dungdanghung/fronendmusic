import handleapi from "../../../handleapi"
import { useState, useEffect } from "react"
import "./compunent01.scss"



function Compunent01() {
    const [datarenderimg, setdatarenderimg] = useState([])

    useEffect(()=>{
        if(datarenderimg.length!==0){
            setInterval(() => {    
                let a = (document.querySelectorAll(".advertisement_item"))
                document.querySelector(".advertisement").appendChild(a[0])
            }, 3000);
        }
    })
    

    async function getimg(callback) {
        let a = await new Promise((resolve) => {
            let b = handleapi.getimgadvertisement()
            resolve(b)
        })
        setdatarenderimg(a)
    }
    useEffect(() => {
        getimg()
    }, [])

    return (
        <div className="advertisement">
            {datarenderimg.map((da, index) => {
                return <div key={index} className={`advertisement_item`}>
                    <img src={da.img}></img>
                </div>
            })}
        </div>
    )
}



export default Compunent01