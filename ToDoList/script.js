$(document).ready(function(){

    $("#add").click(function(){
    var x = $("input").val()  
     if (x != ""){
        var li = $("<li></li>")
        var p = $("<p class='listItem'></p>").text(x)
        var btn = $("<button class='del'></button>").text("Delete")
        li.append(p)
        li.append(btn)
        $("ol").append(li)
        $("input").val("")
        
        $(".del").click(function(){
            $(this).parent().remove()
        })
     }
     else{
         alert("Please Enter Something")
     }   
        
        
        

    })




    $("#clear").click(function(){
        var clear = confirm("Are you sure you want to clear it?"
        if (clear == true){
            $("ol").empty()
        }
        else{
            pass
        }
        
    })
})
