function carregarEscolas() {
    $.ajax({
        url: 'http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas/',
        type: 'GET',
        dataType: 'json',
        contextType: 'application/json',
        beforeSend: function () {
            $.blockUI({ message: '<img src="http://1.bp.blogspot.com/-iB2k6jP-vQo/Va_-sCswWPI/AAAAAAAAXD0/j_UUWA3dcn8/s1600/carregando-pacotes.gif"></img>' });
        },
        success: function(data) {

            for (var i=0; i < data.length; i++) {
                var option = new Option(data[i].nome, data[i].codEscola);
                $('#escolas').append(option);
            }

            $.unblockUI();
        },
       error: function(err) {
            console.log(err);
       }
    });
}

function detalhesEscola() {

    var codigoEscola = $('#escolas').val();

    $.ajax({
        url: 'http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas/' + codigoEscola,
        type: 'GET',
        dataType: 'json',
        contextType: 'application/json',
        beforeSend: function () {
            $.blockUI({ message: '<img src="http://1.bp.blogspot.com/-iB2k6jP-vQo/Va_-sCswWPI/AAAAAAAAXD0/j_UUWA3dcn8/s1600/carregando-pacotes.gif"></img>' });
        },
        success: function(data) {

            console.log('Dados retornados', data);

            $.unblockUI();
        },
       error: function(err) {
            console.log(err);
       }
    });
}
