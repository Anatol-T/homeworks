
type LoadingType = typeof initState
const initState = {
    loading: false
}

export const loadingReducer = (state:LoadingType = initState, action: LoadingActionsType): LoadingType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, loading: !state.loading}
        }
        default: return state
    }
}
type LoadingActionsType = LoadingACType

type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = () => {
    return {
        type: "LOADING"
    } as const
} // fix any