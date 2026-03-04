const numero1 = Number(prompt("digite o primeiro numero:"));
const numero2 = Number(prompt("digite o segundo numero:"));

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

console.log("Resultados:");
console.log(`Soma: ${numero1} + ${numero2} = ${soma}`);
console.log(`Subtração: ${numero1} - ${numero2} = ${subtracao}`);
console.log(`Multiplicação: ${numero1} * ${numero2} = ${multiplicacao}`);
console.log(`Divisão: ${numero1} / ${numero2} = ${divisao}`);

alert(`Resultados:\nSoma: ${soma}\nSubtração: ${subtracao}\nMultiplicação: ${multiplicacao}\nDivisão: ${divisao}`);