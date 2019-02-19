var campo = $(".campo-digitacao");
var tempoInicial = $(".tempo-digitacao").text();

$(function(){
    incializaCampos();
    contadorPalavrasCaracteres();
    contadorTempo();
    reiniciaJogo();
    comparaFrase();
})

function incializaCampos(){
    var frase = $(".frase").text();
    /*Pega a quantidade de palavras que tem na frase
    * faz isso através da função split, incrementando o 
    * contador a cada espaço encontrado */
    var numPalavras = frase.split(" ").length;

    var tamanhoFrase = $(".tamanho-frase");
    //Atribui o numero de palavras ao tamanho da frase
    tamanhoFrase.text(numPalavras);
    campo.val("");
    campo.removeClass("campo-desabilitado");
    campo.removeClass("campo-correto");
    campo.removeClass("campo-erro");
}



