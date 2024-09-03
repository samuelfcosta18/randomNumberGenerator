function randomNumber() {
    let input1 = document.getElementById("valor1").value
    if (input1 == "") {
        input1 == 0
    }
    let input2 = document.querySelector("#valor2").value
    let resultado = document.querySelector("#generatedNumber")

    const min = Math.floor(input1)
    const max = Math.floor(input2)
    const result = Math.floor(Math.random() * (max - min)) + min
    console.log(result)
    resultado.value = `${result}`
}
function changeLanguage() {
    let language = document.querySelector("#language")
    if (language.options[language.selectedIndex].value === "portuguese") {
        document.querySelector("#title").innerHTML = "Gerador de Número Aleatório"
        document.querySelector("#valor1").placeholder = "Insira o valor mínimo aqui"
        document.querySelector("#valor2").placeholder = "Insira o valor máximo aqui"
        document.querySelector("#number").innerHTML = "O número gerado é:"
        document.querySelector("#botao1").innerHTML = "Gerar"
    } else {
        document.querySelector("#title").innerHTML = "Random Number Generator"
        document.querySelector("#valor1").placeholder = "Insert here the minimum value"
        document.querySelector("#valor2").placeholder = "Insert here the maximum value"
        document.querySelector("#number").innerHTML = "The generated number is:"
        document.querySelector("#botao1").innerHTML = "Generate"
    }
}
function darkMode() {
    if (document.querySelector("main").classList.contains("light")) {
        document.querySelector("main").classList.add("dark")
        document.querySelector("main").classList.remove("light")
    } else {
        document.querySelector("main").classList.remove("dark")
        document.querySelector("main").classList.add("light")
    }
}