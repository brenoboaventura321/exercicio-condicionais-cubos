const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
if (totalDeRendimentos>28_559.70){
    if(aposentada || portadoraDeDoenca){
        console.log("ISENTA");
    }else{
        console.log("PEGA LEAO");
        console.log("CORRE MENINO NEY");
    }
}else{
    console.log("VAZA LEAO! JA TA DIFICIO SEM VOCE");
}