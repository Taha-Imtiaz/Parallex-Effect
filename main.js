// alert('hello')
var viewUp=(elementSelector,speed)=>
{
    var element=document.querySelector(elementSelector)
    var elementPosition=element.getBoundingClientRect().top;
    console.log(elementPosition)
    var screenPosition=window.innerHeight/speed;
    console.log(screenPosition)
    if(elementPosition < screenPosition)
    {
        element.classList.add("appearLeft")
    }
    if(elementPosition > screenPosition)
    {
        element.classList.remove("appearLeft")
    }
}
var parallex=(elementSelector,speed,position)=>
{
    var element=document.querySelector(elementSelector)
    if(position==="up"){
        element.style.transform=`translateY(-${window.scrollY*speed}px`
    }
    else if(position==="down"){
        element.style.transform=`translateY(${window.scrollY*speed}px`
    }
}

window.addEventListener("scroll",()=>{
    viewUp(".left",1.4);
    parallex(".par",0.1,"down");
    parallex(".al",0.3,"up");
    parallex(".lax",0.2,"down");


})