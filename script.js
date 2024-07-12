function randomNumber() {
    let input1 = document.getElementById("valor1").value
    let input2 = document.querySelector("#valor2").value
    let resultado = document.querySelector("#generatedNumber")

    const min = Math.floor(input1)
    const max = Math.floor(input2)
    const result = Math.floor(Math.random() * (max - min)) + min
    console.log(result)
    resultado.value = `${result}`
}