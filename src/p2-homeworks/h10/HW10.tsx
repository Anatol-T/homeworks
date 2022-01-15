import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import spinner from './DoubleRingSpinner.svg'
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import stl from './hw10.module.css'

function HW10() {
  // useSelector, useDispatch
  const dispatch = useDispatch()
  let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

  const setLoading = () => {
    dispatch(loadingAC())
    setTimeout(()=> {
      dispatch(loadingAC())
    }, 2000)
    // dispatch
    // setTimeout
    console.log('loading...')
  };

  return (
    <div>
      <h3>Homeworks 10</h3>

      {/*should work (должно работать)*/}
      <div className={stl.container}>{loading
        ? (
          <div><img src={spinner} alt="loading..."/></div>
        ) : (
          <div>
            <SuperButton onClick={setLoading} style={{width: "110px"}}>set loading...</SuperButton>
          </div>
        )
      }</div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr/>
    </div>
  )
}

export default HW10
