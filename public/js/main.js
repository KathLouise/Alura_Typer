var campo = $(".campo-digitacao");
var tempoInicial = $(".tempo-digitacao").text();

$(function(){
    incializaCampos();
    contadorPalavrasCaracteres();
    contadorTempo();
    reiniciaJogo();
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
}

/*Captura atraves do metodo "on" qual a quantidade de palavras digitadas pelo usuário, 
 * usando um Regex para não contar espaços em branco; e a quantidade de caracteres 
 * digitada*/
function contadorPalavrasCaracteres(){
    campo.on("input", function() {
        var conteudo = campo.val();
        var qtdPalavras = conteudo.split(/\S+/).length-1;
        $(".qtd-palavras").text(qtdPalavras);
    
        var qtdCaracteres = conteudo.length;
        $(".qtd-caracteres").text(qtdCaracteres);
    });
}

/*Utiliza o método "one" (que só executa uma unica vez e impede que a função seja 
 * executada todas as vezes que o campo recebe focus)
 * e decresce o tempo setado no HTML até chegar em 0, então trava a textarea 
 * impedindo que o usuário continue digitando (vulgo game over)*/
function contadorTempo(){
    var tempoRestante = $(".tempo-digitacao").text();
    campo.one("focus", function() {
        $("#btn-reinicia").attr("disabled", true);
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $(".tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                campo.attr("disabled", true);
                clearInterval(cronometroId);
                $(".tempo-digitacao").text(tempoInicial);
                $("#btn-reinicia").attr("disabled", false);
            }
        }, 1000);
    });
}

function reiniciaJogo(){
    $("#btn-reinicia").click(function(){
        campo.attr("disabled", false);
        campo.val("");
        $(".qtd-palavras").text("0");
        $(".qtd-caracteres").text("0");
        contadorTempo();
    });
}
