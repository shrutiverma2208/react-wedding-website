import React from 'react';

const Mobile = ({ phoneNumber }) => {
  const handleClick = (index) => {
    window.location.href = `tel:${phoneNumber[index]}`;
  };

 
  return (
    <div>
    {phoneNumber.map((phoneNumber, index) => (
        <a style={{color:'#6461eb',textDecoration:'underline',cursor:'pointer'}} key={index} onClick={() => handleClick(index)}>
          {phoneNumber}
        </a>
      ))}
    
    </div>
  );
};

export default Mobile;