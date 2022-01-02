import {UserType} from "../HW8";

type ActionType = {type: 'sort', payload: 'up' | 'down'} | { type: 'check', payload: number }
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            let newState = [...state]
            if (action.payload === 'up') {
                newState.sort((a,b) => a.name <= b.name? -1 : 1)
            }
            if (action.payload === 'down') {
                newState.sort((a,b) => a.name <= b.name? 1 : -1)
            }
            return newState
        }
        case 'check': {
            // need to fix
            return state.filter(f=> f.age >= action.payload)
        }
        default: return state
    }
}