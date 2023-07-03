let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    event.preventDefault()

    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseFloat(document.querySelector("#height").value);

    let total = weight / (height ** 2);

    document.querySelector("#textBox").textContent = total.toFixed(1);
})