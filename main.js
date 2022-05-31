canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "red"; 
width_of_line="5";

var last_position_of_touch_x,last_position_of_touch_y;
var width = screen.width;
var height = screen.hieght;
  if(width < 992){
      document.getElementById=("myCanvas").width = new_width;
      document.getElementById=("myCanvas").hieght = new_hieght;
      document.body.style.overflow ="hidden";
  }

canvas.addEventListener("touchstart" , my_touchstart);
function my_touchstart(e);

{
  console.log("My_touchstart");
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;

  last_position_of_touch_x = e.touches[e].clientx - offsetLeft;
  last_position_of_touch_y =  e.touches[e].clientx - offsetTop;
}
canvas.addEventListener("touchmove" , my_touchmove);
function my_touchmove(e);

{
  console.log("My_touchmove");
  last_position_of_touch_x = e.touches[e].clientx - offsetLeft;
  last_position_of_touch_y =  e.touches[e].clientx - offsetTop;

  ctx.beginPath();
  ctx.strokestyle = color;
  ctx.lineWidth = width_of_line;

  console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
  ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
  
  console.log("Last position of x and y coordinates = ");
  console.log("x = " + last_position_of_x + "y = " + current_position_of_y);
  ctx.moveTo(last_position_of_touch_x, current_position_of_touch_y);
  ctx.stroke();

  last_position_of_touch_x = current_position_of_touch_x;
  last_position_of_touch_y =  current_position_of_touch_y;

}
var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

  canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e){
color = "black";
    width_of_line = 1;
    mouseEvent="mouseDown"
   
}
canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e) {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
      }

      last_position_of_x = current_position_of_mouse_x; 
      last_position_of_y = current_position_of_mouse_y;

      canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
        mouseEvent = "mouseUP";
    }
    
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
        mouseEvent = "mouseleave";

        function clearArea() {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      }






