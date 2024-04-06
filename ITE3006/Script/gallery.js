function show(){   //show the hidden menu
    document.getElementById('hidden_menu').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden'; //disable scrolling so the index page will not be scrolled when the hidden menu shown
}

function hide(){   //hide the hidden menu
    document.getElementById('hidden_menu').style.display = 'none';
    document.getElementById('body').style.overflow = 'auto'; //allow scrolling so the index page can be scrolled after the hidden menu is hide
}

function enlarge(x){  //enlarge the image
    var e = document.getElementById('enlarge');
    var img = document.getElementById('enlarge_img')

    e.style.display = 'flex';
    document.getElementById('gallery').style.opacity = '0.09';
    document.getElementById('footer').style.opacity = '0.09';
    document.getElementById('body').style.overflow = 'hidden'; //disable scrolling
    
    var link = '../Image/Gallery/' + x + '.jpg'; //x is the parameter that equal to the number of the image in the /Image/Gallery folder
    img.src = link;
}

function close_enlarge(){ //close enlarge image
    var e = document.getElementById('enlarge');
    e.style.display = 'none';
    document.getElementById('gallery').style.opacity = '1';
    document.getElementById('footer').style.opacity = '1';
    document.getElementById('body').style.overflow = 'auto'; //allow scrolling
}