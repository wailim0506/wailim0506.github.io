function show(){   //show the hidden menu
    document.getElementById('hidden_menu').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden'; //disable scrolling so the index page will not be scrolled when the hidden menu shown
}

function hide(){   //hide the hidden menu
    document.getElementById('hidden_menu').style.display = 'none';
    document.getElementById('body').style.overflow = 'auto'; //allow scrolling so the index page can be scrolled after the hidden menu is hide
}

function showBio(){  //show the hidden bio
    document.getElementById('hidden_bio').style.display = 'block'; //show the hidden bio
    document.getElementById('readmore_button').style.display = 'none'; //hide the read more button
}