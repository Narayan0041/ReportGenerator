import React from 'react'
import GetStartButton from '../common/GetStartButton'

export default function GetStartComponent() {
  return (
    <>
      <div className="GetStartSection">
        <div className="GetStartContainer">
            <h1>Begin crafting your destiny</h1>
            <h4>Empower your progress. Generate comprehensive reports effortlessly with our dynamic website</h4>
            <GetStartButton Text={"Get started now"}/>
        </div>
      </div>
    </>
  )
}
