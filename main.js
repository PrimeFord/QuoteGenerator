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
    Quote: 'God save me from my friends. I can protect myself from my enemies.',
    Author: 'Claude Louis Hector De Villars'
},
{
    Quote: 'Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we have got',
    Author: 'life'
},
{
    Quote: 'The price of anything is the amount of life you exchange for it.',
    Author: 'David Thoreau'
},
{
    Quote: 'Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.',
    Author: 'Charles Lindbergh'
},
{
    Quote: 'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
    Author: 'Tyne Daly'
},
{
    Quote: 'Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all',
    Author: 'John Kenneth Galbraith'
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
