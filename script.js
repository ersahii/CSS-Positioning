const box = document.querySelector(".box");
const switchValues =document.querySelector("input");   
const chks = document.querySelectorAll("input")
function defaultValue(){
    for (let i = 0; i < chks.length; i++) {
        chks[i].onclick = function () {
            for (let i = 0; i < chks.length; i++) {
                if (chks[i] != this && this.checked) {
                    chks[i].checked = false;
                }
            }
        };
    }
}
function toggleCheckbox(element)
 {
   let positionValue =element.value;
   if(positionValue === "static"){
    box.classList.toggle("static");
   }
   if(positionValue === "relative"){
    box.classList.toggle("relative");
    switchValues.checked = false;
   }
   if(positionValue === "absolute"){
    box.classList.toggle("absolute");
    switchValues.checked = false;
   }
   if(positionValue === "fixed"){
    box.classList.toggle("fixed");
    switchValues.checked = false;
   }
 }