const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { text: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "If you want to achieve greatness, stop asking for permission.", author: "Anonymous" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { text: "Work hard in silence, let your success be your noise.", author: "Frank Ocean" },
  { text: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { text: "Sometimes later becomes never. Do it now.", author: "Unknown" }
]


const quote = document.getElementById("quote")
const author = document.getElementById("author-name")
const btn = document.querySelector("button")


btn.addEventListener("click", ()=>{
    const idx = Math.floor(Math.random()*20)
    const elementObj = quotes[idx]
    quote.textContent = elementObj.text
    author.textContent = `~ ${elementObj.author}`
})
