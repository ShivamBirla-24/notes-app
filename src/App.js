import './App.css';
import React,{useState} from 'react'
import Group from './components/Group';
import Popup from './components/Popup';
import DefaultBackground from './components/DefaultBackground';
import Notes from './components/Notes';
function App() {
  let [popUp,setpopUp]=useState(false);
  let [Count,setCount]=useState(0);//lifting the state up because while giving the allGroups(state) array in dependency list of useEffect in the Group.jsx it infinitely re renders
  let [allGroups,setallGroups] = useState([]) ;
  let [groupClick,setgroupClick] = useState("");
  let [uniqueKey,setUniqueKey] = useState("")
  let [isClicked,setisClicked] = useState(false);
  let [groupColor,setgroupColor]= useState("");
  return (
    <>
      <div className='App desktop-only'>
        <div className='left-container-app'>
            <Group setisClicked={setisClicked} setpopUp={setpopUp} Count={Count} setCount={setCount} groupClick={groupClick} setgroupClick={setgroupClick} allGroups={allGroups} setallGroups={setallGroups} setgroupColor={setgroupColor} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/>
        </div>
        <div className='right-container-app'>
            {
              (isClicked) ? <Notes groupClick={groupClick} groupColor={groupColor} setisClicked={setisClicked} setgroupClick={setgroupClick} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/> : <DefaultBackground/>
            }
        </div>        
        {popUp && <Popup setpopUp={setpopUp} Count={Count} setCount={setCount} setgroupClick={setgroupClick}/>}
      </div>

      <div className='mobile-only'>
          {(!isClicked) && <Group setisClicked={setisClicked} setpopUp={setpopUp} Count={Count} setCount={setCount} groupClick={groupClick} setgroupClick={setgroupClick} allGroups={allGroups} setallGroups={setallGroups} setgroupColor={setgroupColor} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/>}
          {popUp && <Popup setpopUp={setpopUp} Count={Count} setCount={setCount} setgroupClick={setgroupClick}/>}
          {(isClicked) && <Notes groupClick={groupClick} groupColor={groupColor} setisClicked={setisClicked} setgroupClick={setgroupClick} uniqueKey={uniqueKey} setUniqueKey={setUniqueKey}/>}
      </div>
    </>
  );
}


export default App;