/* --html for the connected buttons--
<div class='container'>
        <div class='buttonsDiv'>
            <a href='#' onclick='switchDisplay(event, "playDiv")' class='buttons' id='playButton'>Play</a> <-- onclick uses switchDisplay of event and which page is
                                                                                                               selected (eg. event, 'playDiv')

            <a href='#' onclick='switchDisplay(event, "practiceDiv")' class='buttons'>Practice</a>

            <a href='#' onclick='switchDisplay(event, "learnDiv")' class='buttons'>Learn</a>

            <a href='#' onclick='lightsOff()' class='buttons' id='darkButton'><i class='fas fa-adjust' id='darkLogo'></i></a> <-- button to switch to dark mode
        </div>
</div>
*/

function switchDisplay(evt, page) {
    var i = 0;

    const divs = document.getElementsByClassName('main_divs'); //name of all the divs in which all the affected pages exist

    for (i; i < divs.length; i++) {
        divs[i].style.display = 'none'; //sets all pages to invisible AKA display:none;
    }

    const buttons = document.getElementsByClassName('buttons'); //class in which the navbar buttons exist
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(' active', ' '); //loops through the buttons, sets all active to inactive
    }

    document.getElementById(page).style.display = 'grid'; //displays the page whose respective button was pressed AKA display:'grid';
    evt.currentTarget.className += " active"; //sets it to active to be highlighted, which I did not utilize because I preferred how it looks without it
                                                //this could be used in the future
}
