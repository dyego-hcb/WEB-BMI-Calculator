function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value / 100; // Convertendo altura para metros

  var bmi = weight / (height * height);

  var resultDiv = document.getElementById("result");

  if (isNaN(bmi)) {
    resultDiv.textContent =
      "Por favor, preencha corretamente o peso e a altura.";
    return;
  }

  resultDiv.textContent = "Seu BMI é: " + bmi.toFixed(2);
}
