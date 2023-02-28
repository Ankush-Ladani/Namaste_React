import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_API_URL } from '../utils/constants';
import Shimmer from '../utils/Shimmer';
import VideoItem from './VideoItem';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  } , [])



  const getVideos = async() => {
    const data = await fetch(YOUTUBE_API_URL);

    const json = await data?.json();
    setVideos(json?.items);
  }
  

  return (
    <div className='flex ml-6 flex-wrap w-auto mt-8'>
        {/* <VideoItem item={videos[0]} /> */}
        {videos.length == 0 ? (
          <Shimmer /> 
        ) :
        (
          videos.map((video) => {
            return (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                  <VideoItem  item={video} />
                </Link>
            )
        })
        )}
        
    </div>
  )
}

export default VideoContainer



