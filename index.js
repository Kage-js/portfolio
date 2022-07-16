var background = document.querySelector("p").offsetTop;
var musicProducer = document.getElementsByClassName("musicProducer")
var fullStackDev = document.getElementsByClassName("fullStackDev")

window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / background);
    console.log(opac);
     
  document.body.style.background =  "linear-gradient(rgba(0, 0, 0, " + opac*1.5 + "), rgba(0, 0, 0, " + opac*1.5 + ")), url('assets/BostonBackground.jpeg') no-repeat";
  document.body.style.backgroundPosition="center"; 
  document.body.style.backgroundAttachment='fixed';
  document.body.style.backgroundSize= "cover";
  console.log(document.body.background)
  }
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



function openMorningT(){
    console.log("this was clicked")
    var text= document.getElementById("morningTText") 
    var project=document.getElementById("morningT")
    
    if (text.style.display=="none"){
        text.style.display ="inline"
        document.body.style.background="cover"
        project.style.alignSelf = "center"
        project.style.backgroundColor = "#ffff"
        project.style.color ="var(--bg-color)"
        
         
    }else{
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        
        
    }
}

function openAngularTask(){
    var text= document.getElementById("angulartaskText") 
    var project=document.getElementById("project angularTask")
    if (text.style.display=="none"){
        text.style.display ="inline"
        project.style.backgroundColor = "hsl(49 37% 94%)"
        project.style.color ="var(--bg-color)"

    }else{
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        
    }
}


function openFgc(){
    var text= document.getElementById("fgcText") 
    var project=document.getElementById("project fgc")
    if (text.style.display=="none"){
        text.style.display ="inline"
        project.style.backgroundColor = "hsl(49 37% 94%)"
        project.style.color ="var(--bg-color)"

    }else{
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        
    }
}

function openmfPyGame(){
    var text= document.getElementById("mfPyGameText") 
    var project=document.getElementById("project mfPyGame")
    if (text.style.display=="none"){
        text.style.display ="inline"
        project.style.backgroundColor = "hsl(49 37% 94%)"
        project.style.color ="var(--bg-color)"
        

    }else{
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        
    }
}

function openChatBot(){
    var text= document.getElementById("chatbotText") 
    var project=document.getElementById("project chatbot")
    if (text.style.display=="none"){
        text.style.display ="inline"
        project.style.backgroundColor = "hsl(49 37% 94%)"
        project.style.color ="var(--bg-color)"
        

    }else{
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        
    }
}

function musicProducerHover(){
        

}