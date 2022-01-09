import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import stl from './clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
      clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
      setShow(false)
    }

    const getTime = () => {
      const format = (str:string) => {
        return str.length === 1 ? '0'+str: str
      }
      const hours = format(`${date?.getHours()}`)
      const minutes = format(`${date.getMinutes()}`)
      const seconds = format(`${date.getSeconds()}`)
      return hours + ':' + minutes + ':' + seconds
    }

    const getDate = () => {
      const format = (str:string) => {
        return str.length === 1 ? '0'+str: str
      }
      const day = format(`${date.getDate()}`)
      const month = format(`${date.getMonth() + 1}`)
      const year = format(`${date.getFullYear()}`)
      return day + '.' + month + '.' + year
    }

    const stringTime = getTime() // fix with date
    const stringDate = getDate() // fix with date

    return (
        <div >
          <div className={stl.time}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}
          >
            <div>
              {stringTime}
            </div>

            {show && (
              <div>
                {stringDate}
              </div>
            )}
          </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
