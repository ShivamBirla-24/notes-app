import React, { useState,useEffect } from 'react'
import './../style/Group.css'
function Group({setpopUp,Count,groupClick,setgroupClick,allGroups,setallGroups,setisClicked,setgroupColor}) {

  
  const setData = ()=>{
       setallGroups(JSON.parse(localStorage.getItem('allGroups')));
  }

  useEffect(() => {
      setData();
  }, [Count]); 
                         
  const handlePopup = ()=>{
      setpopUp(true);
  }
  
  const handlegroupClick = (e)=>{
       setgroupClick(e.target.id);
       setisClicked(true);
       setgroupColor(e.target.getAttribute("color"));
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
                        <GroupToken name={item.groupname} color={item.color} handlegroupClick={handlegroupClick} groupClick={groupClick}/>
                    ))
                ) : ""
             }
        </div>
    </div>
  )
}

const GroupToken = ({name,color,handlegroupClick,groupClick})=>{
    return (
        <div id={name} color={color} style={{
            margin:"10px 0 10px 17px",
            display:'flex',
            alignItems:"center",
            justifyContent:"flex-start",
            gap:"22px",
            fontFamily:'Roboto',
            letterSpacing:"1px",
            fontWeight:"500",
            padding: "12px 0 12px 13px",
            borderRadius:"20px 0 0 20px",
            cursor:"pointer",
            backgroundColor: (groupClick===name) ? "#F7ECDC" : ""
        }} onClick={handlegroupClick}>
            <div id={name}
                color={color}
                style={{
                height:'60px',
                width:'60px',
                backgroundColor:`${color}`,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:"50%",
                fontSize:"24px",
                color:"white"
            }}>
               {
                 (name.split(" ").join(""))[0] + (name.split(" ").join(""))[(name.length)-3]
               }
            </div>
            <div id={name} color={color} style={{
                width:"200px"
            }}>
            <p id={name} color={color} style={{
                fontSize:"22px",
            }}>
               {name}
            </p>
            </div>
        </div>
    )
}

export default Group