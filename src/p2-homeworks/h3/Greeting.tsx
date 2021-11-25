import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import {errorType} from "./GreetingContainer";

type GreetingPropsType = {
  name: string // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
  addUser: () => void // need to fix any
  error: errorType // need to fix any
  totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
  const inputClass = (error === "Name should not be blank!") ? s.error : ""// need to fix with (?:)
  const errorStyle = {
    margin: 0,
    paddingLeft: "5px",
    color: error === "Name should not be blank!" ? "red" :"black",
  }
  return (
    <div>
      <input value={name} onChange={setNameCallback} className={inputClass}/>
      <button onClick={addUser}>add</button>
      <span>{totalUsers}</span>
      <p style={errorStyle}><span>{error}</span></p>
    </div>
  )
}

export default Greeting
