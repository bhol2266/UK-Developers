import * as cheerio from 'cheerio';
import { useRouter } from "next/router";
import { BeatLoader } from 'react-spinners';

import { Scrape_Video_Item } from "../../../../Scrape_Video_Item";

function Index({ body}) {



    const router = useRouter();


    if (router.isFallback) {
        return (
            <div className="flex justify-center mx-auto mt-10 ">
                <BeatLoader loading size={25} color={'#232b2b'} />
            </div>
        )
    }




    return (
        <>
            {/* <p>  {channel_name}</p>
            <p>  {channel_link}</p>
            <p>  {channel_subscriber}</p>
            <p>  {channel_by}</p> */}

            <p className='my-10'>  {body}</p>




        </>
    )
}

export default Index


// export async function getStaticPaths() {
//     return {
//         paths: [
//             {
//                 params: {
//                     code: 'l3',
//                     channelname: 'kink+com'
//                 }
//             }
//         ],
//         fallback: true // false or 'blocking'
//     };
// }





export async function getServerSideProps(context) {

    const { code, channelname } = context.params;

    var finalDataArray = []
    var pages = []
    var channel_name = ""
    var channel_subscriber = ""
    var channel_by = ""
    var channel_link = ""
    var collageImages = []
    var bodyHTMl=""

    const scrape = async (url) => {



        const response = await fetch(url)
        const body = await response.text();
        const $ = cheerio.load(body)
        bodyHTMl=body

        

        finalDataArray = Scrape_Video_Item($)


        let tempArray = []
        $('.pagination ul li').each((i, el) => {
            const data = $(el).text()
            tempArray.push(data)

        })
        if (tempArray.length !== 0) {
            pages.push('1')
            pages.push(tempArray[tempArray.length - 2])
        }


        channel_link = $('.cta_container a').attr('href');




        $('.channel-info h1').each((i, el) => {
            channel_name = $(el).text().replace("Channel", "")
        })
        $('span em').each((i, el) => {
            channel_subscriber = $(el).text()
        })

        const secondSpan = $('.i span').eq(1);
        channel_by = secondSpan.find("a").text()



        if (finalDataArray.length > 0) {
            const maxImages = Math.min(finalDataArray.length, 18);

            // Add up to 18 images from finalDataArray to collageImages
            for (let index = 0; index < maxImages; index++) {
                const { thumbnail } = finalDataArray[index];
                collageImages.push(thumbnail);
            }

            // If we have less than 18 images, randomly repeat to fill up to 18
            while (collageImages.length < 18) {
                const randomIndex = Math.floor(Math.random() * finalDataArray.length);
                const { thumbnail } = finalDataArray[randomIndex];
                collageImages.push(thumbnail);
            }
        }

    }

    await scrape(`https://spankbang.party/${code}/channel/${channelname}/?o=long`)

    return {
        props: {
            body:bodyHTMl
        }
    }
}



