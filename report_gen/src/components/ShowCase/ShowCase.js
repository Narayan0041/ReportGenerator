import React from 'react'
import ShowCaseImageSection from './ShowCaseImageSection'
import ShowCaseCard from './ShowCaseCard'
import ShowCaseHeader from './ShowCaseHeader'

export default function ShowCase() {
    return (
        <div>
            <ShowCaseHeader />
            <div className="ShowCasePageSection">
                <div className='ImageSection'>
                    <ShowCaseImageSection />
                </div>
                <div className='CardsSection'>
                    <ShowCaseCard />
                </div>
            </div>
        </div>
    )
}
