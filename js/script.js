/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  { quote: '"Not all those who wander are lost."',
    name: "J.R.R Tolkein,",
    citation: "The Fellowship of the Ring, Book.",
    year: 1954.,
    tags: "Fantasy."
  },
  { quote: "Even the smallest person can change the course of the future.",
    name: "Galadriel.",
    citation: "The Fellowship Of The Ring, Movie.",
     year: 2001.
   } ,
  { quote: "It's a Dangerous Business, Frodo, Going Out Your Door.",
    name: "Frodo Baggins, Quoting Bilbo Baggins.",
    citation: "The Fellowship Of The Ring, Book.",
     year:  2001., 
     tags: "Fantasy."
  },
  { quote: "'There's Some Good in This World, Mr. Frodo, and It's Worth Fighting For.'",
    name: "Samwise Gamgee.",
    citation: "The Two Towers, Movie." ,
     year:  2001.
  } ,
  { quote: '"What About Second Breakfast?"',
    name : "Peregrin Took.",
    tags: "Fantasy."
  }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  return quotes[arrayIndex]
};


/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuotes = getRandomQuote();
  let  displayRandomQuote = "<p class='quote'>" + randomQuotes.quote + "</p>";
       displayRandomQuote += "<p class='source'>" + randomQuotes.source;
        if (quotes.citation) {
            displayRandomQuote += "<span class='citation'>" + randomQuotes.citation + "</span>";
        } else {
          displayRandomQuote += "";
        }
        if (quotes.year) {
            displayRandomQuote += "<span class='year'>" + randomQuotes.year + "</span>";
        } else {
          displayRandomQuote += "";
        } if (quotes.tags) {
          displayRandomQuote += "<p class='tags'>" + randomQoutes.tags + "</p>";
        }
  }

  console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);