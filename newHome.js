const hero = document.querySelector(".hero")
const resumeButton = document.querySelector(".resume")
const resumeText = document.querySelector(".resumeText")
const demon = document.querySelector(".demon")
const about = document.querySelector(".about-me")
const menu = document.querySelector(".menu")
const projects = document.querySelector(".projects")
const contacts = document.querySelector(".contacts") 
const info = document.querySelector(".info")

resumeButton.addEventListener("click",resume)


function resume(){

  if (resumeText.style.display=="none"){
        hero.src ="/assets/ gothicvania patreon collection/Gothic-hero-Files/GIFS/gothic-hero-attack.gif"
        info.style.display ="flex"
        about.style.opacity = "50%"
        projects.style.opacity = "50%"  
        contacts.style.opacity = "50%" 
        resumeText.style.display="flex"

    }else{
        hero.src ="/assets/ gothicvania patreon collection/Gothic-hero-Files/GIFS/gothic-hero-idle.gif"
        demon.src ="/assets/ gothicvania patreon collection/demon-Files/GIFS/demon-attack.gif"
        info.style.display ="none"
        about.style.opacity = "100%"
        projects.style.opacity = "100%"  
        contacts.style.opacity = "100%" 
        resumeText.style.display="none"

        setTimeout(function() {
        demon.src ="/assets/ gothicvania patreon collection/demon-Files/GIFS/demon-idle.gif"
           
    }, 2000)
    }
        

}