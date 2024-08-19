import * as cheerio from 'cheerio';
import { Scrape_Video_Item } from './Scrape_Video_Item';


export const scrapeVideos = async (url) => {

    
    var finalDataArray = []
    var pages = []




    const response = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        }
    });

    const body = await response.text();
    const $ = cheerio.load(body);

    // console.log(body);
    

    
    finalDataArray= Scrape_Video_Item($)

 


    $('.paginate-bar .status').each((i, el) => {
        const data = $(el).text().replace("page", '')
        pages = data.split('/')
    })



    if (pages.length === 0) {
        //This is for pornstar page bacause the pornstar page is not updated to new 
        let tempArray = []
        $('.pagination ul li').each((i, el) => {
            const data = $(el).text()
            tempArray.push(data)

        })
        if (tempArray.length !== 0) {
            pages.push(tempArray[1])
            pages.push(tempArray[tempArray.length - 2])
        }
    }

  
   
    return { finalDataArray: finalDataArray, pages: pages ,body:body}
}


