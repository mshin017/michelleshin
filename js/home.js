$(function () {
    $("#openabout").click(function () {
        $("#about").toggle();
    });

    $("#openportfolio").click(function () {
        $("#portfolio").toggle();
    });

    $("#opencontact").click(function () {
        $("#contact").toggle();
    });

    $("#aboutnav").click(function(){
        $("#about").show();
        $("#about").get(0).scrollIntoView()
    })
    $("#portfolionav").click(function(){
        $("#portfolio").show();
        $("#portfolio").get(0).scrollIntoView()
    })
    $("#contactnav").click(function(){
        $("#contact").show();
        $("#contact").get(0).scrollIntoView()
    })
})

