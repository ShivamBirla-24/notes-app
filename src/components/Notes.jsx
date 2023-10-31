import React, { useEffect, useState } from 'react'
import submitImage from './../images/enter.png'
import backbuttonImage from './../images/backbutton.svg'
import './../style/Notes.css'
function Notes({groupClick,groupColor,setisClicked,setgroupClick,uniqueKey,setUniqueKey}) {
  let [text,setText]= useState("");
  let [data,setData]=useState("");
  let [groupMsg , setgroupMsg] = useState([]);
  let time = new Date();

   const currentTime = ()=>{
     var hours = time.getHours();
     var minutes = time.getMinutes();
     var strMinutes = minutes.toString();

     if(strMinutes.length===1){
        strMinutes = '0'+strMinutes;
     }

     if(hours===0) {return `${hours+12}:${strMinutes} Am`}
     if(0<hours && hours<12) {return `${hours}:${strMinutes} Am`}
     if(hours===12) {return `${hours}:${strMinutes} Pm`}
     else {return `${hours-12}:${strMinutes} Pm`}
    }

  const DateNow = ()=>{
     var day = time.getDate();
     var month = time.getMonth();
     var year = time.getFullYear();
     var months = ['Jan','Feb','March','April','May','June','July','August','Sept','Oct','Nov','Dec']
     
     return `${day} ${months[month]} ${year}`;
  }
  
  const handleChange = (e)=>{
        setText(
          e.target.value
       );
    }

  const handleClick = ()=>{
      if(text.length){
        setData({
            "time": currentTime(),
            "date": DateNow(),
            "note": text
          })
        setText('');
      }
  }

  const pressEnter = (e)=>{
    if(e.key==='Enter'){
        if(text.length){
            setData({
                "time": currentTime(),
                "date": DateNow(),
                "note": text
              })
            setText('');
          }
    }
  }

  const backtoHome = ()=>{
      setisClicked(false);
      setgroupClick("");
      setUniqueKey("");
  }

  useEffect(()=>{
          if(data.length !==0){
          let myArray = JSON.parse(localStorage.getItem(uniqueKey)) || [] ;
          myArray.push(data);
          localStorage.setItem(uniqueKey,JSON.stringify(myArray));
          }
        }
    ,[data,uniqueKey])  


  useEffect(()=>{
    let groupData = localStorage.getItem(uniqueKey) ? JSON.parse(localStorage.getItem(uniqueKey)) : [];
    setgroupMsg(
        groupData
    )
  },[uniqueKey,data])

 
  return (
    <div className='notes-container'>
         <div className='notes-container-heading'>
             <img src={backbuttonImage} alt='backbutton' className='mobile-only' onClick={backtoHome}></img>
             <GroupTag name={groupClick} color={groupColor} />
         </div>
         <div className='text-area'>
             {
                groupMsg.map((item,index)=>(
                        <Textmsg key={index} msgtime={item.time} msgday={item.date} msgcontent={item.note} />
                ))
             }
         </div>
         <div className='typing-area'>
              <div className='input-box-div'>
                  <textarea type='text' placeholder='Enter your text here...........' value={text} onChange={handleChange} onKeyDown={pressEnter}></textarea>
                  <img src={submitImage} alt="enter" onClick={handleClick}/>
              </div>
         </div>
    </div>
  )
}

const GroupTag = ({name,color})=>{
  return (
      <div id={name} color={color} className= "notes-group-tag-main-div">
          <div id={name}
              color={color}
              style={{
                  backgroundColor:`${color}`
          }} className='notes-group-tag-circle'>
             {
               name[0] + name[name.length-1]
             }
          </div>
          <div id={name} color={color} className='notes-group-tag-name'>
             {name}
          </div>
      </div>
  )
}

const Textmsg = ({msgtime,msgday,msgcontent})=>{
     return(
       <div className='textmsg-main-div'>
            <div className='date-and-day'>
                 <p>{msgtime}</p>
                 <p>{msgday}</p>
            </div>
            <div className='textmsg-content'>
                 <span>{msgcontent}</span>
            </div>
       </div>
     )
}

export default Notes