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
    var result_page = document.getElementById('result');
    var error_page = document.getElementById('search_error');
    result_page.style.display = 'flex';
        error_page.style.display = 'none';

    var monthArray = [document.getElementById('august'), document.getElementById('september'), document.getElementById('october'), 
                        document.getElementById('november'), document.getElementById('december'), document.getElementById('january'),
                        document.getElementById('february'), document.getElementById('march'), document.getElementById('april') ];
    /* month index from monthArray
    0 = Auguest
    1 = September
    2 = October
    3 = November
    4 = December
    5 = January
    6 = February
    7 = March
    8 = April
   */
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
    1 = Auguest
    2 = September
    3 = October
    4 = November
    5 = December
    6 = January
    7 = February
    8 = March
    9 = April
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

    for (var i = 0; i < document.search.month.options.length; i++){ //show and hide month
        if (monthIndex == 0){ //show all month
            for (var j = 0; j < monthArray.length; j++){
                monthArray[j].style.display = 'flex';
            }
        }else{  //show selected month
            if (monthIndex == i){
                for(var j = 0; j < monthArray.length; j++){
                    if (j == i-1){   //i-1 because monthArray index is month index from selection - 1
                        monthArray[j].style.display = 'flex';
                    }else{
                        monthArray[j].style.display = 'none';
                    }
                }
            }
        }
    }

    for (var i = 0; i < document.search.competition.options.length; i++){
        if (competitionIndex == 0){ //show all competition
            for (var j = 0; j < competitionArray.length; j++){
                for (var k = 0; k < competitionArray[j].length; k++){
                    competitionArray[j][k].style.display = 'flex';
                }
            }
        }else{ //show selected competition
            if (competitionIndex == i){
                for(var j = 0; j < competitionArray.length; j++){
                    if(j == i-1){ //i-1 because competitionArray index is competition index from selection - 1
                        for(var k = 0; k < competitionArray[j].length; k++){
                            competitionArray[j][k].style.display = 'flex';
                        }
                    }else{
                        for(var k = 0; k < competitionArray[j].length; k++){
                            competitionArray[j][k].style.display = 'none';
                        }
                    }
                }
            }
        }
    }

    if (competitionIndex == 2 && monthIndex == 0){ //if competition selected is champion league, month that have no champion league will not display
        monthArray[0].style.display = 'none';
        monthArray[5].style.display = 'none';
    }else if (competitionIndex == 3 && monthIndex == 0){ //if competition selected is fa cup, month that have no fa cup will not display
        monthArray[0].style.display = 'none';
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[8].style.display = 'none';
    }else if (competitionIndex == 4 && monthIndex == 0){ //if competition selected is Carabao Cup, month that have no Carabao Cup will not display
        monthArray[0].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }else if (competitionIndex == 5 && monthIndex == 0){ //if competition selected is Super Cup, month that have no Super Cup will not display
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }
    else if (competitionIndex == 6 && monthIndex == 0){ //if competition selected is Club World Cup, month that have no Club World Cup will not display
        monthArray[0].style.display = 'none';
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }else if (competitionIndex == 7 && monthIndex == 0){ //if competition selected is Community Shield, month that have no Community Shield will not display
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }


    //if select month and competition is not valid, show error message
    var search_error_competition = document.getElementById('search_error_competition');
    var search_error_month = document.getElementById('search_error_month');
    if ((competitionIndex == 2) && (monthIndex == 1 || monthIndex == 6)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if((competitionIndex == 3) && (monthIndex == 1 || monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 9)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 4) && (monthIndex == 1 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 5) && (monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9 )){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 6) && (monthIndex == 1 || monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 7) && (monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9 )){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }
}
function hidden_filter(){
    // reset to default first
    var result_page = document.getElementById('result');
    var error_page = document.getElementById('search_error');
    result_page.style.display = 'flex';
        error_page.style.display = 'none';

    var monthArray = [document.getElementById('august'), document.getElementById('september'), document.getElementById('october'), 
                        document.getElementById('november'), document.getElementById('december'), document.getElementById('january'),
                        document.getElementById('february'), document.getElementById('march'), document.getElementById('april') ];
    /* month index from monthArray
    0 = Auguest
    1 = September
    2 = October
    3 = November
    4 = December
    5 = January
    6 = February
    7 = March
    8 = April
   */
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
    1 = Auguest
    2 = September
    3 = October
    4 = November
    5 = December
    6 = January
    7 = February
    8 = March
    9 = April
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

    for (var i = 0; i < document.search.month.options.length; i++){ //show and hide month
        if (monthIndex == 0){ //show all month
            for (var j = 0; j < monthArray.length; j++){
                monthArray[j].style.display = 'flex';
            }
        }else{  //show selected month
            if (monthIndex == i){
                for(var j = 0; j < monthArray.length; j++){
                    if (j == i-1){   //i-1 because monthArray index is month index from selection - 1
                        monthArray[j].style.display = 'flex';
                    }else{
                        monthArray[j].style.display = 'none';
                    }
                }
            }
        }
    }

    for (var i = 0; i < document.search.competition.options.length; i++){
        if (competitionIndex == 0){ //show all competition
            for (var j = 0; j < competitionArray.length; j++){
                for (var k = 0; k < competitionArray[j].length; k++){
                    competitionArray[j][k].style.display = 'flex';
                }
            }
        }else{ //show selected competition
            if (competitionIndex == i){
                for(var j = 0; j < competitionArray.length; j++){
                    if(j == i-1){ //i-1 because competitionArray index is competition index from selection - 1
                        for(var k = 0; k < competitionArray[j].length; k++){
                            competitionArray[j][k].style.display = 'flex';
                        }
                    }else{
                        for(var k = 0; k < competitionArray[j].length; k++){
                            competitionArray[j][k].style.display = 'none';
                        }
                    }
                }
            }
        }
    }

    if (competitionIndex == 2 && monthIndex == 0){ //if competition selected is champion league, month that have no champion league will not display
        monthArray[0].style.display = 'none';
        monthArray[5].style.display = 'none';
    }else if (competitionIndex == 3 && monthIndex == 0){ //if competition selected is fa cup, month that have no fa cup will not display
        monthArray[0].style.display = 'none';
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[8].style.display = 'none';
    }else if (competitionIndex == 4 && monthIndex == 0){ //if competition selected is Carabao Cup, month that have no Carabao Cup will not display
        monthArray[0].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }else if (competitionIndex == 5 && monthIndex == 0){ //if competition selected is Super Cup, month that have no Super Cup will not display
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }
    else if (competitionIndex == 6 && monthIndex == 0){ //if competition selected is Club World Cup, month that have no Club World Cup will not display
        monthArray[0].style.display = 'none';
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }else if (competitionIndex == 7 && monthIndex == 0){ //if competition selected is Community Shield, month that have no Community Shield will not display
        monthArray[1].style.display = 'none';
        monthArray[2].style.display = 'none';
        monthArray[3].style.display = 'none';
        monthArray[4].style.display = 'none';
        monthArray[5].style.display = 'none';
        monthArray[6].style.display = 'none';
        monthArray[7].style.display = 'none';
        monthArray[8].style.display = 'none';
    }


    //if select month and competition is not valid, show error message
    var search_error_competition = document.getElementById('search_error_competition');
    var search_error_month = document.getElementById('search_error_month');
    if ((competitionIndex == 2) && (monthIndex == 1 || monthIndex == 6)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if((competitionIndex == 3) && (monthIndex == 1 || monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 9)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 4) && (monthIndex == 1 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 5) && (monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9 )){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 6) && (monthIndex == 1 || monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9)){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }else if ((competitionIndex == 7) && (monthIndex == 2 || monthIndex == 3 || monthIndex == 4 || monthIndex == 5 || monthIndex == 6 || monthIndex == 7 || monthIndex == 8 || monthIndex == 9 )){
        result_page.style.display = 'none';
        search_error_competition.textContent = document.search.competition.options[competitionIndex].textContent;
        search_error_month.textContent = document.search.month.options[monthIndex].textContent;
        error_page.style.display = 'flex';
    }
}