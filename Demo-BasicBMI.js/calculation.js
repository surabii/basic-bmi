// implement (bmi) body mass index calculation
// an adult's weight is in kilograms (kg) by their height in metres (m) squared
// function name and function key word
function calculateBMI() {
    console.log("function is called");

    // id="height-field"
    // id="weight-field"
    const weightInputElement = document.getElementById("weight-field");
    const heightInputElement = document.getElementById("height-field");
    
    const weight = weightInputElement.value
    const height = heightInputElement.value
    // console.log("weight", weight);
    // console.log("height", height);
    // if (weight) { do calculation}
    // if (height) { do calculation}
    // if (weight && height) { do calculation }

    if (!weight || !height) {
    alert("enter your weight and height");
    } else {
        const squareHeight = height * height;
        const result = weight / squareHeight;

        console.log("result", result);
        document.getElementById("result").textContent = result;
           
    }
    // NaN => not a number 
}