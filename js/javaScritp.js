
    $(".tables ul li").click(function () {

        $(this).siblings().removeClass("active").end().addClass("active");
        console.log($(this).data("class"));
        $($(this).data("class")).siblings().hide().end().show();

});