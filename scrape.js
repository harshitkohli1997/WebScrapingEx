
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

url = 'https://pubmed.ncbi.nlm.nih.gov/?term=nfhs%20india&size=200&page=2';


request(url, function(error, response, html){
    if(!error){
        // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
        var $ = cheerio.load(html);
        var title, release, rating;
        let finalArr = [];
        $('.docsum-title').each((index,element) => {
           // console.log(i, link)
    
            finalArr.push({
                index: index+1,
                text:$(element).text()
            })
          });
          fs.writeFile ("input.json", JSON.stringify(finalArr), function(err) {
            if (err) throw err;
            console.log('complete');
            })
    }
})