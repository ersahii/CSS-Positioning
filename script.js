const box = document.querySelector("#box");
const switchValues =document.querySelector("input");   
const chks = document.querySelectorAll("input");
function toggleCheckbox(element)
{
    for (let i = 0; i < chks.length; i++) {
        chks[i].onclick = function () {
            for (let i = 0; i < chks.length; i++) {
                if (chks[i] != this && this.checked) {
                    chks[i].checked = false;
                }
            }
        };
    }
    let positionValue =element.value;
   if(positionValue === "static"){ 
    box.classList.toggle("static");
    document.querySelector("h2").innerHTML= "Static Position";
    document.getElementById('position').innerHTML= "position: static;";
}
if(positionValue === "relative"){
    box.classList.toggle("relative");
    document.querySelector("h2").innerHTML= "Relative Position";
    document.getElementById('position').innerHTML= "position: relative;";
    switchValues.checked = false;
}
if(positionValue === "absolute"){
    box.classList.toggle("absolute");
    document.querySelector("h2").innerHTML= "Absolute Position";
    document.getElementById('position').innerHTML= "position: absolute;";
    switchValues.checked = false;
}
if(positionValue === "fixed"){
    box.classList.toggle("fixed");
    document.querySelector("h2").innerHTML= "Fixed Position";
    document.getElementById('position').innerHTML= "position: fixed;";
    switchValues.checked = false;
   }
 }