$(document).ready(function(){
    $("#checkoutBtn").on("click",function(){
        $(".form-val").addClass("was-validated")
        var fN = $("#firstName").val()
        var lN = $("#lastName").val()
        var uN = $("#username").val()
        var aO = $("#addressOne").val()
        var country = $("#country").val()
        var region = $("#region").val()
        var pC = $("#postCode").val()
        var nOC = $("#nameOnCard").val()
        var cN = $("#cardNumber").val()
        var eD = $("#expiration").val()
        var cvv = $("#cvv").val()
        
        if (fN == "" || lN == "" || uN == "" || aO == "" || country == "" || region == "" || pC == "" || nOC == "" || cN == "" || eD == "" || cvv == ""){
            var alertDiv = $("<div class='container-fluid' id='alert'></div>")
            var alert = $("<div class='alert alert-danger alert-dismissible fade show'></div>")
            var pOne = $("<span style='font-weight: bold;'></span>").text("Warning! ")
            var pTwo = $("<span></span>").text("Please fill out the required field.")
            var closeAlertBtn = $("<button type='button' class='btn-close text-end' data-bs-dismiss='alert' id='cAB'></button>")
            alert.append(pOne)
            alert.append(pTwo)
            alert.append(closeAlertBtn)
            alertDiv.append(alert)
            $("footer").after(alertDiv)

            function closeAlertButton(){
                $("#cAB").trigger("click")
            }
            setTimeout(closeAlertButton,3500)
        }
    })

    $("#redeemBtn").on("click",function(){
        $(".code-val").addClass("was-validated")
    })
})