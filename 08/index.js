const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

const permicaoIdade=(idade>= 12 && idade<=65 && !possuiPatologia ? true : false);

if (permicaoIdade){
    if (ehEstudante){
        console.log("10 reais");
    }else{
        console.log("20 reais");
    }
}else{
    console.log("ACESSO NEGADO");
}