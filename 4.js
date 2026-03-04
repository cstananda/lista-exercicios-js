
const n1 = Number(prompt("digite o primeiro número:"));
const n2 = Number(prompt("digite o segundo número:"));
const n3 = Number(prompt("digite o terceiro número:"));

const maior = Math.max(n1, n2, n3);
const menor = Math.min(n1, n2, n3);

console.log(`Numeros digitados: ${n1}, ${n2}, ${n3}`);
console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);

alert(`Dos números digitados:\nO maior é: ${maior}\nO menor é: ${menor}`);