let btn = document.querySelector("#btn");
let textBox = document.querySelector("#textBox");

function calculateBMI(weight, height) {
    let result = weight / (height ** 2);
    return result.toFixed(1);
}

function calculateIdealWeight(height) {
    let result = 24 * (height ** 2);
    return result;
}

function calculateWeightToLose(weight, height) {
    let idealWeight = calculateIdealWeight(height);
    let weightToLose = weight - idealWeight;
    return weightToLose.toFixed(1);
}

function calculateWeightToWin(weight, height) {
    let idealWeight = 19 * (height ** 2);
    let weightToWin = idealWeight - weight;
    return weightToWin.toFixed(1);
}

function setTextBoxContent(content) {
    textBox.textContent = content;
}

function bmiButtonCalculation() {
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseFloat(document.querySelector("#height").value);
  
    let bmiTotal = calculateBMI(weight, height);
  
    if (bmiTotal < 18.5) {
      setTextBoxContent(`${bmiTotal} (Underweight) / You must gain ${calculateWeightToWin(weight, height)} KGs.`);
    } else if (bmiTotal < 24.9) {
      setTextBoxContent(`${bmiTotal} (Normal)`);
    } else if (bmiTotal < 29.9) {
      setTextBoxContent(`${bmiTotal} (Overweight) / You must lose ${calculateWeightToLose(weight, height)} KGs.`);
    } else if (bmiTotal >= 30) {
      setTextBoxContent(`${bmiTotal} (Obese) / You must lose ${calculateWeightToLose(weight, height)} KGs.`);
    } else {
        setTextBoxContent("Type a valid information.")
    }
}
  
btn.addEventListener("click", function(e) {
    e.preventDefault();
    bmiButtonCalculation();
});

