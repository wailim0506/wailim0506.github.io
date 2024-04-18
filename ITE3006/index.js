var playerSlide = 1

function show(){   //show the hidden menu
    document.getElementById('hidden_menu').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden'; //disable scrolling so the index page will not be scrolled when the hidden menu shown
}

function hide(){   //hide the hidden menu
    document.getElementById('hidden_menu').style.display = 'none';
    document.getElementById('body').style.overflow = 'auto'; //allow scrolling so the index page can be scrolled after the hidden menu is hide
}

function previous(){
    if (playerSlide > 1){
        playerSlide--;
        if (playerSlide == 1){
            document.getElementById('slide1').style.display = 'flex';
            document.getElementById('slide2').style.display = 'none';
        }
        if (playerSlide == 2){
            document.getElementById('slide2').style.display = 'flex';
            document.getElementById('slide3').style.display = 'none';
        }
    }
}

function next(){
    if (playerSlide < 3){
        playerSlide++;
        if (playerSlide == 2){
            document.getElementById('slide2').style.display = 'flex';
            document.getElementById('slide1').style.display = 'none';
        }
        if (playerSlide == 3){
            document.getElementById('slide3').style.display = 'flex';
            document.getElementById('slide2').style.display = 'none';
        }
    }
}

//test
