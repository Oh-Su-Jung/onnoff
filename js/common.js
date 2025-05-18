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
})
