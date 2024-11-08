function show(){   //show the hidden menu
    document.getElementById('hidden_menu').style.display = 'block';
    document.getElementById('body').style.overflow = 'hidden'; //disable scrolling so the index page will not be scrolled when the hidden menu shown
}

function hide(){   //hide the hidden menu
    document.getElementById('hidden_menu').style.display = 'none';
    document.getElementById('body').style.overflow = 'auto'; //allow scrolling so the index page can be scrolled after the hidden menu is hide
}

function filter(){
    // reset to default first
    var fixture_page = document.getElementById('fixture');
    var error_page = document.getElementById('search_error');
    fixture_page.style.display = 'flex';
    error_page.style.display = 'none';

    var april = document.getElementById('april');
    var may = document.getElementById('may');  
    var competitionArray = [document.getElementsByClassName('pl'), document.getElementsByClassName('cl'), document.getElementsByClassName('fa'), 
                                document.getElementsByClassName('cc'), document.getElementsByClassName('sc'), document.getElementsByClassName('wc'), 
                                document.getElementsByClassName('cs')];
    /* competition index from competitionArray
    0 = Premier League (pl)
    1 = Champions League (cl)
    2 = Emirates FA Cup (fa)
    3 = Carabao Cup (cc)
    4 = UEFA Super Cup (sc)
    5 = Club World Cup (wc)
    6 = Community Shield (cs)
   */
    var monthIndex = document.search.month.selectedIndex;  //index of month
    var competitionIndex = document.search.competition.selectedIndex; //index of competiton
   /* month index from selection
    0 = All month
    1 = April
    2 = May
   */

   /* competition index from selection
    0 = All competiton
    1 = Premier League (pl)
    2 = Champions League (cl)
    3 = Emirates FA Cup (fa)
    4 = Carabao Cup (cc)
    5 = UEFA Super Cup (sc)
    6 = Club World Cup (wc)
    7 = Community Shield (cs)
   */

    if (monthIndex == 0){ //show all month
        april.style.display = 'flex';
        may.style.display = 'flex';
    }else if (monthIndex == 1){ //show april only
        april.style.display = 'flex';
        may.style.display = 'none';
    }else if (monthIndex == 2){ //show may only
        april.style.display = 'none';
        may.style.display = 'flex';
    }

    if (competitionIndex == 2 || competitionIndex == 4 || competitionIndex == 5 || competitionIndex == 6 || competitionIndex == 7){
        fixture_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        if (monthIndex == 0){
            search_error_month.textContent = 'upcoming fixtures';
        }else{
            search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        }
        error_page.style.display = 'flex';
    }else if (competitionIndex == 1){
        for (var i = 0; i < competitionArray[0].length; i++){
            competitionArray[0][i].style.display = 'flex';
        }
        for (var i = 0; i < competitionArray[2].length; i++){
            competitionArray[2][i].style.display = 'none';
        }
    }else if (competitionIndex == 3){
        for (var i = 0; i < competitionArray[2].length; i++){
            competitionArray[2][i].style.display = 'flex';
        }  
        for (var i = 0; i < competitionArray[0].length; i++){
            competitionArray[0][i].style.display = 'none';
        }
        may.style.display = 'none';  
    }else if(competitionIndex == 0){
        for (var i = 0; i < competitionArray[0].length; i++){
            competitionArray[0][i].style.display = 'flex';
        }
        for (var i = 0; i < competitionArray[2].length; i++){
            competitionArray[2][i].style.display = 'flex';
        } 
    }

    if (competitionIndex == 3 && monthIndex == 2){
        fixture_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }
}

function hidden_filter(){
    // reset to default first
    var fixture_page = document.getElementById('fixture');
    var error_page = document.getElementById('search_error');
    fixture_page.style.display = 'flex';
    error_page.style.display = 'none';

    var april = document.getElementById('april');
    var may = document.getElementById('may');  
    var competitionArray = [document.getElementsByClassName('pl'), document.getElementsByClassName('cl'), document.getElementsByClassName('fa'), 
                                document.getElementsByClassName('cc'), document.getElementsByClassName('sc'), document.getElementsByClassName('wc'), 
                                document.getElementsByClassName('cs')];
    /* competition index from competitionArray
    0 = Premier League (pl)
    1 = Champions League (cl)
    2 = Emirates FA Cup (fa)
    3 = Carabao Cup (cc)
    4 = UEFA Super Cup (sc)
    5 = Club World Cup (wc)
    6 = Community Shield (cs)
   */
    var monthIndex = document.hidden_search.month.selectedIndex;  //index of month
    var competitionIndex = document.hidden_search.competition.selectedIndex; //index of competiton
   /* month index from selection
    0 = All month
    1 = April
    2 = May
   */

   /* competition index from selection
    0 = All competiton
    1 = Premier League (pl)
    2 = Champions League (cl)
    3 = Emirates FA Cup (fa)
    4 = Carabao Cup (cc)
    5 = UEFA Super Cup (sc)
    6 = Club World Cup (wc)
    7 = Community Shield (cs)
   */

    if (monthIndex == 0){ //show all month
        april.style.display = 'flex';
        may.style.display = 'flex';
    }else if (monthIndex == 1){ //show april only
        april.style.display = 'flex';
        may.style.display = 'none';
    }else if (monthIndex == 2){ //show may only
        april.style.display = 'none';
        may.style.display = 'flex';
    }

    if (competitionIndex == 2 || competitionIndex == 4 || competitionIndex == 5 || competitionIndex == 6 || competitionIndex == 7){
        fixture_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        if (monthIndex == 0){
            search_error_month.textContent = 'upcoming fixtures';
        }else{
            search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        }
        error_page.style.display = 'flex';
    }else if (competitionIndex == 1){
        for (var i = 0; i < competitionArray[0].length; i++){
            competitionArray[0][i].style.display = 'flex';
        }
        for (var i = 0; i < competitionArray[2].length; i++){
            competitionArray[2][i].style.display = 'none';
        }
    }else if (competitionIndex == 3){
        for (var i = 0; i < competitionArray[2].length; i++){
            competitionArray[2][i].style.display = 'flex';
        }  
        for (var i = 0; i < competitionArray[0].length; i++){
            competitionArray[0][i].style.display = 'none';
        }
        may.style.display = 'none';  
    }else if(competitionIndex == 0){
        for (var i = 0; i < competitionArray[0].length; i++){
            competitionArray[0][i].style.display = 'flex';
        }
        for (var i = 0; i < competitionArray[2].length; i++){
            competitionArray[2][i].style.display = 'flex';
        } 
    }

    if (competitionIndex == 3 && monthIndex == 2){
        fixture_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }
}