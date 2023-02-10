const textEL = document.getElementById("textarea");
const yourEL = document.getElementById("svalue"); 
const remainEL = document.getElementById("fvalue");


textEL.addEventListener("keyup",() =>{
    updateCounter()
}); 


updateCounter();
function updateCounter() {
    yourEL.innerText = textEL.value.length;

    remainEL.innerText= textEL.getAttribute("maxLength")-textEL.value.length;
}
