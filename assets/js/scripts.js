function chamarAPI() {
    $.ajax({
        url: 'http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas/',
        type: 'GET',
        dataType: 'json',
        contextType: 'application/json',
        beforeSend: function (){
            $.blockUI({ message: '<h4>Just a moment...</h4>' });
        },
        success: function(data) {

            for (var i=0; i < data.length; i++) {
                var option = new Option(data[i].nome, data[i].codEscola);
                $('#escolas').append(option);
            }

            $.unblockUI();
        }
    });
}
