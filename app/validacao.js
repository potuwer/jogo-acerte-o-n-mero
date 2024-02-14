function verificarValorValido (chute) {
    const numero =+ chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Inválido</div>`
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></i></div>`
        
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></i></div>`
    
    }
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente')
        window.location.reload()
})

