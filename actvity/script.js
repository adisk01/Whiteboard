let canvas=document.querySelector("#canvas")

canvas.height=window.innerHeight-100;
canvas.width=window.innerWidth;
window.addEventListener("resize",function(){
    canvas.height=window.innerHeight-100;
canvas.width=window.innerWidth;
})
let ctx=canvas.getContext("2d");
//ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 150, 100);
let isPendown=false;
let redolinesDB=[];
let linesDB=[];
let line=[];
canvas.addEventListener("mousedown",function(e){
    if (redolinesDB.length) {
        redolinesDB = [];
      }
  isPendown=true;  
  //console.log(e);
  let x=e.clientX;
  let y=e.clientY -100;
  ctx.beginPath();
  ctx.moveTo(x,y);
  let pointobject={x:x,
                   y:y,
                   type:"md" }
  line.push(pointobject);
})
canvas.addEventListener("mousemove",function(e){
    if (isPendown)
    {
        let x=e.clientX;
        let y=e.clientY-100;
        ctx.lineTo(x,y);
        ctx.stroke();
        let pointobject={x:x,
            y:y,
            type:"mm" }
line.push(pointobject);
    }
})
canvas.addEventListener("mouseup",function(e){
   isPendown=false;
   linesDB.push(line);
  // console.log(linesDB);
   line=[];
   
})
