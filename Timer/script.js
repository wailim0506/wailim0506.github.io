$(document).ready(function(){
	var hr = 0
	var min = 0
	var sec = 0
	$("#hr").text("0"+hr)
	$("#min").text("0"+min)
	$("#sec").text("0"+sec)
	function test(){
		sec = sec + 1
		if (sec<60){
			if(sec<10){
				$("#sec").text("0"+sec)
			}
			else{
				$("#sec").text(sec)
			}
		}
		else if(sec==60){
			sec = 0
			$("#sec").text("0"+sec)
			min = min +1
			if(min<10){
				$("#min").text("0"+min)
			}
			else{
				$("#min").text(min)
			}
			if (min==60){
				min = 0
				$("#min").text("0"+min)
				hr = hr + 1
				if (hr<10){
					$("#hr").text("0"+hr)
				}
				else{
					$("#hr").text(hr)
				}
			}
		}
	
	}

	var x
	$("#start").on("click",function(){
		x = setInterval(test,1000)
		$("#start").attr("disabled","")
		$("#stop").removeAttr("disabled")
		$("#reset").removeAttr("disabled")
	})

	$("#stop").on("click",function(){
		clearInterval(x)
		$("#start").removeAttr("disabled")
		$("#stop").attr("disabled","")
	})

	$("#reset").on("click",function(){
		clearInterval(x)
		hr = 0
		min = 0
		sec = 0
		$("#hr").text("0"+hr)
		$("#min").text("0"+min)
		$("#sec").text("0"+sec)
		$("#start").removeAttr("disabled")
		$("#reset").attr("disabled","")
		$("#stop").attr("disabled","")

	})
})


