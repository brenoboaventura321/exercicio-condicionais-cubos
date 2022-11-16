const alturaEmCm = 188;

//seu código aqui
if (alturaEmCm>=180){
    if(alturaEmCm<=185){
        console.log("líbero");
    }else if(alturaEmCm<=195){
        console.log("ponteiro");
    }else if(alturaEmCm<=205){
        console.log("oposto");
    }else{
        console.log("central");
    }
}else{
    console.log("REPROVADO");
}