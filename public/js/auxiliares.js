/*Conforme vai sendo digitado o conteúdo na caixa de texto, 
 *compara com a frase dada*/
function comparaFrase(){
    var frase = $(".frase").text();
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.substr(0, digitado.length);
        
        if(digitado == comparavel){
            campo.addClass("campo-correto");
            campo.removeClass("campo-erro");
        } else {
            campo.removeClass("campo-correto")
            campo.addClass("campo-erro");
        }
    });
}

$(".removerLinha").click(removeLinha);

function removeLinha(event){
    event.preventDefault();
    $(this).parent().parent().remove();
};