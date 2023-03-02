import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Body from './Body'
import store from '../utils/store';
import SidebarItem from './SidebarItem'

const SideBar = () => {

  const isMenuOpen = useSelector(store => store.menu.isMenuOpen);

  if(!isMenuOpen){
    return null;
  }

  return (
    <div className='mt-8'>
      <ul>
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" alt="home-icon" />
          <p className='mt-1 ml-6'>Home</p>
        </li> */}
        {/* <li className='flex  pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/7887/7887862.png" alt="shorts-icon" />
          <p className='mt-1 ml-6'>Shorts</p>
        </li> */}
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/2989/2989849.png" alt="subscription-icon" />
          <p className='mt-1 ml-6'>Subscriptions</p>
        </li> */}
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/2989/2989835.png" alt="library-icon" />
          <p className='mt-1 ml-6'>Library</p>
        </li> */}
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" alt="history-icon" />
          <p className='mt-1 ml-6'>History</p>
        </li> */}
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/9458/9458328.png" alt="your-videos-icon" />
          <p className='mt-1 ml-6'>Your videos</p>
        </li> */}
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/992/992700.png" alt="watch-later-icon" />
          <p className='mt-1 ml-6'>Watch later</p>
        </li> */}
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/3502/3502477.png" alt="downloads-icon" />
          <p className='mt-1 ml-6'>Downloads</p>
        </li> */}
        {/* <li className='flex pl-2 pt-1 pb-1'>
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/126/126473.png" alt="liked-icon" />
          <p className='mt-1 ml-6'>Liked videos</p>
        </li> */}
        <Link to="/">
          <SidebarItem link="https://cdn-icons-png.flaticon.com/512/1946/1946436.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Home"  altValue="home-icon"  />
        </Link>
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/7887/7887862.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Shorts"  altValue="shorts-icon"  />
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/2989/2989849.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Subscriptions"  altValue="subscription-icon"  />
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/2989/2989835.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Library"  altValue="library-icon"  />
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/2961/2961948.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="History"  altValue="history-icon"  />
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/9458/9458328.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Your videos"  altValue="your-videos-icon"  />
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/992/992700.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Watch later"  altValue="watch-later-icon"  />
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/3502/3502477.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Downloads"  altValue="downloads-icon"  />
        <SidebarItem link="https://cdn-icons-png.flaticon.com/512/126/126473.png" liStyle="flex pl-2 pt-1 pb-1"  pStyle="mt-1 ml-6"  imgStyle='w-8' pValue="Liked videos"  altValue="liked-icon"  />
        <li className='flex pl-2 pt-1 pb-1'>
          <button className='flex'> <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png" alt="down-arrow" /> <span>Show more</span> </button>
        </li>
      </ul>
    </div>
  )
}

export default SideBar