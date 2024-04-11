
canvas =
document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


greencar_width = 75; greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function up()
{
if(greencar_y >=0)
{
greencar_ygreencar_y - 10;
console.log("When up arrow is pressed, x = " + greencar_x
uploadBackground();
uploadgreencar();
}
+greencar_y);
function add() {
	//upload car, and background images on the canvas.
}
}
function uploadBackground() {
	//Define function ‘uploadBackground’

}

function uploadgreencar() {

	function add() {
	}
	background_imgTag = new Image(); background_imgTag.onload = uploadBackground; background_imgTag.src = background_image;
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar; greencar_imgTag.src = greencar_image;

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
}

function down()
{
	//Define function to move the car downward
}

function left()
{
	//Define function to move the car left side
}

function right()
{
	//Define function to move the car right side
}
