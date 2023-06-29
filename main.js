let form = document.querySelector("form");
let nameI = document.querySelector("#name");
let result = document.querySelector("#result");


form.addEventListener('submit', function(e){
    e.preventDefault();
    result.textContent = nameI.value;
    nameI.value = "";
});