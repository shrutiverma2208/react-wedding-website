import React from 'react';



const GoogleMapLink = () => {

  return (
    <>
   <h4 style={{color:'#269b76',textAlign:'center',padding:'20px'}}>Seema Guest House</h4>
   
    <iframe style={{width:"100%", height:"70%",alignItems:'center', loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.9948497913215!2d80.31851357586653!3d26.423642780936206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47aa622866a5%3A0xc490e6d65dfba0e5!2sSeema%20Guest%20House!5e0!3m2!1sen!2sin!4v1708969685179!5m2!1sen!2sin" ></iframe>
    </>
  );
};

export default GoogleMapLink ;