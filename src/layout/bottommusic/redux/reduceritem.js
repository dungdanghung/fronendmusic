const initstate = {
    name: "Confident",
    author: "Justin Bieber ft. Chance The Rapper",
    url: "https://cdn.discordapp.com/attachments/775740994595323954/782130398385143818/Justin_Bieber_-_Confident_ft._Chance_The_Rapper_OMP3_160K.mp3",
    id: 82,
    
        images: [
            {
                "url": "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36"
            },
            {
                "url": "https://i.scdn.co/image/ab67616d0000b27358ae8fddecbd2630005409c9"
            }
        ],
    play: false,
    changerange: false,
}


function Reducerbottommusic(state = initstate, action) {
    switch (action.type) {
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
        default:
            return state
    }
}


export default Reducerbottommusic;