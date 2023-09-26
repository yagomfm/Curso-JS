// console.log('Olá Mundo');
/*
var olaMundo = "Olá Mundo";
console.log(olaMundo);
*/

/*
let a = 10;
const b = 20;

console.log(a == b); //== comparação
console.log(a === b); //
console.log(a != b); //!= diferente
*/

// && = AND
// || = OR

/*
let cor = "verde";
if (cor === 'verde') {
    console.log('Siga');
} else if (cor === 'amarelo') {
    console.log('Atenção');
} else {
    console.log('Pare');
}
*/

let cor = 'verde';
switch (cor) {
    case "verde":
        console.log("Siga");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Não sei");
}

let n = 5;

for (let i = 0; i <= 10; i++) {

    console.log(`${i} X ${n} = ${i*n}`);
    //console.log(i + " X " + n + " = " + (i*n));

}