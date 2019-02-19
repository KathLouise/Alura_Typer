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
        $("#btn-reinicia").addClass("desabilitado");
        var cronometroId = setInterval(function(){
            tempoRestante--;
            $(".tempo-digitacao").text(tempoRestante);
            if(tempoRestante < 1){
                clearInterval(cronometroId);
                finalizaJogo();
            }
        }, 1000);
    });
}