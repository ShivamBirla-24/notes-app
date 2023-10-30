import React, { useState } from 'react'
import './../style/Popup.css'

function Popup({setpopUp,Count , setCount}) {
  const color = ["#B38BFA","#FF79F2","#43E6FC","#F19576","#0047FF","#6691FF"]
  
  const [Group,setGroup]=useState({});
  let [isClicked ,setisCLicked] = useState(false);
  let [isEmpty , setisEmpty] = useState(0);

  const handlePopup = ()=> setpopUp(false);
  

  const handleChange = (e)=>{
        setGroup({
            ...Group,
            groupname : e.target.value
        })
        setisEmpty(e.target.value.length);
  }

  const handleClick = (e)=>{
        setGroup(
            {
                ...Group,
                color : e.target.id
            }
        )
        setisCLicked(true);
  }

  const submitButton = ()=>{
        if(isClicked && isEmpty){
            let myArray = JSON.parse(localStorage.getItem('allGroups')) || [];
            myArray.push(Group);
            localStorage.setItem('allGroups',JSON.stringify(myArray));
            setCount(++Count);
            setpopUp(false);
        }
  }

  return (
    
      <>
        <div className='popup-background' onClick={handlePopup}></div>
        <div className="popup">
            <div className="popup-content">
               <h3>Create New Notes group</h3>
               
               <div className='groups-input-div'>
                    <div className='data-input-group'>
                        <h3>Group Name</h3>
                        <input type='text' placeholder='Enter your group name....' onChange={handleChange}></input>
                    </div>
                    <div className='choosecolor'>
                        <h3>Choose colour</h3>
                        <div>
                        {
                            color.map((item,index)=>(
                                <Colorbutton key={index} id={item} handleClick={handleClick}/>
                            ))
                        }
                        </div>
                    </div>
               </div>

               <div className='popup-group-submit-div'>
                    <button onClick={submitButton}>Create</button>
               </div>
            </div>

            
               
        </div>
        
      </>
      
  )
}

const Colorbutton = ({id,handleClick})=>{
      return ( 
      <button style={{
        height:"15px",
        width:"15px",
        borderRadius:"50%",
        backgroundColor:`${id}`,
        cursor:"pointer",
        margin:"5px 3px"
       }} onClick={handleClick} id={id}>
      </button>
      )
}


export default Popup