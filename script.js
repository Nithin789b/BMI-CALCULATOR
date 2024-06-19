function calculateBMI() {
    const weight = document.getElementById('weightinput').value;
    const height = document.getElementById('heightinput').value;

    if (height === "" || weight === "") {
        alert("Please enter height and weight.");
        return;
    }

    let bmi = weight / ((height / 100) ** 2);
    let result = "Your BMI is " + bmi.toFixed(2);
    let category = "";

    if (bmi <= 18.5) {
        category = "underweight";
    } else if (bmi > 18.5 && bmi <= 25) {
        category = "healthy";
    } else if (bmi > 25 && bmi < 30) {
        category = "overweight";
    } else {
        category = "obese";
    }

    result += "<br>Category: " + category;
    document.getElementById('result').innerHTML = result;
}
