const falling=document.querySelectorAll(".snowflake-start")
const somethingElse=document.querySelector(".somethingElse")
const enter=document.getElementById("enter-btn")
const music= document.querySelector(".music")
const webDev= document.querySelector(".webDev")
const header = document.querySelector(".header")
const pointer = document.querySelector(".pointer")
const beforeBattle = document.querySelector(".beforeBattle")
const beforeSpawn = document.querySelector(".beforeSpawn")
const demonIntro = document.querySelector(".intro-demon")
var delayInMilliseconds = 4000;


falling.addEventListener("click",animationStart)
enter.addEventListener("click",animationStart)
somethingElse.addEventListener("click",animationStart)
music.addEventListener("click",animationStart)
webDev.addEventListener("click",animationStart)
battle.addEventListener("click",animationStart)
demonIntro.addEventListener("click",animationStart)
function animationStart(){
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
    setTimeout(function() {
        beforeSpawn.className="demon"
        
    }, 4000)
    setTimeout(function() {
        demonIntro.style.display="inline"    
    }, 5000)
}
