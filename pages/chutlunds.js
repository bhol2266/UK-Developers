import React from 'react'
import { scrapeVideos } from '../spangbang';

export default function Chutunds({ finalDataArray }) {
  return (
    <div>{JSON.stringify(finalDataArray)}</div>
  )
}



export async function getServerSideProps({ req, res }) {



  var finalDataArray = []
  var pages = []



  console.log(`https://spankbang.party/`)
  const obj = await scrapeVideos(`https://spankbang.party/`)
  finalDataArray = obj.finalDataArray
  pages = obj.pages


  return {
    props: {
      finalDataArray: finalDataArray,
      pages: pages
    }
  }


}