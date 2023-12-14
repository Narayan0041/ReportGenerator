import React from 'react'

export default function GetStartButton({Text ,icon}) {
  return (
    <div className='GetStartButton'>
      <button><span className="fa-solid fa-arrow-trend-up"></span>{Text} <span className={icon}></span></button>
    </div>
  )
}
