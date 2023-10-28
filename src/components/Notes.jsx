import React, { useEffect, useState } from 'react'
import submitImage from './../images/enter.png'
import './../style/Notes.css'
function Notes({groupClick,groupColor}) {
  let [text,setText]= useState("");
  let [data,setData]=useState('');
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
  
  const getData = ()=>{
    const dataDefault = localStorage.getItem(groupClick);
    if(dataDefault){
        setgroupMsg(JSON.parse(dataDefault))
    }
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
      }
  }

  useEffect(()=>{
          if(data.length !==0){
          let myArray = JSON.parse(localStorage.getItem(groupClick)) || [] ;
          myArray.push(data);
          localStorage.setItem(groupClick,JSON.stringify(myArray));
          }
        }
    ,[data])

  useEffect(()=>{
        getData();
  },[])

 
  return (
    <div className='notes-container'>
         <div className='notes-container-heading'>
             <GroupToken groupClick={groupClick} groupColor={groupColor}/>
         </div>
         <div className='text-area'>
             
         </div>
         <div className='typing-area'>
              <div className='input-box-div'>
                  <textarea type='text' placeholder='Enter your text here...........' value={text} onChange={handleChange}></textarea>
                  <img src={submitImage} alt="enter" onClick={handleClick}/>
              </div>
         </div>
    </div>
  )
}

const GroupToken = ({groupClick,groupColor})=>{
    return (
        <div id={groupClick} style={{
            margin:"0 0 0 17px",
            display:'flex',
            alignItems:"center",
            justifyContent:"flex-start",
            gap:"22px",
            fontFamily:'Roboto',
            letterSpacing:"1px",
            fontWeight:"500",
            padding: "12px 0 12px 13px",
            borderRadius:"20px 0 0 20px",
        }}>
            <div
                style={{
                height:'60px',
                width:'60px',
                backgroundColor:`${groupColor}`,
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:"50%",
                fontSize:"24px",
                color:"white"
            }}>
               {
                 (groupClick.split(" ").join(""))[0] + (groupClick.split(" ").join(""))[(groupClick.length)-3]
               }
            </div>
            <div style={{
                width:"200px"
            }}>
            <p style={{
                fontSize:"22px",
            }}>
               {groupClick}
            </p>
            </div>
        </div>
    )
}

export default Notes