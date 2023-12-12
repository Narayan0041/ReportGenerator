import React from 'react'
import { showCaseList } from './PlateFormListsShowCase'
import PlatFormShowCaseSection from './PlatFormShowCaseSection';

export default function PlatFormInsertData() {
  let ArrayOfData = showCaseList.showCase.data;
  return (
    ArrayOfData.map((data) => {
      return (
        <>
            <PlatFormShowCaseSection image={data.image}  text={data.text}/>
        </>
      )
    })
  )
}
