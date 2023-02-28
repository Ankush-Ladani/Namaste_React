import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const [params] = useSearchParams();
  // console.log(params.get('v'));

   
  return (
    <div>
        <iframe width="942" height="530" src={"https://www.youtube.com/embed/"+params.get('v')+"?autoplay=1"}  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage;