canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

rover_x=10;
rover_y=10;

rover_height= 70;
rover_width=120;

car2_x=10;
car2_y=100;

car2_height= 70;
car2_width=120;

function add(){
    background_img = new Image()
    background_img.onload= upload_background;
    background_img.src= "background.jpg";

    rover_img = new Image()
    rover_img.onload= upload_rover;
    rover_img.src= "car1.png";

    
    car2_img = new Image()
    car2_img.onload= upload_car2;
    car2_img.src= "car2.png";
}

function upload_background(){
ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_img, rover_x,rover_y, rover_width, rover_height);
    }
    
function upload_car2(){
    ctx.drawImage(car2_img, car2_x,car2_y, car2_width, car2_height);
    }

    window.addEventListener("keydown", my_keydown);
    
    function my_keydown(e){
        keyPressed= e.keyCode;
        console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
        }
        if(keyPressed == '40')
        {
            down();
        }
        if(keyPressed == '39')
        {
            right();
        }
        if(keyPressed == '37')
        {
            left();
        }
        if(keyPressed == '68')
        {
            down2();
        }
        if(keyPressed == '76')
        {
            left2();
        }
        if(keyPressed == '82')
        {
            right2();
        }
        if(keyPressed == '85')
        {
            up2();
        }
    }