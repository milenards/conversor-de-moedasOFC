function CotacaoDoDia(){
    let moeda = document.getElementById("moeda-cotacao").value

    $.ajax({
        type: "GET",
        url: "https://economia.awesomeapi.com.br/json/last/" + moeda,
        dataType: "json",
        success: function (dados) {
            let objMoedaExtraida = Object.values(dados)
            let venda = objMoedaExtraida[0].ask
            document.getElementById("resultado-cotacao").innerHTML = venda
        }
    });

    
}