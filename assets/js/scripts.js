function chamarAPI() {
    $.ajax({
        url: 'http://mobile-aceite.tcu.gov.br:80/nossaEscolaRS/rest/escolas/',
        type: 'GET',
        dataType: 'json',
        contextType: 'application/json',
        beforeSend: function (){
            $.blockUI({ message: '<h1>Just a moment...</h1>' });
        },
        success: function(data) {
            $("#txtSaida").val(JSON.stringify(data));
            $.unblockUI();
        }
    });
}
