import React, { useState,useEffect } from 'react'
import './../style/Group.css'
function Group({setpopUp,Count}) {
  let [allGroups,setallGroups] = useState([]);
  

  const setData = ()=>{
       setallGroups(JSON.parse(localStorage.getItem('allGroups')))
  }

  useEffect(() => {
      setData();
  }, [Count]); 


  const handlePopup = ()=>{
       setpopUp(true);
  }
  
  
  

  return (
    <div className='group-container'>
        <div className='group-container-heading'>
            <h1>
                Pocket Notes
            </h1>
        </div>
        <button onClick={handlePopup}><span style={{fontSize:"25px", padding:"0 5% 0 0"}}>+</span> Create Notes group</button>
        <div className='group-screen'>
             {
                (allGroups && allGroups.length > 0 ) ? (
                    allGroups.map((item)=>(
                        <GroupToken name={item.groupname} color={item.color}/>
                    ))
                ) : ""
             }
        </div>
    </div>
  )
}

const GroupToken = ({name,color})=>{
    return (
        <div style={{
            margin:"30px 0 30px 30px",
            display:'flex',
            alignItems:"center",
            justifyContent:"flex-start",
            gap:"22px",
            fontFamily:'Roboto',
            letterSpacing:"1px",
            fontWeight:"500"
        }}>
            <div style={{
                height:'70px',
                width:'70px',
                backgroundColor:`${color}`,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:"50%",
                fontSize:"24px",
                color:"white"
            }}>
               {
                 name[0]+name[2]
               }
            </div>
            <div style={{
                width:"200px"
            }}>
            <p style={{
                fontSize:"22px",
            }}>
               {name}
            </p>
            </div>
        </div>
    )
}

export default Group