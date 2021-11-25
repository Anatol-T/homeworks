import React, {useState, ChangeEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
  users: Array<UserType> // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {
export type errorType = "Name should not be blank!" | "Type in your name."
// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  const [error, setError] = useState<errorType>('Type in your name.') // need to fix any

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setName(e.currentTarget.value) // need to fix
  }
  const addUser = () => {
    if (name.trim().length === 0) {
      setError("Name should not be blank!")
      setName("")
    } else {
      alert(`Hello ${name.trim()} !`) // need to fix
      setError("Type in your name.")
      addUserCallback(name.trim())
      setName("")
    }

  }

  const totalUsers = users.length // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
