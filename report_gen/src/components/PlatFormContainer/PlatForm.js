import React from 'react'
import PlatFormHeader from './PlatFormHeader'
import PlatFormInsertData from './PlatFormInsertData'
import InsertDifferentValue from './InsertDifferentValue'

export default function PlatForm() {
    return (
        <div>
            <PlatFormHeader/>
            <div className='showCase'>
            <PlatFormInsertData />
            </div>
            <div className='DifferentCategory'>
            <InsertDifferentValue/>
            </div>
        </div>
    )
}
