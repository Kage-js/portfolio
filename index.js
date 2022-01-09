function openMorningT(){
    var text= document.getElementById("morningTText") 
    var project=document.getElementById("morningT")
    
    if (text.style.display=="none"){
        text.style.display ="inline"
        project.style.alignSelf = "center"
        project.style.backgroundColor = "hsl(49 37% 94%)"
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
