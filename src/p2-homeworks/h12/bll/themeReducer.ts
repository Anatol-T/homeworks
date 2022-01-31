import {ThemesType} from "../HW12";

const initState = {
    theme: 'default' as ThemesType,
};
type ThemeStateType = typeof initState
export const themeReducer = (state:ThemeStateType = initState, action: ActionsType): ThemeStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state, ...action.payload};
        }
        default: return state;
    }
};


type ActionsType = ChangeThemeACType;
type ChangeThemeACType = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme:ThemesType) => {
    return {
        type: "CHANGE-THEME",
        payload: { theme }
    }as const
}
