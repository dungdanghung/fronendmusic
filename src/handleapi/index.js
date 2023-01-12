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
    }}

export default {
    getimgadvertisement,
    getallimgganday
}