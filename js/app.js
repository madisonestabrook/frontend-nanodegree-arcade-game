// Enemies our player must avoid
var Enemy = function(x,y, speed) { // Declares the var Enemy to be equal to the following function 
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0; // Sets this.x equal to zero
    this.y = y + 55; // Sets this.y equal to y plus 55
    this.step = 101;  // Sets this.step equal to 101
    this.speed = speed; // Sets this.speed equal to speed
    this.boundary = this.step * 5;  // Sets this.boundary equal to five times this.step
    this.resetPos = -this.step; // Sets this.resetPo equal to negative this.step
    // x pos 
    // y pos 

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png'; 
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x < this.boundary ) { // If this.x is less than this.boundary, 
        this.x += this.speed * dt; // Adds this.speed times dt to this.x
    }
    else { // Else (meaning this.x is NOT less than this.boundary,)
        this.x = this.resetPos; // Set this.x to this.resetPos
    }
     // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If is not passed boundary, 
        // Move forward 
        // Increment x by speed * dt 
    // else 
        // Reset pos to start
};
 class Hero { // First step to creating class Hero
     constructor() { // Creates constructor 
         this.step = 101; // Sets this.step equal to 101
         this.jump = 83; // Sets this.jump equal to 83
         this.startX = this.step * 2;  // Sets this.startX equal to two times this.step
         this.startY = (this.jump * 4) + 55;  // Sets this.startY equal to four times this.jump plus 55
         this.x = this.startX;  // Sets this.x equal to this.startX
         this.y = this.startY; // Sets this.Y equal to this.startY
         this.sprite = 'images/char-boy.png' // Loads image in game
         this.victory = false; // Sets this.victory equal to false
     }
     render() {  // Start of render() method
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        // Draws an image
     }
     handleInput(input) { //Start of handleInput method
         switch(input) { // Start of switch statement 
             case 'left': // Case of input equals left
            if(this.x > 0) { // If this.x is greater than 0, 
                this.x -= this.step; // Subtract and reassign this.step from this.x
            }
                break; // Break 
            case 'up': // Case of input equals up
               if(this.y > 0){  //If this.y is greater than this.jump
                this.y -= this.jump; // Subtract and reassign this.jump from this.y
               }
                break;// Break
            case 'right': // Case of input equals right 
            if(this.x < this.step * 4){ // If this.x is les than four times this.step
                this.x += this.step;  // Add and reassign this.step to this.x
            }
                break; // Break
            case 'down': // Case of input equals down
             if(this.y < this.jump * 4) { // If this.y is less than four times this.jump
                this.y += this.jump; // Add and reassign this.jump to this.y
             }
                break; // Break

         }
     }
     update() { // Start of update method
         for(let enemy of allEnemies) { // For all enemies in allEnemies
             if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) { 
                 // If the logical condition in parentheses is true, 
                this.reset(); // Reset the game
             }
             }
             if(this.y === (-28)) { // If this.y equals negative 28, 
                this.victory = true; // The player has won
         }
     }
     reset() { // Start of reset method
         this.y = this.startY; // Resets this.y to y's starting position 
         this.x = this.startX; // Resets this.x to x's starting position 
     }
 }

 const player = new Hero(); // Declares the const player to be a new instance of Hero
 const bug1 = new Enemy(-101, 0, 200); // Declares bug1 to be a new instance of Enemy 
 const bug2 = new Enemy(-101, 83, 300); // Declares bug2 to be a new instance of Enemy 
 const bug3 = new Enemy((-101*2.5), 83, 200);  // Declares bug3 to be a new instance of Enemy 
 const allEnemies = []; // Makes the allEnemies array an empty array
 allEnemies.push(bug1, bug2, bug3); // Adds the three bugs to the allEnemies array
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// PUESDO CODE
 // Hero class
        // Constructor  

            // Properties 
                // x pos 
                // y pos 
                // Sprite image 
            // Methods
                // Update position 
                    // Check collision here
                        // Did player x and y collide with enemy?
                    // Check win here
                        // Did player x and y reach final tile?
                // Render
                    // Draw player sprite on current x and y coord position 
                // Handle keyword input 
                    // Update player's x and y property according to input 
                // Reset Hero
                    // Set x and y to starting x and y 

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// new Hero object 

// Init allEnemies array 
// For each enemy, create and push new Enemy object into above array 

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
