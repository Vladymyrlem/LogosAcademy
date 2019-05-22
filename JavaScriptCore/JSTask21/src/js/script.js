$(document).ready(function () {
    $.validator.setDefaults({
        ignore: ""
    });
    $.validator.addMethod("dateFormat",
        function (value, element) {
            return value.match(/^dd?-dd?-dd$/);
        },
        "Please enter a date in the format dd-mm-yyyy.");

    $.validator.addMethod('nameFormat', function (value, element,) {
        return "".test(value);
    }, "Value name can not be empty");
    $.validator.addMethod("not_numbers", function (value, element) {
            return !/[0-9]*/.test(value);
        },
        "Please don't insert numbers.");

    function isName() {
        return $('#name').val().length > 0;
    }

    function isAge() {
        return $('#age').val().length > 0;
    }

    function isBirthday() {
        return $('#birthday').val().length > 0;
    }

    let validator = $("#my_form").validate(
        {
            rules: {
                name: {
                    required: true,
                    minLength: {
                        depends: isName,
                        param: 5
                    },
                    nameFormat: true,

                },
                age: {
                    required: true,
                    number: true,
                    numberFormat: true,
                    minLength: {
                        depends: isAge,
                        param: 1
                    },
                    equalTo: {
                        depends: isAge,
                        param: "#age"
                    }
                },
                myDate: {
                    dateFormat: true,
                    minLength: {
                        depends: isBirthday
                    }
                }
            },
            errorElement: "span",
            errorPlacement: function () {
                return false;
            },
            messages: {
                name: {
                    required: "Поле имя обязательно для заполнения",
                    minlength: "Длина имени должна быть больше 5-ти символов"
                },
                age: {
                    required: "Поле возраст обязательно для заполнения",
                    minlength: "Длина имени должна быть больше 1-го символа"
                }
            },

        }
    );
    if(validator) {
        $("#btnSubmit").click(function () {
            $("#my_form").effect("shake");
        });
    } else {
        $("#my_form").hide("blind", {direction: "vertical"}, 1000);

    }
    // if (jQuery("#my_form").validate()) {
    //     $("#my_form").hide( "blind", {direction: "vertical"}, 1000 );
    // }else{
    //     $("#my_form").effect( "shake" );
    //
    // }
    function blindForm() {
        $("form").submit(function () {
            $("#my_form").hide("blind", {direction: "vertical"}, 1000);
        });

    }

    function shakeForm() {
        $("form").submit(function () {
            $("#my_form").effect("shake");
        });
    }

    function validForm() {
        if(jQuery("#my_form").validate()) {
            $("#my_form").hide("blind", {direction: "vertical"}, 1000);
        } else {
            $("#my_form").effect("shake");

        }
    }
});



