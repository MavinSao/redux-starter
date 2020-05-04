import * as actions from "./actionType";
let lastId = 0;
export const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [...state,
            {
                id: ++lastId,
                description: action.payload.description,
                resovle: false
            }];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);
        case actions.BUG_RESOVLED:
            return state.map(bug => (bug.id === action.payload.id ? { ...bug, resovle: true } : bug))
        default:
            return state
    }
}