import React from 'react'

export default function GetStartButton({Text ,icon}) {
  return (
    <div className='GetStartButton'>
      <button><span class="fa-solid fa-arrow-trend-up"></span>{Text} <span class={icon}></span></button>
    </div>
  )
}
