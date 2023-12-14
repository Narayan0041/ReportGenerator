import React from 'react'
import { DifferentData } from './DifferentPlatFormData'
import DifferentCategory from './DifferentCategory';

export default function InsertDifferentValue() {
   let ArrayListData =DifferentData.data;
  return ( 
        ArrayListData.map((item,index)=>{
return(
    <DifferentCategory text={item.text} key={index} />
)
        })
    
  )
}
