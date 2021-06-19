
/***** Start Tables section ******/
$(".tables ul li").click(function () {
        //remove in ly siblinges and add class in me
        $(this).siblings().removeClass("active").end().addClass("active");
        console.log($(this).data("class"));
        $($(this).data("class")).siblings().hide().end().show();

        $($(this).data("class")).siblings().removeClass("d-flex d-md-block").end().addClass("d-flex d-md-block");

});


    /***** Start why this is awesome section ******/
    $( ".awesome .card" ).hover(
        function() {
            $(this).removeClass('shadow-sm');
            $(this).addClass('shadow').css('cursor', 'pointer');
        }, function() {
            $(this).removeClass('shadow');
            $(this).addClass('shadow-sm');
        }
    );

    /****** Start saying section ******/
    // $( ".saying .card" ).hover(
    //     function() {
    //         // $(this).removeClass('border-bottom');
    //         $(this).addClass('border-bottom-card').css('cursor', 'pointer');
    //     }, function() {
    //         // $(this).addClass('border-bottom');
    //         $(this).removeClass('border-bottom-card');
    //     }
    // );


    /***** Start footer ******/
    $(".year").text(new Date().getFullYear());