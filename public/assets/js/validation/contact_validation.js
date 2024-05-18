

$.validator.setDefaults({
    submitHandler: function () {
        var response = grecaptcha.getResponse();
        //recaptcha failed validation
        if (response.length == 0)
        {
            toastr.error('Debes completar el captcha para poder continuar');
            //$('#recaptcha-error').show();
           // return false;
        }
        //recaptcha passed validation
        else
        {
            //$('#btn_contact').hide();
            $.ajax({
                type: "POST",
                beforeSend: function () {
                    toastr["info"]("Espere por favor...");
                },
                url: "include/send_email_mail.php",
                data: $("#signupForm1").serialize(),

                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    /* $("#success").html(response);
                    $('#success').html('<span class="btn btn-common">Sus datos se han enviado correctamente</span>').fadeIn(7000);
                    $('#success').fadeOut(3000);
                    $('#btn_contact').show(); */
                    toastr["success"]("Datos enviados, un asesor se pondra en contacto con usted");

                    grecaptcha.reset();
                    /* $("#signupForm1")[0].reset();
                    $("#signupForm1").validate().resetForm();
                    $("#signupForm1").find('.has-error').removeClass("has-error");
                    $("#signupForm1").find('.has-success').removeClass("has-success");
                    $('#signupForm1').find('.form-control-feedback').remove() */
                    $('#signupForm1').trigger("reset");
                }
            });
           //$('#recaptcha-error').hide();
           // return true;
        }
    }
});

    $(document).ready(function () {

        toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "rtl": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": true,
            "onclick": null,
            "showDuration": 300,
            "hideDuration": 1000,
            "timeOut": 5000,
            "extendedTimeOut": 1000,
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          }

        $("#signupForm1").validate({
            rules: {
                nombre: "required",
                email: {required: true, email: true},
                tel: {required: true, number: true},
                comentarios: "required",
                asunto: "required",
                llegada: "required",
                salida: "required",
                habitaciones:  {required: true, number: true},
                eventos: "required",
                numPersonas: {required: true, number: true},
            },

            messages: {
                nombre: "Falta nombre completo",
                email: "Falta email",
                tel: {required: "Ingresa un numero de telefono", number: "Introduce tú número"},
                comentarios: "Escriba su mensaje",
                asunto: "Elige un asunto",
                llegada: "Eliga la fecha de llegada",
                salida: "Eliga la fecha de salida",
                habitaciones: {required: "Ingrese el numero de habitaciones", number: "Introduce un número"},
                eventos: "Indique si solicita Salon de Eventos",
                numPersonas:{required: "Ingrese el numero de personas", number: "Introduce un número"},
            },
            errorElement: "em",
            errorPlacement: function (error, element) {
                toastr["error"](error);
            }
        });
    });