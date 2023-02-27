import React from 'react'

const ButtonItem = ({btnValue}) => {
  return (
    <button className='bg-black text-white pl-3 pt-1 pb-1 border-0 pr-3 mr-2 rounded-lg'>{btnValue}</button>
  )
}

export default ButtonItem