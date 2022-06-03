let sticky=document.querySelector("#sticky");
sticky.addEventListener("click",function(e){
    opensticky()
})
function opensticky(imageElement)
{
    let stickydiv=document.createElement("div")
    stickydiv.classList.add("sticky")
    stickydiv.innerHTML=`  <div class="sticky-header">
    <div class="minimize"><i class="fas fa-compress-alt"></i></div>
    <div class="close"> <i class="fas fa-times"></i></div>
  </div>`
  
  let minimize=stickydiv.querySelector(".minimize");
 // let stickyContent=stickydiv.querySelector(".sticky-content")
  let close=stickydiv.querySelector(".close");
  close.addEventListener("click",function(){
      stickydiv.remove();
  })
  let stickyHeader=stickydiv.querySelector(".sticky-header")
  let stickyContent;
  if(imageElement)
  {
      let stickyImageDiv = document.createElement("div");
  stickyImageDiv.classList.add("sticky-image-div");
  stickydiv.append(stickyImageDiv);
  stickyImageDiv.append(imageElement);
  stickyContent = stickyImageDiv;
}
else{ // <div class="sticky-content" contenteditable="true"></div>
    let stickyContentDiv = document.createElement("div");
    stickyContentDiv.classList.add("sticky-content");
    stickyContentDiv.setAttribute("contenteditable" , "true");
    stickyContentDiv.setAttribute("spellcheck" , "false");
    stickydiv.append(stickyContentDiv);
    stickyContent = stickyContentDiv}
  let stickyHold = false;
  let initialX;
  let initialY;
  minimize.addEventListener("click",function()
  {
    stickyContent.style.display == "none"
    ? (stickyContent.style.display = "block")
    : (stickyContent.style.display = "none");

  })
  stickyHeader.addEventListener("mousedown", function (e) {
      stickyHold=true;
      initialX = e.clientX;
      initialY = e.clientY;
  });

  stickyHeader.addEventListener("mousemove", function (e) {
      if(stickyHold){
          let finalX = e.clientX;
          let finalY = e.clientY;
    
          let dx = finalX - initialX;
          let dy = finalY - initialY;
    
          let {top , left} = stickydiv.getBoundingClientRect();
          //   sticky => top + dy
          //  sticky => left + dx
          stickydiv.style.top = top + dy + "px";
          stickydiv.style.left = left +dx + "px";
    
          initialX = finalX;
          initialY = finalY;
      }
  });

  stickyHeader.addEventListener("mouseup", function (e) {
      stickyHold = false;
  });


document.body.append(stickydiv);
}