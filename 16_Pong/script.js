const canvas = document.querySelector('canvas');
canvas.width = 64 * 18 
canvas.height = 64 * 9 
const playerOneScore = document.querySelector('#player-one-score')
const playerTwoScore = document.querySelector('#player-two-score')
const ctx = canvas.getContext('2d');
class Player {
    constructor(x, y, color, width, height, velocity) {
        this.x = x; 
        this.y = y; 
        this.color = color;
        this.width = width;
        this.height = height;
        this.velocity = {
            y: 0
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    update() {
        this.draw();
        if (this.y + this.velocity.y >= 0 && this.y + this.height + this.velocity.y <= canvas.height) {
            this.y += this.velocity.y
        }
    }
}
class Ball {
    constructor(x, y, color, radius, velocity) {
        this.x = x; 
        this.y = y; 
        this.color = color;
        this.radius = radius;
        const direction = {
            x: Math.random() - 0.5 >= 0 ? -1 : 1,
            y: Math.random() - 0.5 >= 0 ? -1 : 1,
        }
        this.velocity = {
            x: direction.x * 8,
            y: direction.y * 8
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill()
    }

    update() {
        this.draw();

        if (this.y + this.radius >= canvas.height || this.y - this.radius <=0) {
            this.velocity.y = -this.velocity.y
        }

        this.x += this.velocity.x
        this.y += this.velocity.y 
    }
}
class Net {
    constructor (y) {
        this.y = y
    }

    draw() {
        ctx.fillStyle = 'black'
        ctx.fillRect(canvas.width / 2, this.y, 2.5, 50)
    }

    update() {
        this.draw()
    }
}

let playerOne = new Player(5, canvas.height / 2 - 50, 'blue', 10, 100, 0)
let playerTwo = new Player(canvas.width - 15, canvas.height / 2 - 50, 'red', 10, 100, 0)
let ball = new Ball(canvas.width / 2, canvas.height / 2, 'black', 10, 0)
let net1 = new Net(0)
let net2 = new Net(75)
let net3 = new Net(75 * 2)
let net4 = new Net(75 * 3)
let net5 = new Net(75 * 4)
let net6 = new Net(75 * 5)
let net7 = new Net(75 * 6)
let net8 = new Net(75 * 7)

let scoreOne = 0
let scoreTwo = 0

function gameOver() {
    ball = new Ball(canvas.width / 2, canvas.height / 2, 'black', 10, 0)  
}

function playerOneHasScored() {
    scoreOne += 1
    playerOneScore.innerHTML = scoreOne
}

function playerTwoHasScored() {
    scoreTwo += 1
    playerTwoScore.innerHTML = scoreTwo
}

function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    playerOne.update()
    playerTwo.update()
    ball.update()
    net1.update()
    net2.update()
    net3.update()
    net4.update()
    net5.update()
    net6.update()
    net7.update()
    net8.update()

    //collision detection between ball and players
    if (ball.y - ball.radius + ball.velocity.y <= playerOne.y + playerOne.height && ball.y + ball.radius + ball.velocity.y >= playerOne.y && ball.x - ball.radius + ball.velocity.x <= playerOne.x + playerOne.width || ball.y - ball.radius + ball.velocity.y <= playerTwo.y + playerTwo.height && ball.y + ball.radius + ball.velocity.y >= playerTwo.y && ball.x + ball.radius + ball.velocity.x >= playerTwo.x) {
        ball.velocity.x = -ball.velocity.x
    }

    if (ball.x + ball.radius >= canvas.width) {
        playerOneHasScored()
        gameOver()
    } else if (ball.x - ball.radius <= 0) {
        playerTwoHasScored()
        gameOver()
    }
}

animate()

addEventListener('keydown', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'w':
            playerOne.velocity.y = -7
            break
        case 's':
            playerOne.velocity.y = 7
            break
        case 'ArrowUp':
            playerTwo.velocity.y = -7
            break
        case 'ArrowDown':
            playerTwo.velocity.y = 7
            break
    }
})

addEventListener('keyup', (event) => {
    console.log(event.key)
    switch (event.key) {
        case 'w':
            playerOne.velocity.y = 0
            break
        case 's':
            playerOne.velocity.y = 0
            break
        case 'ArrowUp':
            playerTwo.velocity.y = 0
            break
        case 'ArrowDown':
            playerTwo.velocity.y = 0
            break
    }
})

