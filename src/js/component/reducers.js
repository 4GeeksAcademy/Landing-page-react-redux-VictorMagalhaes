import { CHANGE_H1 } from "./actions.js";


const initialState = {
    item: "4Geeks"
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case CHANGE_H1:
            return {
                ...state,
                item: action.item
            }
        default:
            return state;
    }
}

export default reducer;