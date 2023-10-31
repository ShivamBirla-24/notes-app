import backgroundImage from './../images/background.png'
import lockImage from './../images/lockImage.png'
import React from 'react';
import './../style/DefaulBackground.css'

const DefaultBackground = ()=>{
    return(
      <div className='defaultbackground'>
          <div className='defaultbackground-upper-div'>
              <img src={backgroundImage} alt='background' style={{
               height:"250px",
               width:"520px"
                }}></img>

              <h1>Pocket Notes</h1>
               <div>
                 <p>Send and receive messages without keeping your phone online.</p>
                 <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
              </div>
          </div>
          <div className='encryption'>
              <img src={lockImage} alt='lock' style={{
                height:"15px",
                width:"11px"
              }}></img>
              <span>end-to-end encrypted</span>
          </div>
      </div>
    )
}

export default DefaultBackground