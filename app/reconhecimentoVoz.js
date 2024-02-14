const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  chute = (e.results[0][0].transcript)
  chute = chute.replace(/\./g, '')
  exibirChuteNaTela(chute)
  verificarValorValido(chute)
  console.log(chute)
}

const numeroNaTela = document.querySelector('span')


function exibirChuteNaTela(chute) {
  if (chute == 'Quero uma dica') {
    dica()
    return
  } 
  elementoChute.innerHTML = `
      <div>Você disse</div>
      <span class="box">${chute}</span>
  `
}

function dica () {
  let numeroDica = 0
  if (numeroSecreto >= 500) {
      numeroDica = numeroSecreto - parseInt(Math.random() * 20 + 5)
  } else {
      numeroDica = numeroSecreto + parseInt(Math.random() * 20 + 5)
  }
  elementoChute.innerHTML = `
      <div class="dica">
      <b>DICA:</b><br>
      O número secreto está próximo de ${numeroDica}
      </div>
  `
  const evento = new Event('Dica')
  document.dispatchEvent(evento)
}


  recognition.addEventListener('end', () => recognition.start())
