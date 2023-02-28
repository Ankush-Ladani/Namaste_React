import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';
const Header = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }
  return (
    <div className='flex w-full'>
        <div className='flex w-1/4'>
            <img onClick={() => toggleMenuHandler()} className='w-9 mr-7 h-10 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="menu-icon" />
            <div className='flex cursor-pointer'>
              <img className='w-9 mr-1 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube-icon" />
              <p className='mt-1 text-xl font-bold'>Youtube</p>
            </div>
        </div>
        <div className='flex  w-11/12 ml-40'>
            <input className='w-8/12 border-2 border-black rounded-l-full pl-5' type="text" placeholder='Search' />
            <span className='border-2 cursor-pointer w-12 border-black rounded-r-full'> <img className='w-5 mt-2 ml-3' src="https://cdn-icons-png.flaticon.com/512/482/482631.png" alt="search-icon" /> </span>
        </div>
        <div className='flex w-96'>
            <img className='w-9 mr-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/5697/5697997.png" alt="add-video-icon" />
            <img className='w-9 cursor-pointer mr-5' src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png" alt="notification-icon" />
            <img className='w-9 cursor-pointer mr-5' src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="profile-icon" />
        </div>
    </div>
  )
}

export default Header