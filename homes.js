function openProjectmorningT(){
   var todo=document.getElementById("toDo")
   var text= document.getElementById("morningTText") 
   var project=document.getElementById("morningT")
   
    if (text.style.display=="none"){
        text.style.display ="inline"
        project.style.backgroundColor = "hsl(49 37% 94%)"
        project.style.color ="var(--bg-color)"
        project.style.width ="100%"
        todo.style.display="none"
        todo.style.opacity="0"
        todo.style.transform="translateY(3rem);"
    }else{
        todo.style.display ="inline"
        todo.style.animation="fadeInUp 100ms 100ms ease forwards"
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        project.style.width ="20%"
    }
}

function openTodo(){
    var morningText= document.getElementById("morningT") 
    var text= document.getElementById("toDoText") 
    var project=document.getElementById("toDo")
      
    if (text.style.display=="none"){
        morningText.style.display="none"
        morningText.style.opacity="0"
        morningText.style.transform="translateY(3rem);"
        text.style.display ="inline"
        project.style.backgroundColor = "hsl(49 37% 94%)"
        project.style.color ="var(--bg-color)"
         project.style.width ="100%"

    }else{
        morningText.style.display ="inline"
        morningText.style.animation="fadeInUp 100ms 100ms ease forwards"
        text.style.display ="none" 
        project.style.textDecoration="none"
        project.style.backgroundColor="var(--bg-color)"
        project.style.color="hsl(49 37% 94%)"
        project.style.width ="20%"
    }
}

