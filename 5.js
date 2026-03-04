
const nota1 = Number(prompt("digite a primeira nota:"));
const nota2 = Number(prompt("digite a segunda nota:"));
const nota3 = Number(prompt("digite a terceira nota:"));
const media = (nota1 + nota2 + nota3) / 3;
if (media >= 7) {
    alert(`Media: ${media.toFixed(1)} - aprovado`);
    console.log(`Aprovado com média ${media.toFixed(1)}`);
} else {
    alert(`Media: ${media.toFixed(1)} - reprovado. `);
    console.log(`Reprovado com média ${media.toFixed(1)}`);
}