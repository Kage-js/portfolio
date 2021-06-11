const falling=document.querySelectorAll(".snowflake-start")
const somethingElse=document.querySelector(".somethingElse")
const enter=document.getElementById("enter-btn")
const music= document.querySelector(".music")
const webDev= document.querySelector(".webDev")
const header = document.querySelector(".header")
const pointer = document.querySelector(".pointer")

falling.addEventListener("click",animationStart)
enter.addEventListener("click",animationStart)
somethingElse.addEventListener("click",animationStart)
music.addEventListener("click",animationStart)
webDev.addEventListener("click",animationStart)


function animationStart(){
    debugger
    event.preventDefault(); 
    //for (var i = 0; i < falling.length; i++) {
     //   falling[i].classList.add('snowflake');
    //}

    somethingElse.className="somethingEvil";
    header.className="fadeUp"
    webDev.className="fadeUp"    
    music.className="fadeUp"
    enter.className="fadeUp" 
    pointer.className="fadeUp" 
}
