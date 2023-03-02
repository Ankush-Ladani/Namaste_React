import React from 'react'
import { useSelector } from 'react-redux';
import store from '../utils/store';
import ButtonGroup from './ButtonGroup';
import VideoContainer from './VideoContainer';

const MainContainer = () => {

  const isMenuOpen = useSelector(store => store.menu.isMenuOpen);

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