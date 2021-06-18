
    $(".tables ul li").click(function () {

        $(this).siblings().removeClass("active").end().addClass("active");
        console.log($(this).data("class"));
        $($(this).data("class")).siblings().hide().end().show();

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
    /***** End why this is awesome section ******/
    $( ".saying .card" ).hover(
        function() {
            $(this).removeClass('border-bottom');
            $(this).addClass('border-bottom-card').css('cursor', 'pointer');
        }, function() {
            $(this).addClass('border-bottom');
            $(this).removeClass('border-bottom-card');
        }
    );
    /****** Start saying section ******/

    /***** footer ******/
    $(".year").text(new Date().getFullYear());