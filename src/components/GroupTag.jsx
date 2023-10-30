import React from 'react'
import './../style/GroupTag.css'

const GroupTag = ({name,color,handlegroupClick,groupClick})=>{
    return (
        <div id={name} color={color} onClick={handlegroupClick} className= {`${(groupClick===name) ? "onclick-group":""} group-tag-main-div`}>
            <div id={name}
                color={color}
                style={{
                    backgroundColor:`${color}`
            }} className='group-tag-circle'>
               {
                 name[0] + name[name.length-1]
               }
            </div>
            <div id={name} color={color} className='group-tag-name'>
               {name}
            </div>
        </div>
    )
}

export default GroupTag