function openProject(){
   var text= document.getElementById("morningTText") 
   var project=document.getElementById("project")
    if (text.style.display=="none"){
        text.style.display ="inline"
        project.style.backgroundColor = "hsl(49 37% 94%)"
        project.style.color ="var(--bg-color)"
         project.style.width ="100%"
    }else{
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        project.style.width ="20%"
    }
}