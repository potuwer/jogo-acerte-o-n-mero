function verificarValorValido (chute) {
    if (chute == 'Quero uma dica') {
        return
    } 
    if (chute == 'Game Over') {
        telaGameOver()
        return
    }

    const numero =+ chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Inválido, diga um número válido</div>`
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor Inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.classList.add('telaGameOver')
        document.body.innerHTML = `
            <img src="confe.gif" class="confe1">
            <img src="confe.gif" class="confe2">
            <img src="lhama.png" class="lhama1">
            <img src="lhama.png" class="lhama2">
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

