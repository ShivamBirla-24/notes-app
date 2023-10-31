import React from 'react'
import './../style/GroupTag.css'

const GroupTag = ({number,name,color,handlegroupClick,uniqueKey})=>{
    return (
        <div id={name} number={number} color={color} onClick={handlegroupClick} className= {`${((uniqueKey)===(name+number)) ? "onclick-group":""} group-tag-main-div`}>
            <div id={name}
                color={color}
                style={{
                    backgroundColor:`${color}`
            }} className='group-tag-circle'>
               {
                 name[0] + name[name.length-1]
               }
            </div>
            <div id={name} number= {number} color={color} className='group-tag-name'>
               {name}
            </div>
        </div>
    )
}

export default GroupTag