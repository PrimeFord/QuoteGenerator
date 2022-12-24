const QuoteArray = [
  {
    quote: "Take your chances an stay consistent",
    author: "Prime Senpai",
  },
  {
    quote: "Don't Try to keep your hands clean",
    author: "Eren Yeager",
  },
  {
    quote:
      "Time doesn't heal anything it just teaches us how to live with pain",
    author: "Itachi Uchiha",
  },
  {
    quote: "Never trust anyone too much, remember the evil was once an angel",
    author: "Madara Uchiha",
  },
  {
    quote: "Love is not necessary, Power is the only true necessity",
    author: "Kaneki Ken",
  },
  {
    quote: "Love gives birth to sacrifice",
    author: "Obito Uchiha",
  },
  {
    quote: "Love is not necessary, Power is the only true necessity",
    author: "Madara Uchiha",
  },
  {
    quote: "This world is rotten and those who are making it rot eserve to die",
    author: "Light Yagami",
  },
  {
    quote:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: "Author",
  },
];
const btn = document.querySelector("input");
const span = document.querySelector("span");
const author = document.querySelector(".foot");

btn.addEventListener(
  "click",
  (randomQuote = () => {
    let rand = Math.floor(Math.random() * QuoteArray.length);
    let randQ = QuoteArray[rand];
    span.textContent = randQ.quote;
    author.textContent = randQ.author;
  })
);
