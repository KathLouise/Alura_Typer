function finalizaJogo(){
    campo.attr("disabled", true);
    $(".tempo-digitacao").text(tempoInicial);
    $("#btn-reinicia").attr("disabled", false);
    $("#btn-reinicia").removeClass("desabilitado");
    campo.addClass("campo-desabilitado");
    inserePlacar();
}

function reiniciaJogo(){
    $("#btn-reinicia").click(function(){
        campo.attr("disabled", false);
        campo.val("");
        $(".qtd-palavras").text("0");
        $(".qtd-caracteres").text("0");
        contadorTempo();
        campo.removeClass("campo-desabilitado");
        campo.removeClass("campo-correto");
        campo.removeClass("campo-erro");
    });
}