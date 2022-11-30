const canvas = document.getElementById("canvas1")
const c = canvas.getContext("2d")
const undergradModalContainer = document.querySelector(".undergrad-modal-container")
const closeBtn = document.querySelector("#close")
const instructionsModalContainer = document.querySelector(".instructions-modal-container")
const instructionsCloseBtn = document.querySelector("#instructions-close")
const physeoModalContainer = document.querySelector(".physeo-modal-container")
const physeoCloseBtn = document.querySelector("#physeo-close")
const medschoolModalContainer = document.querySelector(".medschool-modal-container")
const medschoolCloseBtn = document.querySelector("#medschool-close")
const residencyModalContainer = document.querySelector(".residency-modal-container")
const residencyCloseBtn = document.querySelector("#residency-close")
const developerModalContainer = document.querySelector(".developer-modal-container")
const developerCloseBtn = document.querySelector("#developer-close")
canvas.width = innerWidth;
canvas.height = innerHeight;


function createLine() {
    c.beginPath();
    c.moveTo(0, canvas.height / 2);
    c.lineTo(canvas.width, canvas.height / 2);
    c.strokeStyle = 'black';
    c.stroke()
    c.closePath();
}


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
        
    draw() {
        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.restore();
    }

    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

class Circle {
    constructor(source, /*sx, sy, sw, sh, */x, y, dw, dh) {
        this.img = new Image();
        this.img.src = source;
       /* this.sx = sx;
        this.sy = sy;
        this.sw = sw;
        this.sh = sh; */
        this.x = x;
        this.y = y;
        this.dw = dw;
        this.dh = dh;
    }

    draw() {
        c.drawImage(this.img, /*this.sx, this.sy, this.sw, this.sh, */this.x, this.y, this.dw, this.dh);
    }
}

const friction = 0.99

class Particle {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
        this.alpha = 1;
    }

    draw() {
        c.save();
        c.globalAlpha = this.alpha;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.restore();
    }

    update() {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
        this.alpha -= 0.01;
    }
}

const undergradCircle = new Circle('Assets/Imgs/undergrad.svg', canvas.width / 6.2, canvas.height / 2.5, 200, 200);
const medSchoolCircle = new Circle('Assets/Imgs/medschool.svg', canvas.width / 2.9, canvas.height / 2.5, 200, 200);
const physeoCircle = new Circle('Assets/Imgs/physeo.svg', canvas.width / 1.89, canvas.height / 2.5, 200, 200);
const residencyCircle = new Circle('Assets/Imgs/residency.svg', canvas.width / 1.4, canvas.height / 2.5, 200, 200);
const developerCricle = new Circle('Assets/Imgs/developer.svg', canvas.width - 198, canvas.height / 2.5, 200, 200);

const player = new Player(30, canvas.height / 2, 30, 'blue');
let animationId



let circles = [undergradCircle, medSchoolCircle, physeoCircle, residencyCircle, developerCricle];
let particles = [];


const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

function fireWorks () {
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle(player.x, player.y, Math.random() * 2, `hsl(${Math.random() * 360}, 50%, 50%)`, {
            x: (Math.random() - 0.5) * (Math.random() * 15), 
            y: (Math.random() - 0.5) * (Math.random() * 15)
            })
        )
    }
}

function animate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    createLine();
    player.update();
    
    
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        circle.draw();
}

//remove particles
for (let index = particles.length - 1; index >= 0; index--) {
    const particle = particles[index] 

        if (particle.alpha <= 0) {
            particles.splice(index, 1)
        } else {
            particle.update()
        }
    }

//make particles (aka "fireworks") when player touches circle
    if (player.x + player.radius >= canvas.width / 6.2 && player.x + player.radius <= canvas.width / 6.2 + 200) {
        fireWorks();
        setTimeout(() => {
            undergradModalContainer.classList.add('show')
        }, 400);
        setTimeout(() => {
            cancelAnimationFrame(animationId)
            player.x = canvas.width / 6.2 + 225
        }, 400);

    } else if (player.x + player.radius >= canvas.width / 2.9 && player.x + player.radius <= canvas.width / 2.9 + 200) {
        fireWorks()
        setTimeout(() => {
            medschoolModalContainer.classList.add('show')
        }, 400);
        setTimeout(() => {
            cancelAnimationFrame(animationId)
            player.x = canvas.width / 2.9 + 225
        }, 400);

    } else if (player.x + player.radius >= canvas.width / 1.89 && player.x + player.radius <= canvas.width / 1.89 + 200) {
        fireWorks()
        setTimeout(() => {
            physeoModalContainer.classList.add('show')
        }, 400);
        setTimeout(() => {
            cancelAnimationFrame(animationId)
            player.x = canvas.width / 1.89 + 225
        }, 400);

    } else if (player.x + player.radius >= canvas.width / 1.4 && player.x + player.radius <= canvas.width / 1.4 + 200) {
        fireWorks()
        setTimeout(() => {
            residencyModalContainer.classList.add('show')
        }, 400);
        setTimeout(() => {
            cancelAnimationFrame(animationId)
            player.x = canvas.width / 1.4 + 225
        }, 400);

    } else if (player.x + player.radius >= canvas.width - 198 && player.x + player.radius <= canvas.width) {
        fireWorks()
        setTimeout(() => {
            developerModalContainer.classList.add('show')
        }, 400);
        setTimeout(() => {
            cancelAnimationFrame(animationId)
            player.x = 30;
        }, 400);
    }

    if (keys.d.pressed && player.x + player.radius <= canvas.width) {
        player.velocity.x = 7
    } else {
        player.velocity.x = 0
    }

    animationId = requestAnimationFrame(animate)
}


//player movement


addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'a':
           // console.log('left')
            keys.a.pressed = true
            break
        case 'd':
           // console.log('right')
            keys.d.pressed = true
            break
    }
})

addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})

closeBtn.addEventListener('click', () => {
    undergradModalContainer.classList.remove('show')
    animate()
})

medschoolCloseBtn.addEventListener('click', () => {
    medschoolModalContainer.classList.remove('show')
    animate()
})

physeoCloseBtn.addEventListener('click', () => {
    physeoModalContainer.classList.remove('show')
    animate()
})

residencyCloseBtn.addEventListener('click', () => {
    residencyModalContainer.classList.remove('show')
    animate()
})

developerCloseBtn.addEventListener('click', () => {
    developerModalContainer.classList.remove('show')
    animate()
})

instructionsCloseBtn.addEventListener('click', () => {
    instructionsModalContainer.style.display = 'none';
    animate()
})