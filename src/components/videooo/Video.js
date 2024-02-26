import React from 'react'
import ganesh from "./ganesh.mp4"

const Video = () => {
  return (
    <div style={{backgroundColor:'#5d6e5d'}}>
         
      <video  style={{ height:'100vh',width: '-webkit-fill-available'}}
         src={ganesh} 
         autoPlay
         muted
         loop
         controls
         />
       
        
      
    </div>
  )
}

export default Video