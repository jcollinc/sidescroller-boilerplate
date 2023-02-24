import platform from '../assets/platform.png'
console.log(platform)

//Set the stage...

const canvas = document.querySelector('canvas')
const c = canvas.getContext("2d")
canvas.width = 1024
canvas.height = 576

// Set gravity strength

const gravity = .5
const movementSpeed = 2

// Classes 
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.width = 30
    this.height = 30
    this.velocity = {
      x: 0,
      y: 0
    }
  }
  
  draw() {
    c.fillStyle = "blue"
    c.fillRect(
      this.position.x, 
      this.position.y, 
      this.width, 
      this.height
    )
  }

  update() {
    this.draw()
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity
    } else this.velocity.y = 0
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = { x, y } 
    this.image = image
    this.width = image.width
    this.height = image.height
    
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y)
  }
}

// Create class  instances

const player = new Player()

const image = new Image()
image.src = platform

const platforms = [new Platform({x:-1, y:450, image}), new Platform({x:500, y:450, image})]

// State to manage left and right movement

const keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
}

// Win scenario

let scrollOffset = 0

// Animation loop

function animate() {
  requestAnimationFrame(animate)
  c.fillStyle = "skyblue"
  c.fillRect(0, 0, canvas.width, canvas.height)
  for (let platform of platforms) {
    platform.draw()
  }
  player.update()

// Movement on x-axis and side-scrolling behavior

  if (keys.right.pressed && player.position.x < 300) player.velocity.x = movementSpeed
  else if (keys.left.pressed && player.position.x > 0) player.velocity.x = -movementSpeed
  else {
    player.velocity.x = 0
    if (keys.right.pressed) {
      scrollOffset += movementSpeed
      for (let platform of platforms) {
        platform.position.x  -= movementSpeed
      }
    }
  }

//Platform collision detection

  for (let platform of platforms) {
    platform.draw()
    if (
      player.position.y + player.height <= platform.position.y
      && player.position.y + player.height + player.velocity.y >= platform.position.y
      && player.position.x + player.width >= platform.position.x 
      && player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0
    }
  }

  if (scrollOffset > 2000) {
    console.log("You win!")
  }
}
animate()

// Event handling for WASD and arrow keydowns

window.addEventListener('keydown', ({ keyCode }) => {
  console.log(keyCode)
  switch (keyCode) {
// Move up
    case 87: 
    case 38: 
      player.velocity.y -= 20
      break
// Move down
    case 83: 
    case 40:
      player.velocity.y += 20 
      break
// Move left
    case 65: 
    case 37:
      keys.left.pressed = true
      break
// Move right
    case 68: 
    case 39:
      keys.right.pressed = true
      break
  }
}) 

// Event handling for WASD and arrow keyups
window.addEventListener('keyup', ({ keyCode }) => {
  switch (keyCode) {
// Move up
    case 87: 
    case 38: 
      break
// Move down
    case 83: 
    case 40:
      break
// Move left
    case 65: 
    case 37:
      keys.left.pressed = false
      break
// Move right
    case 68: 
    case 39:
      keys.right.pressed = false
      break
  }
}) 
