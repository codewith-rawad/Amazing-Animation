var item=document.getElementById("itemm")
var image=document.getElementById("image")
var pp=document.getElementById("pp")
var t=document.getElementById("t");
var r=document.getElementById("r");
image.addEventListener("mouseover",function(){
item.style.transform="translateX(120%)";
t.style.width="100%"
setTimeout(()=>{
r.style.height="100%";

},1000)

})

image.addEventListener("mouseleave",function(){
    item.style.transform="";
    
    r.style.height="0%";
setTimeout(()=>{
t.style.width="0%"

},1000)
    
    })

