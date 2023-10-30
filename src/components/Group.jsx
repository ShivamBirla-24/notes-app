import React, { useState,useEffect } from 'react'
import GroupTag from './GroupTag';
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
  
  const backtoHome = ()=>{
     setisClicked(false);
     setgroupClick("");
  }

 

  return (
    <div className='group-container'>
        <div className='group-container-heading'>
            <h1 onClick={backtoHome}>
                Pocket Notes
            </h1>
        </div>
        <button onClick={handlePopup}><span style={{fontSize:"25px", padding:"0 5% 0 0"}}>+</span> Create Notes group</button>
        <div className='group-screen'>
             {
                (allGroups && allGroups.length > 0 ) ? (
                    allGroups.map((item,index)=>(
                        <GroupTag key={index} name={item.groupname} color={item.color} handlegroupClick={handlegroupClick} groupClick={groupClick}/>
                    ))
                ) : ""
             }
        </div>
    </div>
  )
}

export default Group