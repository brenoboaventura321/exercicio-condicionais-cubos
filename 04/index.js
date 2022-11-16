const ladoA = 6;
const ladoB = 6;

//seu código aqui
let de= "";
let bucha=`Bucha de ${de}`;

if (ladoA,ladoB>=0 && ladoA,ladoB<=6){
//especifica que não pode haver numero maior que 6 e menor que 0 no domino
    if (ladoA === ladoB ){
    //para que seja uma bucha é necessario que os dois lados possuam o mesmo valor numerico
        if (ladoA===0){
        console.log(bucha+"Branco");
        }else if(ladoA===1){
        console.log(bucha+"Ás");
        }else if(ladoA===2){
        console.log(bucha+"Duque");
        }else if(ladoA===3){
        console.log(bucha+"Terno");
        }else if(ladoA===4){
        console.log(bucha+"Quadra");
        }else if(ladoA===5){
        console.log(bucha+"Quina");
        }else{
        console.log(bucha+"Sena");
        }            
    }else{
        console.log("Não é uma bucha");
    }
}else{ 
//nao é possivel dentro dos lados de um domino um numero maior que 6 ou menor que 0
    console.log("impossivel");
}