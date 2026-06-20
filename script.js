const home = document.getElementById("main_title");
if(home){
    home.addEventListener("click", ()=>{
        
    });
}
const paths = {"Hashtag maker" : "hashtag_maker",
    "String to hex" : "string_to_hex",
    "String duplicator" : "string_duplicator",
    "String to binarry" : "string_to_binarry",
    "String length counter" : "string_length_counter"
}
const tools_devs = document.body.getElementsByClassName("tool");
for(i = 0; i < tools_devs.length; i++){
    const element = tools_devs[i];
    const element_name = element.getElementsByClassName("tool_name")[0];
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
    element.addEventListener("click",()=>{
        if(element){
            if(element_name){
                if(paths[element_name.textContent]){
                    window.open(paths[element_name.textContent])
                }
                else{
                    alert("Coming soon!")
                }
            }
        }
    })
}