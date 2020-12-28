var mouseEvent="empty";
var last_Start_mouse_X,last_Start_mouse_Y;

canvas=document.getElementById("canvas");
ctx=canvas.getContext("2d");

color="red";
width_of_line=3;
canvas.addEventListener("mousedown",m);
function m(e) {
    color=document.getElementById("jk").value;
    width_of_line=document.getElementById("poll").value;
    mouseEvent="mOuSeDoWn";
}
canvas.addEventListener("mouseup",n);
function n(e) {
    mouseEvent="MoUsEuP";
}
canvas.addEventListener("mouseleave",op);
function op(e) {
    mouseEvent="MoUsElEaVe";
}
canvas.addEventListener("mousemove",glhf);
function glhf(e) {
   current_mouse_x=e.clientX-canvas.offsetLeft;
   current_mouse_y=e.clientY-canvas.offsetTop;

   if ( mouseEvent == "mOuSeDoWn" ) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("x="+last_Start_mouse_X+"y="+last_Start_mouse_Y);
    ctx.moveTo(last_Start_mouse_X,last_Start_mouse_Y);
    console.log("x="+current_mouse_x+"y="+current_mouse_y);
    ctx.lineTo(current_mouse_x,current_mouse_y);
    ctx.stroke();
   }
   last_Start_mouse_X=current_mouse_x;
   last_Start_mouse_Y=current_mouse_y;
}

function onwww() 
{ ctx.clearRect(0, 0, canvas.width, canvas.height); }