import React from 'react'
import PlatFormHeader from './PlatFormHeader'
import PlatFormInsertData from './PlatFormInsertData'

export default function PlatForm() {
    return (
        <div>
            <PlatFormHeader/>
            <div className='showCase'>
            <PlatFormInsertData />
            </div>
        </div>
    )
}
