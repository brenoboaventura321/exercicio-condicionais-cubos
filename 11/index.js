//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

let valorParcela=0;

if (rendaMensalEmCentavos>= 200000 && mesesDecorridos<60 && totalJaPagoPeloAluno<1800000){
    valorParcela= 0.18*rendaMensalEmCentavos;
    console.log(`valor da parcela é de ${valorParcela/100} reais`);
}else{
    valorParcela=0
    console.log(`valor da parcela é de ${valorParcela}`);
}