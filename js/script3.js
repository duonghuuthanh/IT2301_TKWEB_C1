$(document).ready(function() {
    $(".tab-content > section:not(:first-child)").hide();

    $(".tab > li > a").click(function() {
        event.preventDefault();
        $(".tab > li").removeClass("active");
        $(this).parent().addClass("active");

        let href = $(this).attr("href");
        $(".tab-content > section").hide();
        $(href).show();
    });

    let idx = 0;

    $(".slider").height($(".slider img:first-child").height() + 5);

    setInterval(function() {
        idx++;
        if (idx > $(".slider img").length)
            idx = 1;

        $(".slider img").fadeOut(1000, function() {
            $(`.slider img:nth-child(${idx})`).fadeIn(1000);
        });
        
    }, 3000);
});