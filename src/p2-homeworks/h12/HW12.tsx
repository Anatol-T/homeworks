import React from "react";
import stl from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes:Array<ThemesType> = ['dark', 'red', 'default'];
export type ThemesType = 'dark' | 'red' | 'default'

function HW12() {

  const dispatch = useDispatch()
  const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.theme)

  const onChangeTheme = (newTheme: ThemesType) => {
    dispatch(changeThemeAC(newTheme))
  }
  return (
    <div className={stl[theme]}>
      <hr/>
      <h3 className={stl[theme + '-text']}>
                Homeworks 12
            </h3>
      <div className={stl[theme + '-text']}>
        Choose theme:
        <SuperRadio
          name={'radio'}
          options={themes}
          value={theme}
          onChangeOption={onChangeTheme}
        />
      </div>
      <hr/>
    </div>
  )
    ;
}

export default HW12;
