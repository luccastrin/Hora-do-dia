var valor_hora = document.querySelector('.titulo');
var resultado = document.getElementById('resultado');

var data = new Date();
var hora_atual = data.getHours();
var minuto_atual = data.getMinutes();

valor_hora.innerHTML = 'Agora são ' + hora_atual + ' horas e ' + minuto_atual + ' minutos.';

var fotos = document.createElement('img');

if( hora_atual > 6 && hora_atual <= 12 ) {
    //Bom dia!
    fotos.setAttribute('src', 'imagens/manha.jpg');
    document.body.style.backgroundColor = '#e2cd9f';
    fotos.style.borderRadius = '50%';
} else if( hora_atual > 12 && hora_atual <= 18 ) {
    //Boa tarde!
    fotos.setAttribute('src', 'imagens/tarde.jpg');
    document.body.style.backgroundColor = '#b9846f';
    fotos.style.borderRadius = '50%';
} else if( hora_atual > 18 && hora_atual <= 24 ) {
    //Boa noite!
    fotos.setAttribute('src', 'imagens/noite.jpg');
    document.body.style.backgroundColor = '#515454';
    fotos.style.borderRadius = '50%';
}
resultado.appendChild(fotos);
