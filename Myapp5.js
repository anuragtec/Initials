$(document).ready(function () {

    $(".backImgJQ").on({
        "click": function () {
            $(this).css("background", "PaleGreen");
        },
        "mouseover": function () {
            $(this).css("background", "white");
        },
        "dblclick": function () {
            $(this).css("background", "Maroon");
        },
    });
});

$(document).ready(function () {
    $('input, select').focus(function () {
        $(this).css("background", "orange");
    });

    $('input, select').blur(function () {
        $(this).css("background", "");
    });

    $('#quali').change(function () {
        $(this).css("background", "OrangeRed");
    });
});
// ---------------------------------------------------------------


// $(document).ready(function(){

//     $('#unameCheck').hide();
//     $('#emailcheck').hide();
//     $('#phonecheck').hide();
//     $('#passcheck').hide();
//     $('#cpasscheck').hide();
//     $('#branchcheck').hide();
//     $('#collegecheck').hide();
//     $('#10check').hide();
//     $('#12check').hide();
//     $('#expcheck').hide();
//     $('noticecheck').hide();


//     var username = false;   
//     var useremail = true;   
//     var userphone = true;   
//     var userpass = true;   
//     var usercpass = true;   
//     var userbranch = true;   
//     var usercollege = true;   
//     var user10 = true;   
//     var user12 = true;   
//     var userexp = true;   
//     var usernotice = true;   


//     $('#uname').keyup(function(){                               
//         nameCheck();                                           
//     });

//     function nameCheck(){                                      

//         var userValue = $('#unameCheck').val();                     


//         if(userValue == ""){
//             $('#unameCheck').show();
//             $('#unameCheck').html("*Please fill the name");
//             $('#unameCheck').focus();
//             $('#unameCheck').css("color","red");
//             username = false;
//             return false;

//         }
//         else
//         {
//             $('#unameCheck').hide();
//         }
//     }
// });

// ------------------------------------------------ datepicker -----------------------------------------------------

$(document).ready(function () {

    $("#datepick").datepicker();

});

// ----------------------------------------------validation-----------------------------------------------------------


$(document).ready(function () {

    $('#unameCheck').hide();
    $('#emailcheck').hide();
    $('#phonecheck').hide();
    $('#passcheck').hide();
    $('#cpasscheck').hide();
    $('#branchcheck').hide();
    $('#collegecheck').hide();
    $('#10check').hide();
    $('#12check').hide();
    $('#expcheck').hide();
    $('noticecheck').hide();


    var username = false;
    var useremail = false;
    var userphone = false;
    var userpass = false;
    var usercpass = false;
    var userbranch = false;
    var usercollege = false;
    var user10 = false;
    var user12 = false;
    var userexp = false;
    var usernotice = false;


    $("#uname").focusout(function () {

        check_username();
    });

    $("#idemail").focusout(function () {

        check_email();
    });

    $("#idphone").focusout(function () {

        check_phoneno();
    });

    $("#idpass").focusout(function () {

        check_password();
    });

    $("#idcpass").focusout(function () {

        check_conpassword();

    });

    $("#idbranch").focusout(function () {

        check_branch();
    });

    $("#idcollege").focusout(function () {

        check_college();
    });

    $("#id10").focusout(function () {

        check_marks10();
    });

    $("#id12").focusout(function () {

        check_marks12();
    });

    $("#idcompany").focusout(function () {

        check_company();
    });

    $("#idexp").focusout(function () {

        check_exp();
    });

    $("#idprofile").focusout(function () {

        check_profile();
    });

    $("#idnotice").focusout(function () {

        check_notice();
    });


    function check_username() {

        var username_len = $("#uname").val().length;

        if (username_len == "") {
            $('#unameCheck').html("*Please fill the name");
            $('#unameCheck').show();

            username = true;
        }
        else {
            $('#unameCheck').hide();
        }

    }

    function check_email() {

        var email_len = $("#idemail").val().length;

        if (email_len == "") {
            $('#emailcheck').html("*Please fill the email");
            $('#emailcheck').show();

            email_len = true;
        }
        else {
            $('#emailcheck').hide();
        }

    }

    function check_phoneno() {

        var phone_len = $("#idphone").val().length;

        if (phone_len == "") {
            $('#phonecheck').html("*Please fill the phone no");
            $('#phonecheck').show();

            phone_len = true;
        }
        else {
            $('#phonecheck').hide();
        }

    }

    function check_password() {

        var pass_len = $("#idpass").val().length;

        if (pass_len == "") {
            $('#passcheck').html("*Enter Password");
            $('#passcheck').show();

            pass_len = true;
        }
        else {
            $('#passcheck').hide();
        }

    }

    function check_conpassword(){

        var cpass_len = $("#idpass").val()
        var retype_pass = $("idcpass").val()

        if ( cpass_len == "" || cpass_len != retype_pass ) {
            $('#cpasscheck').html("*password don't match");
            $('#cpasscheck').show();

            cpass_len = true;
        }
        else {
            $('#cpasscheck').hide();
        }

    }

    function check_branch(){

        var branch_len = $("#idbranch").val().length;

        if (branch_len == "") {
            $('#branchcheck').html("*Enter branch");
            $('#branchcheck').show();

            branch_len = true;
        }
        else {
            $('#branchcheck').hide();
        }

    }

    function check_college() {

        var college_len = $("#idcollege").val().length;

        if (college_len == "") {
            $('#collegecheck').html("*Enter College");
            $('#collegecheck').show();

            college_len = true;
        }
        else {
            $('#collegecheck').hide();
        }

    }

    function check_company() {

        var company_len = $("#idcompany").val().length;

        if (company_len == "") {
            $('#companycheck').html("*Enter Company");
            $('#companycheck').show();

            company_len = true;
        }
        else {
            $('#companycheck').hide();
        }

    }

    function check_profile() {

        var profile_len = $("#idprofile").val().length;

        if (profile_len == "") {
            $('#profilecheck').html("*Enter profile");
            $('#profilecheck').show();

            profile_len = true;
        }
        else {
            $('#profilecheck').hide();
        }

    }

});