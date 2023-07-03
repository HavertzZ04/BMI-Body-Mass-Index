let btn = document.querySelector("#btn");

btn.addEventListener("click", function(event) {
    event.preventDefault();

    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseFloat(document.querySelector("#height").value);

    let total = weight / (height ** 2);


    if(total < 18.5){
        document.querySelector("#textBox");
        textBox.textContent = `${total.toFixed(1)} (Underweight)`;
    } else if(total < 24.9){
        document.querySelector("#textBox");
        textBox.textContent = `${total.toFixed(1)} (Normal)`;
    } else if(total < 29.9){
        document.querySelector("#textBox");
        textBox.textContent = `${total.toFixed(1)} (Overweight)`;
    }  else if (total >= 30){
        document.querySelector("#textBox");
        textBox.textContent = `${total.toFixed(1)} (Obese)`;
    } else {
        document.querySelector("#textBox");
        textBox.textContent = "Type a valid information.";
    }
});
