var frase = $(".frase").text();
/*Pega a quantidade de palavras que tem na frase
 * faz isso através da função split, incrementando o 
 * contador a cada espaço encontrado */
var numPalavras = frase.split(" ").length;

var tamanhoFrase = $(".tamanho-frase");
//Atribui o numero de palavras ao tamanho da frase
tamanhoFrase.text(numPalavras);

/*Captura atraves do metodo "on" qual a quantidade de palavras digitadas pelo usuário, 
 * usando um Regex para não contar espaços em branco; e a quantidade de caracteres 
 * digitada*/
var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length-1;
    $(".qtd-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $(".qtd-caracteres").text(qtdCaracteres);
});

/*Utiliza o método "one" (que só executa uma unica vez e impede que a função seja 
 * executada todas as vezes que o campo recebe focus)
 * e decresce o tempo setado no HTML até chegar em 0, então trava a textarea 
 * impedindo que o usuário continue digitando (vulgo game over)*/
var tempoRestante = $(".tempo-digitacao").text();
campo.one("focus", function() {
    var cronometroId = setInterval(function(){
        tempoRestante--;
        $(".tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
            campo.attr("disabled", true);
            clearInterval(cronometroId);
        }
    }, 1000);
});