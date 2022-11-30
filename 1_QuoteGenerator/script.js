//When you click on the “Generate” button, you should see a new random quote and the corresponding author.

const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: "Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: "Tyne Daly"
    }
  ];

  const btn = document.createElement('button')
  const parentContainer = document.createElement('div')
  const quoteContainer = document.createElement('div')

  document.body.appendChild(parentContainer)
  document.body.style.display = 'flex'
  document.body.style.justifyContent = 'center'
  document.body.style.alignItems = 'center'
  document.body.style.height = '100vh'
  document.body.style.backgroundColor = 'brown'

  parentContainer.appendChild(quoteContainer)
  parentContainer.appendChild(btn)
  parentContainer.style.width = '400px'
  parentContainer.style.height = '400px'
  parentContainer.style.backgroundColor = 'gray'
  parentContainer.style.display = 'flex'
  parentContainer.style.flexDirection = 'column'
  parentContainer.style.justifyContent = 'center'
  parentContainer.style.alignItems = 'center'
  parentContainer.style.padding = '10px'

  quoteContainer.style.textAlign = 'center'

  btn.innerHTML = 'Generate'
  btn.style.width = '150px'
  btn.style.height = '50px'
  btn.style.borderRadius = '5px'
  btn.style.color = 'white'
  btn.style.backgroundColor = 'green'



btn.addEventListener('click', () => {
    let index = Math.floor(Math.random() * quotes.length)
    
    quoteContainer.innerHTML = quotes[index].quote + '  -' + quotes[index].author
}) 


