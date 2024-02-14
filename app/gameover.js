function telaGameOver () {
    document.body.innerHTML = `
        <div class="over">
            <img src="panda.png" class="panda1">    
            <img src="panda.png" class="panda2">
            <h1>GAME OVER</h1>
            <h3>O número secreto era ${numeroSecreto}.</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        </div>
    `
    document.body.classList.add('telaGameOver')   
}
