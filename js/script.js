$(document).ready(function(){
    
    //Scroll animado cuando se clickea un link interno
    linkInterno = $('a[href^="#"]');
    linkInterno.on('click',function(e) {
    	e.preventDefault();
    	var href = $(this).attr('href');
    	$('html, body').animate({ scrollTop : $( href ).offset().top - 65 }, "slow");
    });

    //Esconder menu cuando se selecciona un link en pantallas chicas
    $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});	