let undo=document.querySelector("#undo");
let redo=document.querySelector("#redo");
undo.addEventListener("click",linesundo);
redo.addEventListener("click",linesredo);
function linesundo()
{
    if(linesDB.length){
   let undolines= linesDB.pop();
    redolinesDB.push(undolines);
    //clear canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawlinesfromDB();}
}
function drawlinesfromDB()
{
    for(let i=0;i<linesDB.length;i++)
    {
        let line=linesDB[i];
        for(let i=0;i<line.length;i++)
        {
            let pointobject=line[i];
            if(pointobject.type=="md")
            {
                ctx.beginPath();
                ctx.moveTo(pointobject.x,pointobject.y);
            }
            else
            {
                ctx.lineTo(pointobject.x,pointobject.y);
                ctx.stroke();
            }
        }
    }

}
function linesredo(){
    if(redolinesDB.length){
    let redoline=redolinesDB.pop();
    for(let i=0;i<redoline.length;i++)
    {
        let pointobject=redoline[i];
        if(pointobject.type=="md")
        {
            ctx.beginPath();
            ctx.moveTo(pointobject.x,pointobject.y);
        }
        else
        {
            ctx.lineTo(pointobject.x,pointobject.y);
            ctx.stroke();
        }
        linesDB.push(redoline);
        
    }
}
}