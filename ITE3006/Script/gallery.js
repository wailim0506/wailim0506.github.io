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
    document.getElementById('body').style.overflow = 'hidden'; //disable scrolling
    
    switch(x){
        case 1: 
            img.src = '../Image/Gallery/1.jpg';
            break;
        case 2:
            img.src = '../Image/Gallery/2.jpg';
            break;
        case 3:
            img.src = '../Image/Gallery/3.jpg';
            break;
        case 4:
            img.src = '../Image/Gallery/4.jpg';
            break;
        case 5:
            img.src = '../Image/Gallery/5.jpg';
            break;
        case 6:
            img.src = '../Image/Gallery/6.jpg';
            break;  
        case 7:
            img.src = '../Image/Gallery/7.jpg';
            break;
        case 8:
            img.src = '../Image/Gallery/8.jpg';
            break;
        case 9:
            img.src = '../Image/Gallery/9.jpg';
            break;     
        case 10:
            img.src = '../Image/Gallery/10.jpg';
            break; 
        case 11:
            img.src = '../Image/Gallery/11.jpg';
            break;
        case 12:
            img.src = '../Image/Gallery/12.jpg';
            break;
        case 13:
            img.src = '../Image/Gallery/13.jpg';
            break;
        case 14:
            img.src = '../Image/Gallery/14.jpg';
            break;
        case 15:
            img.src = '../Image/Gallery/15.jpg';
            break;
        case 16:
            img.src = '../Image/Gallery/16.jpg';
            break;
        case 17:
            img.src = '../Image/Gallery/17.jpeg';
            break;
        case 18:
            img.src = '../Image/Gallery/18.jpg';
            break;
        case 19:
            img.src = '../Image/Gallery/19.jpg';
            break;
        case 20:
            img.src = '../Image/Gallery/20.jpg';
            break;
        case 21:
            img.src = '../Image/Gallery/21.jpg';
            break;   
        case 22:
            img.src = '../Image/Gallery/22.jpg';
            break;
        case 23:
            img.src = '../Image/Gallery/23.jpg';
            break;
        case 24:
            img.src = '../Image/Gallery/24.jpg';
            break;             
    }
}

function close_enlarge(){ //close enlarge image
    var e = document.getElementById('enlarge');
    e.style.display = 'none';
    document.getElementById('gallery').style.opacity = '1';
    document.getElementById('body').style.overflow = 'auto'; //allow scrolling
}