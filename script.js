const tools_devs = document.body.getElementsByClassName("tool");
for(i = 0; i < tools_devs.length; i++){
    const element = tools_devs[i];
    element.addEventListener("mouseenter", ()=>{
        if(element){
            element.id = "element_selected";
        }

    });
    element.addEventListener("mouseleave", () =>{
        if(element){
            element.removeAttribute("id");
        }

    });
}