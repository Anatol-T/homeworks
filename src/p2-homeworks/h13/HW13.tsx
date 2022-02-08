import React, {ChangeEvent, useState} from 'react'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI, ResponseType} from "./RequestAPI";
import stl from "./HW13.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {loadingAC} from "../h10/bll/loadingReducer";
import spinner from '../h10/DoubleRingSpinner.svg'


//import stl from './hw10.module.css'

function HW13() {
  const dispatch = useDispatch()
  let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

  const [response, setResponse] = useState<ResponseType>(
    {errorText: "",
      info: "",
      yourBody: {success: false},
      yourQuery: {}
    })
  const [checked, setChecked] = useState<boolean>(false)
  const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

  const sendRequest = () => {
    dispatch(loadingAC())
    RequestAPI.sendRequest(checked)
      .then((res)=>{
        dispatch(loadingAC())
        setResponse(res.data)
      })
      .catch((arr)=>{
        dispatch(loadingAC())
        setResponse(arr.response.data)
      })
  }

  return (
    <div>
      <h3>Homeworks 13</h3>

      <div >
        <div><b>Response:</b></div>
        <div className={stl.info}>{loading
          ? (
            <div><img src={spinner} alt="loading..."/></div>
          ) : (
            <div>
              <p>{response.errorText}</p>
              <p>{response.info}</p>
            </div>
          )
        }</div>

        <SuperCheckbox checked={checked} onChange={testOnChange}>
          Success
        </SuperCheckbox>
        <SuperButton style={{width: "130px"}} onClick={sendRequest} disabled={loading}>
          Send request
        </SuperButton>
      </div>

      <hr/>
      <hr/>
    </div>
  )
}

export default HW13
