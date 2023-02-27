import React from 'react'

const VideoItem = ({item}) => {
    // console.log(item)
  return (
    <div className='w-3/12 h-90'>
        <img className='rounded-xl' src={item?.snippet?.thumbnails?.medium?.url} alt="" />
        <p> {item?.snippet?.title} </p>
        <p> {item?.snippet?.channelTitle} </p>
        <p> {item?.statistics?.viewCount} views </p>
        <p> {item?.snippet?.publishedAt} </p>
        {/*  https://stackoverflow.com/questions/15596753/how-do-i-get-video-durations-with-youtube-api-version-3#:~:text=php%20function%20getDuration(%24videoID,VidDuration%5B'items'%5D%20as%20%24 */}
        {/* Refer above link to convert duration in minutes and seconds */}
        <p> {item?.contentDetails?.duration} -  </p>
    </div>
  )
}

export default VideoItem