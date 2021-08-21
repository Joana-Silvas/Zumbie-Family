var vidaZumbie = 150

function startGamer() {

    alert('Escolha com quem você ira jogar.')


    while (true) {
        var qualPersonagem = prompt('Escolha um personagem: \n1- Lucas A.\n2- Ana B.\n3- Luiz H.')
        if (qualPersonagem == 1) {
            alert('Lucas A. escolhido')
            document.getElementById('demo').innerHTML = 'Lucas Fase 1'
            document.getElementById('faseButton').innerHTML = ' <button onclick="lucasAf1()">Iniciar fase 1</button>'
                break;
        } else if (qualPersonagem == 2) {
            alert('Ana B. escolhido')
            document.getElementById('demo').innerHTML = 'Ana Fase 1'
            document.getElementById('faseButton').innerHTML = ' <button onclick="anaBF1()">Iniciar fase 1</button>'
                break;
        } else if (qualPersonagem == 3) {
            alert('Luiz H.. escolhido')
            document.getElementById('demo').innerHTML = 'Luiz Fase 1'
            document.getElementById('faseButton').innerHTML = ' <button onclick="luizHf1()">Iniciar fase 1</button>'
                break;
        } else {
            alert('Personagem invalido')
        }
    }
}

function endGame(){
    alert("Você se reuniu con sua familia meu parabés, fuja anstes que mais humanos apareçam.")
    vidaZumbie = 150;
    document.getElementById('demo').innerHTML = 'Inicio de jogo'
    document.getElementById('faseButton').innerHTML = '<button onclick="startGamer()">Iniciar jogo</button>'
}

