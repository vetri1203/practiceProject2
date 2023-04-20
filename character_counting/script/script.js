const textarea = document.getElementById("textarea");
const yourEL = document.getElementById("svalue");
const remainEL = document.getElementById("fvalue");

textarea.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();
function updateCounter() {
  yourEL.innerText = textarea.value.length;

  remainEL.innerText =
    textarea.getAttribute("maxLength") - textarea.value.length;
}

textarea.value = "";

const btn = document.getElementById("btn");

btn.addEventListener("click", function handleClick() {
  console.log(textarea.value);
  textarea.value = "";
  
});
