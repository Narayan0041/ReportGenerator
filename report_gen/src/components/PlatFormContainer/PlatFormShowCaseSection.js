import React from 'react'

export default function PlatFormShowCaseSection({image ,text}) {
  return (
    <div>
      <div className="PlatFormShowCaseSection">
        <div className="plateFormShowCaseContainer">
            <img src={image} width={350} alt="plateFormShowCaseImage"/>
        </div>
            <h3 className='TypeOfSection'>{text}</h3>
      </div>
    </div>
  )
}
