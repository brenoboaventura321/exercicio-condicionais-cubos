//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

let risco="";

if(quantidadeDeAguaIngerida<1.5)
    risco="ALTO - Você está ingerindo pouquissima água, beba mais água!"
else if(quantidadeDeAguaIngerida<3)
    risco="MODERADO - Você está ingerindo pouca água, beba mais!"
else
    risco="BAIXO - Você está ingerindo uma boa quantidade de água, parabéns!"

console.log(`Risco ${risco}`)
