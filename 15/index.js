const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if(!primeiroNome){
    console.log("pimeiro nome é obrigatorio")

}else if(sobrenome){
    if(!apelido){
    console.log(primeiroNome+sobrenome);

    }else{
        console.log(`${primeiroNome} ${sobrenome} e de apelido ${apelido}`);
    
    }
}else{
    console.log(primeiroNome);
}

