
import Data_of_bottommusic from "./mainredux/data_of_bottommusic";


function Reducer(state = {}, action) {
    return {
        data_of_bottommusic: Data_of_bottommusic(state.data_of_bottommusic, action)
    }
}

export default Reducer;