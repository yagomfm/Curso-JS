//Função Normal
function calc(x1, x2, operador) {

    return eval(`${x1} ${operador} ${x2}`);

}

let resultado = calc(1, 2, "+");

console.log(resultado);

// Função Anônima
/*(function(x1, x2, operador) {

    return eval(`${x1} ${operador} ${x2}`);

})(1, 2, "+");

let resultado = calc(1, 2, "+");

console.log(resultado);
*/

// Arrow Function
/*let calc(x1, x2, operador) => {

    return eval(`${x1} ${operador} ${x2}`);

}

let resultado = calc(1, 2, "+");

console.log(resultado);
*/

//Eventos
//Janela. Manipula a aplicação
window.addEventListener('focus', event => {
    console.log('focus');
});

//Site
document.addEventListener('click', event => {
    console.log('click');
})

//Data
//TimeStamp: quantidade de segundaos desde 1970
let agora = Date.now();
console.log(agora);

let data = new Date()
console.log(data);
console.log(data.getDate());
console.log(data.getFullYear());
console.log(data.getMonth());
console.log(data.toLocaleDateString("pt-BR"));

//Array: variável indexada. A posição são os índices e os valores são os dados
let carros = ["palio 98", "toro", 'uno', 10, true, new Date(), function(){}];

console.log(carros);
console.log(carros.length);
console.log(carros[0]);
console.log(carros[5].toLocaleDateString("pt-BR"));

// forEach: laço para percorrer Array
carros.forEach(function(value, index){

    console.log(index, value);

});

// Classe: irá englobar todos os assuntos em comum. conjunto de atributos e métodos
// this: comando usado para referenciar atributos e metodos na mesma classe
// Instância: é quando o objeto representa uma classe
/*
let celular = function() {

    this.cor = "prata";

    this.ligar = function(){
        console.log('Uma ligação');
        return 'Ligando'
    }

}

let objeto = new celular();

console.log(objeto.ligar());
*/
class celular {

    constructor(){
        this.cor = 'prata';
    }

    ligar(){
        console.log('Uma ligação');
        return 'Ligando'
    }
}
let objeto = new celular();

console.log(objeto.ligar());
