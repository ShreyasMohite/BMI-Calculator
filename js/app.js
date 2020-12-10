const calculate = () => {
    let height_cm = parseInt(document.getElementById("height").value);
    let weight = parseInt(document.getElementById("weight").value);






    let height_m = height_cm / 100;
    let bmi = weight / (height_m * height_m);
    let answer_bmi = bmi.toFixed(1);
    if (answer_bmi == "NaN") {
        alert("please Enter Numeric values")
    } else {
        document.getElementById("answer").innerHTML = answer_bmi;
    }
    if (answer_bmi >= 18.6 & answer_bmi <= 24.9) {
        document.getElementById("message").innerHTML = "Normal Weight";
    }
    if (answer_bmi > 24.9) {
        document.getElementById("message").innerHTML = "Over Weight";
    }
    if (answer_bmi < 18.6) {
        document.getElementById("message").innerHTML = "Under Weight";

    }



}