const canvas = document.querySelector('canvas');
canvas.width = 64 * 16 //1024;
canvas.height = 64 * 9 //576;

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
        this.y += this.velocity.y
    }
}

class Enemy {
    constructor(x, y, color, width, height, velocity) {
        this.x = x; 
        this.y = y; 
        this.color = color;
        this.width = width;
        this.height = height;
        this.velocity = velocity
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    update() {
        this.draw();
    }
}

class Ball {
    constructor(x, y, color, radius, velocity) {
        this.x = x; 
        this.y = y; 
        this.color = color;
        this.radius = radius;
        this.velocity = velocity
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill()
    }

    update() {
        this.draw();
    }
}

const player = new Player(25, 100, 'blue', 10, 100, 0)
const enemy = new Enemy(canvas.width - 25, 100, 'red', 10, 100, 0)
const ball = new Ball(canvas.width / 2, canvas.height / 2, 'green', 20, 0)

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate)
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    player.update()
    enemy.update()
    ball.update()
 
    
    player.velocity.y = 0
    if (keys.w.pressed && player.y + player.velocity.y >= 0) player.velocity.y = -7
    else if (keys.s.pressed && player.y + player.height + player.velocity.y <= canvas.height) player.velocity.y = 7
    
}

animate()

/*
addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w': player.velocity.y = 0
        break;
        case 's': player.velocity.y = 0
        break;
    }
})

addEventListener('keydown', (e) => {
    if (e.key == 'w' && player.y + player.velocity.y >= 0) {
        player.velocity.y = -7
    } else if (e.key == 's' && player.y + player.height + player.velocity.y <= canvas.height) {
        player.velocity.y = 7
    } else {
        player.velocity.y = 0
    }
}) */

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
    }
})