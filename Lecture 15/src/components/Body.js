import React from 'react'
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';
const Body = () => {
  return (
    <div className='flex mt-8 w-11/12'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body;