background_image="nasa.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
rover_width=100;
rover_height=100;

nasa_mars_images_array=["nasa img1.jpg","nasa img1]2.jpg","mars.jpg","nasa1.jpg"];
random_number=Math.floor(Math.random()*4);
background_image=nasa_mars_images_array[random_number];
console.log("background_image="+ background_image);

canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

function add() {
    background_imgTag= new Image();
	background_imgTag.onload= uploadBackground;
	background_imgTag.src = background_image;

	rover_imgTag= new Image();
	rover_imgTag.onload= uploadRover;
	rover_imgTag.src = rover_image;
	}

	function uploadBackground(){
		ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
	}
   function uploadRover(){
		ctx.drawImage(rover_imgTag,0,0,canvas.width,canvas.height);
   }
    
    window.addEventListener("keydown", my_keydowm);

function my_keydowm(e){
    keyPressed= e.keyCode;
    console.log=(keyPressed);
     if (keyPressed=='38');
     {
        up();
        console.log(up);
     }
     if (keyPressed=='40');
     {
        down();
        console.log(down);
     }
     if (keyPressed=='39');
     {
        right();
        console.log(right);
     }
     if (keyPressed=='37');
     {
        left();
        console.log(left);
     }
}

function up(){
   if(rover_y>=0){
      rover_y=rover_y-10;
      console.log("when up arrow is pressed, x=" +rover_x+ "| y="+rover_y);
       uploadBackground();
      uploadRover(); 
   }
}

function down(){
   if(rover_y<=500){
      rover_y=rover_y+10;
      console.log("when down arrow is pressed, x=" +rover_x+ "| y="+rover_y);
       uploadBackground();
      uploadRover(); 
   }
}

function left(){
   if(rover_x>=0){
      rover_x=rover_x-10;
      console.log("when left arrow is pressed, x=" +rover_x+ "| y="+rover_y);
       uploadBackground();
      uploadRover(); 
   }
}

function right(){
   if(rover_x<=700){
      rover_x=rover_x+10;
      console.log("when right arrow is pressed, x=" +rover_x+ "| y="+rover_y);
       uploadBackground();
      uploadRover(); 
   }
}

