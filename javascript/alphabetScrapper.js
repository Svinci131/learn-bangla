var request = require("request"),
  cheerio = require("cheerio"),
  // url="https://en.wikibooks.org/wiki/Bengali/Sounds"
  //http://www.lexilogos.com/keyboard/bengali.htm
  
url = "https://en.wikipedia.org/wiki/Bengali_alphabet"

request(url, function (error, response, body) {
	console.log("hello")
  if (!error) {
    var $ = cheerio.load(body),

    // table = $("th").each(function (el) {
    // 	el = $(el)
    // 	console.log(el)
    // 	//get the head and each col text by order
    // });
   // console.log(table)
    table = $('.wikitable').children().each(function(el){
    	console.log("here", (el))
    })
    //not the first 

    // word = $(".word-and-pronunciation h1").html();
    // def = $(".definitions-page .card-box p").html()
      
    
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});
