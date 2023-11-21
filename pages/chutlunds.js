import React from 'react'
import { scrapeVideos } from '../spangbang';

export default function Chutunds({ video_collection, pages, desiVideosDataArray, desiMmsVideoArray }) {
    return (
        <div>{JSON.stringify(video_collection)}</div>
    )
}



export async function getServerSideProps({ req, res }) {



    const parcelData = { href: "https://spankbang.party/" }
    const rawResponse = await fetch(`https://sheppards-orpin.vercel.app/api/spangbang/homepage`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(parcelData),
    });
    const ress = await rawResponse.json();;
    const finalDataArray_Arrar=ress.finalDataArray;
  
  
    var desiVideosDataArray = []
    const obj = await scrapeVideos(`https://spankbang.party/s/desi%20sex%20videos/?o=all`)
    desiVideosDataArray = obj.finalDataArray
  
    var desiMmsVideoArray = []
    const obj2 = await scrapeVideos(`https://spankbang.party/s/desi%20mms/?o=all`)
    desiMmsVideoArray = obj2.finalDataArray
  
  
  
    return {
      props: {
        video_collection: finalDataArray_Arrar,
        desiVideosDataArray: desiVideosDataArray,
        desiMmsVideoArray: desiMmsVideoArray
      }
    }
  
  
  
  }