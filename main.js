$(document).ready(function () {
    
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules:{
            nome:{required:true},
            email:{required:true, email:true},
            telefone:{required:true},
            aceitoTermos:{required:true}
        },

        messages:{
            nome:'Por favor, insira o seu nome.',
            email:'Por favor, insira seu e-mail.',
            telefone:'Por favor, insira seu telefone',
            aceitoTermos: 'Você deve aceitar os termos para continuar.'
        },

        submitHandler:function(form){
            alert("Seu cadastro foi enviado.");
            form.reset();
        },

        invalidHandler:function (evento, validador) {
            let camposIncorretos=validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })

});