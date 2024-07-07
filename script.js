function randomNumber() {
    input2 = document.getElementById("valor2").value
    input3 = document.querySelector("#generatedNumber")

    max = input2
    const result = Math.floor(Math.random()*max)
    console.log(result)
    input3.value = `${result}`
}