import React from 'react'
import {messageDataType} from "./HW1";
import stl from "./Message.module.css"

function Message(props: messageDataType) {
  return (
    <div className={stl.message}>
      <div><img className={stl.avatar} src={props.avatar} alt="avatar"/></div>
      <div className={stl.body}>
        <div className={stl.mainPart}>
          <h3>{props.name}</h3>
          <p>{props.message}</p>
        </div>
        <div className={stl.time}>{props.time}</div>
      </div>
    </div>
  )
}

export default Message
