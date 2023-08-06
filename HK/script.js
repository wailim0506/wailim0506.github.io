//use scroll() to excute function when user scroll the page
//use scrollTop() to check how much px is scrolled

$(document).ready(function(){
    var screenWidth = $(window).width()+30
    $("#disneyland").css("left",screenWidth)
    $("#lwf").css("right",screenWidth)
    $("#templeStreet").css("left",screenWidth)
	
    $(window).scroll(function(){
		var fadeOneStart = $("#fadeOneStart").position()
		var fadeTwoStart = $("#fadeTwoStart").position()
		var fadeThreeStart = $("#fadeThreeStart").position()
		var scrolled = $(window).scrollTop()
				
		if (scrolled >= fadeOneStart.top*(2/3)){
            $("#disneyland").css("display","flex")
			$("#disneyland").animate({"left":"0"},2500)
		}
		 
		 		
		if (scrolled >= fadeTwoStart.top*(2/3)){
            $("#lwf").css("display","flex")
			$("#lwf").animate({"right":"0"},2500)
		}
		 
		 		
		if (scrolled >= fadeThreeStart.top*(2/3)){
            $("#templeStreet").css("display","flex")
			$("#templeStreet").animate({"left":"0"},2500)
		}
		 
	})
})