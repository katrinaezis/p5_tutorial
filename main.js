// Set up cannot be named differently, constructs canvas
function setup() {
	// Set up createCanvas() in function setup() with parameters w = displayWidth and h = displayHeight
    createCanvas(displayWidth, displayHeight);


}


// draw cannot be named differently, will be called in a loop
function draw() {
	stroke('white');

	// Draw ellipse() in function draw() with parameters x = 100 y = 100 w = 50 h = 50
    ellipse(mouseX, mouseY, 50, 50);

	// Make mouseX and mouseY the x and y parameters of ellipse


	// fill() the ellipse to blue using R, G, B integer values
    fill(mouseX%255, mouseY%255, 255);
	// Make mouseX and mouseY the R and G parameters of fill

	// Add a mouse press event in your draw() function to call flower()
    if (mouseIsPressed){
        flower();
    }

}



function flower() {
  	// Set the stroke() color to white and fill the flower to a color using any R, G, B values
    push();
    stroke('white');
    fill(mouseX%255, mouseY%255, 255, .75);
    translate(mouseX, mouseY);
    for (var i = 0; i < 6; i++) {
        ellipse(0, 0, 20, 80);
        rotate(PI/6);
    }
    pop();
  	// translate() the flower with your mouse position

  	// Include a forloop to rotate() a ellipse() with parameters (0, 0, 20, 80) by PI/6


}

