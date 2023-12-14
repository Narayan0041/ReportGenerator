import React from 'react'

export default function ReviewCards({Review ,image ,mentorName ,course ,rating}) {
  return (
    <>
      <div className="ReviewCardSection">
        <div className="ReviewCardContainer">
            <div className="ReviewCard">
                <div>
                  <h1>“”</h1>    
                <p>{Review}</p>
                </div>
                <div className='ReviewCardMentorDetail'>
                  <div>
                    <img src={image} width={20} alt='mentorImage'/>
                  </div>
                  <div className='mentorDetail'>
                    <h4 className='mentorName'>{mentorName}</h4>
                    <p className='rating'><ispan className="fa-solid fa-star"></ispan><span className="fa-solid fa-star"></span><span className="fa-solid fa-star"></span>{rating}<i className="fa-solid fa-star-half"></i></p>
                    <h5>{course}</h5>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
