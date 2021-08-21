
function anaBF1(){
    var vidaHumano = 50

    alert('A mãe se chama Ana, com fortes vínculos familiares fas de tudo por sua familia, tem um bom dialogo, flexibilidade e adaptação a todo tipo de situações.')
    alert('Você se separou de sua familia, corra dos humanos e va encontrá-los')
    
    for (;vidaZumbie >= 1 && vidaHumano >= 1;) {
        var acao = prompt('Você esta na primeira sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            alert('Na primeira fase não se pode fugir, não tem para onde correr!!!')
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(`Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.`)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        document.getElementById('demo').innerHTML = 'Lucas Fase 2'
        document.getElementById('faseButton').innerHTML = ' <button onclick="anaBF2()">Iniciar fase 2</button>'
        
    }

}
function anaBF2(){
    var vidaHumano = 50
    var fulga = 1
    alert('Você entrou na segunda sala , para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    while (vidaZumbie >= 1 && vidaHumano >= 1) {
        var acao = prompt('Você esta na segunda sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            if(fulga > 0){
                vidaRecuperar = Math.floor(Math.random() * 30);
            vidaZumbie = vidaZumbie + vidaRecuperar
            alert(`Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar}`)
            alert('Voce voltou para sala anterior para recuperar um pouco de sua força, estará seguindo novamente para proxima sala!!!')
            fulga--
            }else{
                alert('voce já fugiu uma vez nesta sala, não é possível mais fugir')
            }
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(`Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.`)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        document.getElementById('demo').innerHTML = 'Lucas Fase 3'
        document.getElementById('faseButton').innerHTML = ' <button onclick="anaBF3()">Iniciar fase 3</button>'
    }

}

function anaBF3(){
    var vidaHumano = 50
    alert('Você entrou na terceira sala , para percorrer o caminho até a saindo, neste momento você olha em volta e avista um humano que está correndo em sua direção.')
    
    while (vidaZumbie >= 1 && vidaHumano >= 1) {
        var acao = prompt('Você esta na segunda sala, você desaja:\n1- fugir \n2- atacar o humano')
        if(acao == 1){
            vidaRecuperar = Math.floor(Math.random() * 30);
            vidaZumbie = vidaZumbie + vidaRecuperar
            alert(`Você está voltando para recupera forças sua vida ira recuperar em: ${vidaRecuperar}`)
            alert('Voce voltou para sala anterior para recuperar um pouco de sua força, estará seguindo novamente para proxima sala!!!')
        }else if(acao == 2){
            var danoZumbie = Math.floor(Math.random() * 50);
            var danoHumano = Math.floor(Math.random() * 50);
            vidaZumbie =  vidaZumbie - danoHumano
            vidaHumano = vidaHumano - danoZumbie
            alert(`Voce atacou o humano e o humano efetuou um ataque:\nDano Zumbie: ${danoZumbie}\nDano Humano: ${danoHumano}\nVocê está com ${vidaZumbie} de vida e o Humano está com: ${vidaHumano} de vida.`)
        }else{
            alert('Ação invalida')
        }
    }if(vidaZumbie <= 0){
        alert('Game Over\nVoltara para o inicio do jogo')
        startGamer()
    }else{
        alert('Voce venceu o humano e seguira para proxima fase')
        document.getElementById('demo').innerHTML = 'End Game'
        document.getElementById('faseButton').innerHTML = '<button onclick="endGame()">Reiniciar Jogo</button>'
    }

}