// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 0; 
    this.y = y + 55; 
    this.step = 101; 
    this.speed = speed; 
    this.boundary = this.step * 5; 
    this.resetPos = -this.step;
    // x pos 
    // y pos 

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if(this.x < this.boundary ) { 
        this.x += this.speed * dt; 
    }
    else { 
        this.x = this.resetPos; 
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
 class Hero {
     constructor() { 

         this.step = 101; 
         this.jump = 83;
         this.startX = this.step * 2; 
         this.startY = (this.jump * 4) + 55; 
         this.x = this.startX; 
         this.y = this.startY; 
         this.sprite = 'images/char-boy.png'
         this.victory = false; 
     }
     render() { 
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
     }
     handleInput(input) { 
         switch(input) { 
             case 'left': 
            if(this.x > 0) { 
                this.x -= this.step;
            }
                break; 
            case 'up': 
               if(this.y > this.jump){ 
                this.y -= this.jump; 
               }
                break;
            case 'right':
            if(this.x < this.step * 4){ 
                this.x += this.step;  
            }
                break; 
            case 'down': 
             if(this.y < this.jump * 4) { 
                this.y += this.jump; 
             }
                break; 

         }
     }
     update() { 
         for(let enemy of allEnemies) { 
             if(this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) { 
                this.reset(); 
             }
             }
             if(this.y === 55) { 
                this.victory = true; 
         }
     }
     reset() { 
         this.y = this.startY; 
         this.x = this.startX; 
     }
 }

 const player = new Hero(); 
 const bug1 = new Enemy(-101, 0, 200);
 const bug2 = new Enemy(-101, 83, 300); 
 const bug3 = new Enemy((-101*2.5), 83, 200);  
 const allEnemies = []; 
 allEnemies.push(bug1, bug2, bug3);
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

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
