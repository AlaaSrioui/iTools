var quotes = [
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. -William James",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
    "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. -Albert Schweitzer",
    "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. -Chantal Sutherland",
    "I have not failed. I've just found 10,000 ways that won't work. -Thomas A. Edison",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. -Roy T. Bennett",
    "Challenges are what make life interesting and overcoming them is what makes life meaningful. -Joshua J. Marine",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "You miss 100% of the shots you don't take. -Wayne Gretzky",
    "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
    "Success is stumbling from failure to failure with no loss of enthusiasm. -Winston S. Churchill",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. -Jimmy Dean",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. -Zig Ziglar"
  ];
  
  var quoteEl = document.getElementById("quote")
  //declaration of our paragraph which has an id of "quote" so we can use it in js without typing all the "document.getElem.." each time we needed it

  function randomizer(){
    var randomIndex = Math.floor(Math.random() * quotes.length)
    var randomQuote = quotes[randomIndex]
    quoteEl.textContent = randomQuote
    return quoteEl.textContent
  }
  //randomizer function does the job of picking a quote randomly each time we invoke it(press the button that invokes it)
