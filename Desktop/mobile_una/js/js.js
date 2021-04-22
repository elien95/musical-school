 $(document).ready(function(){
    $(function(){
        var austDAY = new Date();
    austDAY =new Date(austDAY.getFullYear()+1,0,26);
    $("#defaultcounter").countdown({until : austDAY, format:'odHMS'});
    });

    $('.form-control').blur(function () {
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });

    $('.form-control').blur(function () {
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else{
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });
    var wow = new WOW({ mobile:false });
wow.init();
});