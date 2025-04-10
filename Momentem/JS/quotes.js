const quotes = [
  {quote: "Believe you can and you're halfway there.",
    author : "Theodore Roosevelt",
  },
  {quote: "It always seems impossible until it’s done.",
    author : "Nelson Mandela",
  },
  {quote: "Don’t watch the clock; do what it does. Keep going.",
    author : "Sam Levenson",
  },
  {quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author : "Winston Churchill",
  },
  {quote: "Start where you are. Use what you have. Do what you can.",
    author : "Arthur Ashe",
  },
  {quote: "Every day may not be good, but there is something good in every day.",
    author : "Alice Morse Earle",
  },
  {quote: "You miss 100% of the shots you don't take.",
    author : "Wayne Gretzky",
  },
  {quote: "Happiness is not something ready made. It comes from your own actions.",
    author : "Dalai Lama",
  },
  {quote: "In the middle of every difficulty lies opportunity.",
    author : "Albert Einstein",
  },
  {quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author : "Franklin D. Roosevelt",
  },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDayQuotes.quote;
author.innerText = `—${toDayQuotes.author}`;