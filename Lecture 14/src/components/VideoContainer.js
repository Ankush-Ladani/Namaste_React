import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoItem from './VideoItem';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  } , [])



  const getVideos = async() => {
    const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + "AIzaSyAeIG1Bvmz6nVlcpboYG4ZYxcLHGPuNeTM");

    const json = await data?.json();
    setVideos(json?.items);
  }
  return (
    <div className='flex flex-wrap w-auto mt-8'>
        {/* <VideoItem item={videos[0]} /> */}
        {videos.map((video) => {
            return (
                <VideoItem  item={video} />
            )
        })}
    </div>
  )
}

export default VideoContainer



