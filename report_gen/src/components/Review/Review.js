import React from 'react'
import ReviewSlider from './ReviewSlider'

export default function Review() {
  return (
    <>
      <div className="ReviewSection">
        <div className="ReviewContainer">
            <p className='text'>Loved &</p>
            <p className='text'>Trusted</p>
            <p className='text'>By</p>
            <ReviewSlider/>
        </div>
      </div>
    </>
  )
}
