function verificarParOuImpar() {
    var inNumero = document.getElementById('inNumero')
    var outParImpar = document.getElementById('outParImpar')

    var numero = Number(inNumero.value)
    var resposta = ""

    if (isNaN(numero)) {
        alert("'" + inNumero.value + "'" + " Não é um número válido!")
        inNumero.focus()
        return
    } else if (numero % 2 == 0) {
        resposta = "Resposta: " + numero + " é PAR"
        outParImpar.textContent = resposta
    } else {
        resposta = "Resposta: " + numero + " é IMPAR"
        outParImpar.textContent = resposta
    }

}

var btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', verificarParOuImpar)