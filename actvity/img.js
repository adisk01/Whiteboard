let photodiv=document.querySelector("#photo")
let photoinput=document.querySelector("#photo-upload");
photodiv.addEventListener("click",function(){
    photoinput.click();
})
photoinput.addEventListener("change",function(e){
    console.log(e);
    let fileObj=e.target.files[0];
    let filePath=URL.createObjectURL(fileObj,{type:"image/jpg"});
    console.log(filePath);
    let img=document.createElement("img");
    img.setAttribute("src",filePath);
    img.classList.add("sticky-image");
    opensticky(img)
})