//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento==="credito"){
    let valorFinal= valorDoProduto-(valorDoProduto*0.05);
    console.log(`o valor do produto com desconto é de R$ ${valorFinal/100}`);
}else if(tipoDePagamento==="cheque"){
    let valorFinal= valorDoProduto-(valorDoProduto*0.03);
    console.log(`o valor do produto com desconto é de R$ ${valorFinal/100}`);
}else{
    let valorFinal= valorDoProduto-(valorDoProduto*0.10);
    console.log(`o valor do produto com desconto é de R$ ${valorFinal/100}`);
}