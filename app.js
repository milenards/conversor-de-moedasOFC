function CotacaoDoDia(){
    let moeda = document.getElementById("moeda-cotacao").value

    $.ajax({
        type: "GET",
        url: "https://economia.awesomeapi.com.br/json/last/" + moeda,
        dataType: "json",
        success: function (dados) {
            let objMoedaExtraida = Object.values(dados)
            let venda = objMoedaExtraida[0].ask
            venda = new Intl.NumberFormat ('pt-br', {style: 'currency', currency:'BRL'}).format(venda)
            document.getElementById("resultado-cotacao").innerHTML = venda
        }
    });
}
    function ConverterValor(){
        let valor = $('#valor-converter').val()
        $.ajax({
            type: "GET",
            url: "https://economia.awesomeapi.com.br/json/last/USD-BRL",
            dataType: "json",
            success: function (dados) {
                let objMoedaExtraida = Object.values(dados)
                let dolar = objMoedaExtraida[0].ask
                let convertido = dolar * valor
                convertido = new Intl.NumberFormat('pt-br',{style:'currency', currency:'BRL'}).format(convertido)
                $('#valor-final').html(convertido)
            }
        });
}