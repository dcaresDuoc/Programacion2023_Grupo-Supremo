import React from 'react'
import {getSvg} from '../utils/getSvg'

const HomeLoading = () => {
  return (
    <>
    <div className='flex justify-center mb-1 pt-40 text-gray-500'>Delivery to</div>

    <div className='flex justify-center mb-1  text-xl font-bold'>232-112 Nulla ST, Markoto</div>
    <div className='flex justify-center mb-1 text-xl font-bold'>Mississippi 96522</div>
    <div className='flex justify-center mb-1'>{getSvg({
        type: "desing1"
    })}</div>
    
    </>
    
  )
}

export default HomeLoading