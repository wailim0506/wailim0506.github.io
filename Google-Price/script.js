$(document).ready(function(){
    $("#fadeStart").css("visibility","hidden")
    $("#IphoneImgContainer").css("display","none")

    $("#monthlyButton").toggleClass("monthlyBtn")

    $("#monthlyButton").on("click",function(){
        //Change button color
        $("#monthlyButton").toggleClass("monthlyBtn")
        $("#annualButton").toggleClass("annualBtn")

        //change information
        $("#delPriceOne").text("HK$15.00")
        $("#afterPriceOne").text("HK$ 15.00/month after")
        $("#delPriceTwo").text("HK$23.00")
        $("#afterPriceTwo").text("HK$ 23.00/month after")
        $("#delPriceThree").text("HK$79.00")
        $("#afterPriceThree").text("HK$ 79.00/month after")
        $(".cardHr").css("margin-top","47px")
    })

    $("#annualButton").on("click",function(){
        //Change button color
        $("#annualButton").toggleClass("annualBtn")
        $("#monthlyButton").toggleClass("monthlyBtn")
        
        //change information
        $("#delPriceOne").text("HK$150.00")
        $("#afterPriceOne").text("HK$ 150.00/month after. Save 17% with Annual")
        $("#delPriceTwo").text("HK$230.00")
        $("#afterPriceTwo").text("HK$ 230.00/month after. Save 17% with Annual")
        $("#delPriceThree").text("HK$799.00")
        $("#afterPriceThree").text("HK$ 799.00/month after. Save 16% with Annual")
        $(".cardHr").css("margin-top","7px")
    })

    $(window).scroll(function(){
        var x = $("#fadeStart").position()
        var scrolled = $(window).scrollTop()
        if($(window).width()>992){
            if(scrolled>=x.top*(2/5)){
                $("#IphoneImgContainer").fadeIn(2000)
            }
        }
        else{
            if(scrolled>=x.top*(3/4)){
                $("#IphoneImgContainer").fadeIn(2000)
            }
        }
        
    })
})