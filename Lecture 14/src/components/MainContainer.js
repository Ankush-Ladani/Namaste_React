import React from 'react'
import ButtonGroup from './ButtonGroup';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <>
        <div className='ml-6'>
            <div className='flex ml-6'>
                <ButtonGroup />
                <img src="https://cdn-icons-png.flaticon.com/512/709/709586.png" className='w-8 cursor-pointer h-8 bg-slate-300 rounded-full p-2' alt="" />
            </div>
            <VideoContainer />
        </div>
    </>
  )
}

export default MainContainer;