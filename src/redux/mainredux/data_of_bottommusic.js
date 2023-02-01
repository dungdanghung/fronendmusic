const initstate = {
    name: '',
    author: '',
    url: '',
    id: '',
    img: '',
    play: false,
    changerange: false,
    checkload: false,
}

function Data_of_bottommusic(state = initstate, action) {
    switch (action.type) {
        case "change_data_of_bottommusci":
            return {
                ...state,
                name: action.data.name,
                author: action.data.auther,
                url: action.data.url,
                id: action.data.id,
                img: action.data.img,
                checkload: false
            }
        case "playofpause":
            return {
                ...state,
                play: action.data,
            }
        case "changerangemusic":
            return {
                ...state,
                changerange: action.data
            }
        case "changecheckload":
            return {
                ...state,
                checkload: true
            }
        default:
            return state
    }
}


export default Data_of_bottommusic;