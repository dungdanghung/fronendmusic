import Reducerbottommusic from "../layout/bottommusic/redux/reduceritem";


function Reducer(state = {}, action) {
    return {
        bottommusic: Reducerbottommusic(state.bottommusic, action),
    }
}

export default Reducer;