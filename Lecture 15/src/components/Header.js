import React, { useEffect, useState , useLayoutEffect} from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
const Header = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults , setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [scrollPosition, setPosition] = useState();

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  const handleFocus = () => {
    setShowSuggestions(true);
  }
  const handleBlur = () => {
    setShowSuggestions(false);
  }

  function useWindowPosition() {
    useLayoutEffect(() => {
      function updatePosition() {
        setPosition(window.pageYOffset);
      }
      window.addEventListener('scroll', updatePosition);
      updatePosition();
      return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    return scrollPosition;
  }


  useEffect(() => {
    
    let timer = setTimeout(() => {
      timer = getSearchResults();
    },200)

    return () => {
      clearTimeout(timer);
    }
  } , [searchQuery])

  const getSearchResults = async() => {
    console.log( "API CALL - " ,searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
  }
  

  // console.log(searchQuery)
  return (
    <div className='w-full' onScroll={useWindowPosition()}>
        <div className='flex w-1/4'>
            <img onClick={() => toggleMenuHandler()} className='w-9 mr-7 h-10 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/2976/2976215.png" alt="menu-icon" />
            <div className='flex cursor-pointer'>
              <img className='w-9 mr-1 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube-icon" />
              <p className='mt-1 text-xl font-bold'>Youtube</p>
            </div>
        </div>
        <div className='flex align-top mb-1 -my-8 justify-center'>
            <div className='flex w-[50rem] ml-40'>
            <input onBlur={handleBlur} onFocus={handleFocus} onChange={(e) => setSearchQuery(e.target.value)} className='w-8/12 border-2 border-black rounded-l-full pl-5' type="text" placeholder='Search' />
            <span className=' border-2 cursor-pointer w-12 border-black rounded-r-full'> <img className='w-5 mt-2 ml-3' src="https://cdn-icons-png.flaticon.com/512/482/482631.png" alt="search-icon" /> </span>
            </div>
            <div className='flex'>
              <img className='w-9 mr-5 cursor-pointer' src="https://cdn-icons-png.flaticon.com/512/5697/5697997.png" alt="add-video-icon" />
              <img className='w-9 cursor-pointer mr-5' src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png" alt="notification-icon" />
              <img className='w-9 cursor-pointer mr-5' src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="profile-icon" />
            </div>
        </div>
       {searchResults.length != 0 && showSuggestions && scrollPosition == 0 && <ul className='fixed bg-slate-200 rounded-xl p-2 ml-[21rem] w-[36.5rem]'>
              { searchResults && searchResults.map((searchItem , index) => {
                return <li className='cursor-pointer hover:bg-slate-400 p-2 mb-1.5 flex' key={index}>
                   <img src="https://cdn-icons-png.flaticon.com/512/482/482631.png" className='w-6 mr-2' alt="" />
                   {searchItem}
                </li>
              })}
        </ul>}
        
    </div>
  )
}

export default Header