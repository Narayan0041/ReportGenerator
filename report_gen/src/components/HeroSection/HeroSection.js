import React from 'react'
import HeroImage from './HeroImage'
import HeroTextSection from './HeroTextSection'

export default function HeroSection() {
    return (
        <div>
            <div className="HeroPageConatiner">
                <div className="HeroPageSection">
                    <div className='HeroPageTextContent'>
                        <HeroTextSection />
                    </div>
                    <div className='HeroPageImageContent'>
                        <HeroImage />
                    </div>

                </div>
            </div>
        </div>
    )
}
