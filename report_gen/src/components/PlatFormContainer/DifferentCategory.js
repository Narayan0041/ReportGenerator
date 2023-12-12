import React from 'react'

export default function DifferentCategory({text}) {
  return (
    <div>
      <div className="DifferentCategorySection">
        <div className="DifferentCategoryContainer">
            <p>{text}</p>
            <div className='SeprationTwoDiv'></div>
        </div>
      </div>
    </div>
  )
}
