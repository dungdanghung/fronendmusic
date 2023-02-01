import axios from "../axios/index";

async function getimgadvertisement() {
    try {
        let a = await axios.get("imgadvertisement")
        return a
    } catch (error) {
        return error
    }
}


async function getallimgganday() {
    try {
        let a = await axios.get("all/imgganday")
        return a
    } catch (error) {
        return error
    }
}

async function getlistsong() {
    try {
        let a = await axios.get("songs/all")
        return a
    } catch (error) {
        console.log(error)
    }
}

async function getsongofid(index){
    try {
        let a = await axios.get("song_of_/"+index)
        return a
    } catch (error) {
        console.log(error)
    }
}


export default {
    getimgadvertisement,
    getallimgganday,
    getlistsong,
    getsongofid,
}