/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/* 
 `quotes` array 
  This creates an array literal and stores object literals within each array item, i.e. quote.

*/

const quotes = [
  { quote: "Not all those who wander are lost",
    source: "Gandalf",
    citation: "J.R.R Tolkein, The Fellowship of the Ring, Book 1 Chapter 10",
    year: "1954.",
  },
  { quote: "Even the smallest person can change the course of the future",
    source: "Galadriel",
    citation: "The Fellowship Of The Ring, Film",
    year: "2001.",
    tags: "Fantasy, Adventure."
   },
  { quote: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
    source: "Frodo Baggins, Quoting Bilbo Baggins",
    citation: "J.R.R Tolkein, The Fellowship Of The Ring, Book 1 Chapter 3",
    year: "1954.", 
  },
  { quote: "There's Some Good in This World, Mr. Frodo, and It's Worth Fighting For.",
    source: "Samwise Gamgee",
    citation: "The Two Towers, Movie",
    year:  "2001.",
    tags: "Classics, Adventure."
  } ,
  { quote: "We've had one, yes. What About Second Breakfast?",
    source: "Peregrin Took",
    citation: "J.R.R Tolkein, The Fellowship of the Ring, Movie",
  }
];


/*
  `getRandomQuote` function
   creates a random array Index number by multiplying a random number greater than 0 but less than one, then multiplying it by the quotes.length (0-4). 
   Then rounding it down to a whole interger. This returns the random quotes array index number.
*/

function getRandomQuote() {
  let arrayIndex = Math.floor(Math.random() * quotes.length);
  return quotes[arrayIndex]
};
/*
  `randomRGB` function
    creates a random r/g/b number by multiplying a random number greater than 0 but less than one, then multiplying it by 256. Then rounding it down to a whole interger.
    returns a random hex number and changes background colour by using the background property in the HTML file.
*/

function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}


/*
  `printQuote` function
  returns the value stored in the quotes array against a html tag by using the getRandomQuote function created above. Using template literals, it displays the value
  against the quote object, i.e. source & quote.
  This message is displayed using the displayRandomQuote variable into the 'quote-box' and a random background colour is created, thanks to the randomRGB function created above.
  The printQuote also tests whether there is year, tag & citation obejcts within the array, if there are printQuote also displays these, if not it displays nothing for these tags.
*/

function printQuote() {
    let randomQuote = getRandomQuote();
    let  displayRandomQuote = `<p class='quote'>${randomQuote.quote}</p>
                             <p class='source'><strong>${randomQuote.source}</strong>`
        if (randomQuote.citation) {
            displayRandomQuote += `<span class="citation">${randomQuote.citation}</span>`;
        }
        if (randomQuote.year) {
            displayRandomQuote += `<span class="year">${randomQuote.year}</span>`;
        } if (randomQuote.tags) {
          displayRandomQuote += `<span class='tags'><i> ${randomQuote.tags}<i></span></p>`;
        }
        document.getElementById('quote-box').innerHTML = displayRandomQuote;
        randomRGB();
  }

 
// prints a random quote every 5500 milliseconds.
setInterval (printQuote, 5500);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);