import store from './store'
import * as actions from './actionType';

export const addBug = description => {
    store.dispatch({
        type: actions.BUG_ADDED,
        payload: {
            description
        }
    })
}

export const removeBug = id => {
    store.dispatch({
        type: actions.BUG_REMOVED,
        payload: {
            id
        }
    })
}

export const resolveBug = id => {
    store.dispatch({
        type: actions.BUG_RESOVLED,
        payload: {
            id
        }
    })
}