import './App.css';
import React,{useState} from 'react'
import Group from './components/Group';
import Popup from './components/Popup';
function App() {
  let [popUp,setpopUp]=useState(false);
  let [Count,setCount]=useState(0);//lifting the state up because while giving the allGroups(state) array in dependency list of useEffect in the Group.jsx it infinitely re renders
  return (
    <div className='App'>
        <div className='left-container-app'>
            <Group setpopUp={setpopUp} Count={Count} setCount={setCount}/>
        </div>
        <div className='right-container-app'>
            
        </div>
        {popUp && <Popup setpopUp={setpopUp} Count={Count} setCount={setCount}/>}
    </div>
  );
}

export default App;
