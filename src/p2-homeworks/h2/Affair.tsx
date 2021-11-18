import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id:number):void => {
      props.deleteAffairCallback(_id)
    }// need to fix
    const nameStyle = {
      display: "inline-block",
      width: "130px",
      height: "30px",
      marginLeft: "10px"
    }
    const priorityStyle = {
      display: "inline-block",
      width: "100px",
      height: "30px",
      color: props.affair.priority === "high" ? "red"
        : props.affair.priority === "middle"? "orange" :"green",
    }
    return (
        <div>
            <div style={nameStyle}>{props.affair.name}</div>
            <div style={priorityStyle}>{`[ ${props.affair.priority} ]`}</div>

            <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
