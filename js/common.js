$(document).ready(function(){
	
    $("#menuOpen").click(function(){
        $("#header").addClass("on")
    })
    $("#menuClose").click(function(){
        $("#header").removeClass("on")
    })
	

    $(".sRoom_faq .box ul li .q button").click(function(){
        $(this).closest("li").toggleClass("on")
    })

    $(window).scroll(function(){
        if ($(window).scrollTop() > 0){
            $("#header").addClass("scroll_on")
        } else {
            $("#header").removeClass("scroll_on")
        }
    })
})
