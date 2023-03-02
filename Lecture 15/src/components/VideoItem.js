import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/navSlice';
const VideoItem = ({item}) => {
  // console.log(item)
    const dispatch = useDispatch();
    const closeMenuHandler = () => {
      dispatch(closeMenu());
    }

    const {snippet , statistics , contentDetails} = item;
    const {title , channelTitle} = snippet;
    const {viewCount} = statistics;
    const {duration} = contentDetails;


    // "PT10M6S"

  return (
    <div onClick={() => closeMenuHandler()} className='h-72 w-52 block mr-3  bg-slate-100 shadow-lg mt-2'>
        <img className='rounded-xl' src={item?.snippet?.thumbnails?.medium?.url} alt="" />
        <p> {title} </p>
        <p> {channelTitle} </p>
        <p> {viewCount} views </p>
        {/* {duration.includes('H') && duration.includes("S") && duration.includes("M") && <p> {duration.slice(2).replace('M' , ":").replace("H" , ":").replace("S" , "")} </p> } */}
        {duration.includes("S") && duration.includes("M") && ((duration.indexOf("M") == 4) && (duration.indexOf("S") == 7)) ? <p> {duration.slice(2).replace('M' , ":").replace("S" , "")} </p> : ((duration.indexOf('M') == 3 ) && (duration.indexOf('S') == 6)) ? <p> {duration.slice(2).replace('M' , ":").replace("S" , "")} </p> : ((duration.indexOf('M') == 4 ) && (duration.indexOf('S') == 6)) ? <p> {duration.slice(2).replace('M' , ":0").replace("S" , "")} </p> : <p> {duration.slice(2).replace('M' , ":0").replace("S" , ":0")} </p> }
        {/* {duration.includes("S") && duration.includes("M") && duration.length > 7 ? <p> {duration.slice(2).replace('M' , ":").replace("S" , "")} </p> : <p> {duration.slice(2).replace('M' , ":0").replace("S" , "")} </p> } */}

        {/* <p> {duration.slice(2).replace('M' , ":").replace("H" , ":").replace("S" , "")} </p> */}
        {/* <p> {item?.snippet?.publishedAt} </p> */}
        {/*  https://stackoverflow.com/questions/15596753/how-do-i-get-video-durations-with-youtube-api-version-3#:~:text=php%20function%20getDuration(%24videoID,VidDuration%5B'items'%5D%20as%20%24 */}
        {/* Refer above link to convert duration in minutes and seconds */}
    </div>
  )
}

export default VideoItem