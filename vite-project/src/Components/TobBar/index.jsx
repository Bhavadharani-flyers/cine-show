import React from 'react'

const TopBar = ({ScreenSubtitle,ScreenTitle})  => {
  return (
    <div className='box-border border bg-[#075985] w-full'>
      <p className='text-white text-lg text-center font-bold'>{ScreenTitle}</p>
      <p className='text-[#94a3b8] text-base text-center'>{ScreenSubtitle}</p>
    </div>
  )
}

export default TopBar
