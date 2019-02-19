function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var nomeUsuario = "David";
    var qtdPalavras = $(".qtd-palavras").text();

    var linha = novaLinha(nomeUsuario, qtdPalavras);
    linha.find(".removerLinha").click(removeLinha);

    corpoTabela.append(linha);
}

function novaLinha(nomeUsuario, qtdPalavras){
    var linha = $("<tr>");
    //cria a tag <td>[NomeUsuario]</td>
    var colunaUsuario = $("<td>").text(nomeUsuario);
    //cria a tag <td>[Quantidade de Palavras]</td>
    var colunaPalavras = $("<td>").text(qtdPalavras);
    var colunaRemover =$("<td>");
    var link = $("<a>").attr("href", "#").addClass("removerLinha");
    //cria a tag <i class="small material-icons">delete</i>
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    return linha;
}
