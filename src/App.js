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
  let [isClicked,setisClicked] = useState(false);
  let [groupColor,setgroupColor]= useState("");

  return (
    <div className='App'>
        <div className='left-container-app'>
            <Group setisClicked={setisClicked} setpopUp={setpopUp} Count={Count} setCount={setCount} groupClick={groupClick} setgroupClick={setgroupClick} allGroups={allGroups} setallGroups={setallGroups} setgroupColor={setgroupColor}/>
        </div>
        <div className='right-container-app'>
            {
              (isClicked) ? <Notes groupClick={groupClick} groupColor={groupColor}/> : <DefaultBackground/>
            }
        </div>        
        {popUp && <Popup setpopUp={setpopUp} Count={Count} setCount={setCount} setgroupClick={setgroupClick}/>}
    </div>
  );
}


export default App;