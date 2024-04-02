function converter() {
    const numInput = document.getElementById("numInput");
    const coversao = numInput.value * 5.05;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "O resultado da sua conversão em reais é: " + coversao + "R$";
}

const toggleBtn = document.getElementById("toggle");
const body = document.body;

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('drk')
})
