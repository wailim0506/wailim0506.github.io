$(document).ready(function(){
    var screenWidth = $(window).width()
	console.log("Screen Width: "+screenWidth +"px")
	$("body").fadeIn(500)
	$("#disneyland").css("display","none")
	$("#lwf").css("display","none")
	$("#templeStreet").css("display","none")
    $("#footer").css("display","none")
    $(".one").css("display","none")
    $(".two").css("display","none")
    $(".three").css("display","none")
    
	$(window).scroll(function(){
		var x = $(window).scrollTop()
        if (screenWidth>=1200){
            if (x>=306){
			    $("#disneyland").fadeIn(1000)
                $(".one").fadeIn(1000)
                $("#footer").fadeIn(1000)
		    }
		    if (x>=828){
			    $("#lwf").fadeIn(1000)
                $(".two").fadeIn(1000)
		    }
		    if (x>=1195){
			    $("#templeStreet").fadeIn(1000)
                $(".three").fadeIn(1000)
		    }
		    
        }

        else if (screenWidth>=992){
            if (x>=486){
			    $("#disneyland").fadeIn(1000)
                $(".one").fadeIn(1000)
                $("#footer").fadeIn(1000)
		    }
		    if (x>=988){
			    $("#lwf").fadeIn(1000)
                $(".two").fadeIn(1000)
		    }
		    if (x>=1405){
			    $("#templeStreet").fadeIn(1000)
                $(".three").fadeIn(1000)
		    }
		    
        }
        else{
            if (x>=990){
			    $("#disneyland").fadeIn(1000)
                $(".one").fadeIn(1000)
                $("#footer").fadeIn(1000)
		    }
		    if (x>=1625){
			    $("#lwf").fadeIn(1000)
                $(".two").fadeIn(1000)
		    }
		    if (x>=2365){
			    $("#templeStreet").fadeIn(1000)
                $(".three").fadeIn(1000)
		    }
		    
        }
		
		
		
		
		
		console.log(x)
		
	})
})

//use scroll() to excute function when user scroll the page
//use scrollTop() to check the position of the page in px
//disneyland 506px
//lwf 988px