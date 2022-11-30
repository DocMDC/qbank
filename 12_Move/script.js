const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

const x = canvas.width / 2
const y = canvas.height / 2

class Player {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
            x: 0,
            y: 0
        }
    }

    draw () {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill()
        ctx.restore();
    }

    update () {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

const player = new Player(x, y, 10, 'black')
player.draw()

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    s: {
        pressed: false
    }
}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()


    if (keys.a.pressed && player.x - player.radius >= 0) {
        player.velocity.x = -7
    } else if (keys.d.pressed && player.x + player.radius <= canvas.width) {
        player.velocity.x = 7
    } else {
        player.velocity.x = 0
    }

    if (keys.w.pressed && player.y - player.radius >= 0) {
        player.velocity.y = -7
    } else if (keys.s.pressed && player.y + player.radius <= canvas.height) {
        player.velocity.y = 7
    } else {
        player.velocity.y = 0
    }
}

/* --------------------- PLAYER MOVEMENT --------------------- */


window.addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'a':
            keys.a.pressed = true;
            break;
        case 's':
            keys.s.pressed = true;
            break
        case 'd':
            keys.d.pressed = true;
            break;
        case 'w':
            keys.w.pressed = true;
            break;
    }
})

window.addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break
        case 'd':
            keys.d.pressed = false;
            break;
        case 'w':
            keys.w.pressed = false;
            break;
    }
})

animate();