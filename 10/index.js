const caractere = "A";

if(typeof caractere=== "string"){
    if (caractere ==="A"||caractere === "E" ||caractere ==="I"||caractere === "O"|| caractere ==="U"|| caractere ==="a"||caractere === "e"||caractere === "i"||caractere === "o"||caractere === "u"){
        console.log("VOGAL");
        if(caractere === caractere.toUpperCase()){
            console.log("maiuscula");
        }else{
            console.log("Minuscula");
        }
    }else{
        console.log("CONSOANTE");
    }
}else{
    console.log("NUMERO");
}