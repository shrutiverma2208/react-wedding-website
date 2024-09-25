import React from 'react'
import ganpatiji from "./ganpatiji.mp4"


const Video = () => {
  return (
    <div style={{backgroundColor:'#5d6e5d'}}>
         
      <video  style={{ height:'100%',width: '100%'}}
         src={ganpatiji}
         autoPlay
         muted
         loop
         controls={false}
         />
       
        
      
    </div>
  )
}

export default Video