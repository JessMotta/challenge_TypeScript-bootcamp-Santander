"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
/* let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

HTML
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
// RESPOSTA
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '0';
function somarAoSaldo(soma) {
    campoSaldo.innerHTML = (parseInt(campoSaldo.innerHTML) + soma).toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
// botaoAtualizar.addEventListener('click', function () {
//     let soma2 = parseInt(soma.value)
//     if(!soma2){
//        alert('Digite um número válido');
//     } else {  
//         soma.value = ''
//         somarAoSaldo(soma2);
//     }
// });
botaoAtualizar.addEventListener('click', function () {
    if (Number(soma.value)) {
        let soma2 = parseInt(soma.value);
        soma.value = '';
        somarAoSaldo(soma2);
    }
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
