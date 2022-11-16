const nota = 8.5;

let conceito="";
if(nota>=0 && nota<=10){
    if (nota>4){
        if(nota<5.9)
            conceito="D"
        else if(nota<=7.9)
            conceito= "C"
        else if(nota<=8.9)
            conceito= "B"
        else
            conceito="A"
        console.log(`O estudante obteve conceito ${conceito}`)

    }else{
        console.log(`O estudante obteve conceito ${conceito}`);
    }
}else{
    console.log("nota invalida");
}