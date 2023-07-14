var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
var x = 0;

var spaceship = 
{
    color: "black",
    radius: 30,
    position:
    {
        x: 0,
        y: 0
    },
    angle: 0,
    engineOn: false,
    rotatingLeft: false,
    rotatingRight: false,
    debug: false
}

function drawSpaceship() {
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(spaceship.angle);
    context.arc(0, 0, spaceship.radius, 0, 2 * Math.PI);
    context.fillStyle = spaceship.color
    context.fill()
    //Legs
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(2*spaceship.radius, 2*spaceship.radius);
    context.stroke();
    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(-2*spaceship.radius, 2*spaceship.radius);
    context.stroke();
    //Thruster
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0.5*spaceship.radius, 1.4*spaceship.radius);
    context.lineTo(-0.5*spaceship.radius, 1.4*spaceship.radius);
    context.fill();
    //Bounding Box
    if (spaceship.debug) context.strokeRect(-2*spaceship.radius, -spaceship.radius, 4*spaceship.radius, 3.*spaceship.radius);
    
    if(spaceship.engineOn)
    {
        context.beginPath();
        context.moveTo(0, (Math.random() + 2)*spaceship.radius );
        context.lineTo(0.5*spaceship.radius, 1.4*spaceship.radius);
        context.lineTo(-0.5*spaceship.radius, 1.4*spaceship.radius);
        context.fillStyle = "orange";
        context.fill();
    }
    context.restore()
}

function draw()
{
    // Clear entire screen
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    if (spaceship.rotatingLeft) {
        spaceship.angle -= 0.1;
    } else if(spaceship.rotatingRight) {
        spaceship.angle += 0.1; 
    }

    // Begin drawing
    drawSpaceship();
    /* other draw methods (to add later) */

    requestAnimationFrame(draw);
}


function keyLetGo(event)
{
    switch(event.key)
    {
        case "ArrowLeft":
            // Left Arrow key
            spaceship.rotatingLeft = false;
            break;
        case "ArrowRight":
            // Right Arrow key
            spaceship.rotatingRight = false;
            break;
        case "ArrowUp":
            // Up Arrow key
            spaceship.engineOn = false;
            break;
    }
}

document.addEventListener('keyup', keyLetGo);

function keyPressed(event)
{
    switch(event.key)
    {
        case "ArrowLeft":
            // Left Arrow key
            spaceship.rotatingLeft = true;
            break;
        case "ArrowRight":
            // Right Arrow key
            spaceship.rotatingRight = true;
            break;
        case "ArrowUp":
            // Up Arrow key
            spaceship.engineOn = true;
            break;
        case "d":
            spaceship.debug = !spaceship.debug;
            break;
    }
}

document.addEventListener('keydown', keyPressed);


draw()