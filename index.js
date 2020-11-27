//function to switch pages via changing which are displayed, also highlights the button connected to the page
function switchDisplay(evt, page) {
    var i = 0;

    const divs = document.getElementsByClassName('main_divs'); //name of all the divs in which all the pages exist

    for (i; i < divs.length; i++) {
        divs[i].style.display = 'none'; //sets all pages to invisible
    }

    const buttons = document.getElementsByClassName('buttons'); //class in which the navbar buttons exist
    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(' active', ' '); //sets all active to inactive
    }

    document.getElementById(page).style.display = 'grid'; //displays the page who's respective button was pressed
    evt.currentTarget.className += " active"; //sets it to active to be highlighted, which I did not utilize because I preferred how it looks without it
}

//function to toggle between light and dark mode
function lightsOff() {
    document.body.classList.toggle('darkMode');
    //header
    if (document.getElementById('topHeader')) {
        document.getElementById('topHeader').id = 'topHeaderDark';
    }
    else {
        document.getElementById('topHeaderDark').id = 'topHeader';
    }
    //darkmode button
    if (document.getElementById('darkButton')) {
        document.getElementById('darkButton').id = 'lightButton';
    }
    else {
        document.getElementById('lightButton').id = 'darkButton';
    }
    //chessboard button
    if (document.getElementById('board2')) {
        document.getElementById('board2').id = 'board2L';
    }
    else {
        document.getElementById('board2L').id = 'board2';
    }
    //buttons div
    if (document.getElementById('board2')) {
        document.getElementById('board2').id = 'board2L';
    }
    else {
        document.getElementById('board2L').id = 'board2';
    }
    //stockfish output
    if (document.getElementById('result')) {
        document.getElementById('result').id = 'resultL';
    }
    else {
        document.getElementById('resultL').id = 'result';
    }
    //openings background
    if (document.getElementsByClassName('openings')) {
        document.getElementsByClassName('openings').classList = 'openingsL';
    }
    else {
        document.getElementsByClassName('openingsL').classList = 'openings';
    }
}

//chessboardjs segment of the code
var board2 = '';
var game = new Chess();
var $status = $('#status');
var config = {}

function restart(){
    location.reload();
}

function FEN(){
    const fen = document.getElementById('fenInput').value;
    fenConfig = {
        sparePieces: true,
        position:fen,
        onDrop:onDrop,
        onSnapEnd:onSnapEnd,
        onMoveEnd:onMoveEnd
    }
    board2 = Chessboard('board2', fenConfig);
}

function updateStatus() {
    var status = '';

    var moveColor = 'White';
    if (game.turn() === 'b') {
        moveColor = 'Black';
    }
    console.log('game turn')

    $status.html(status);

    // checkmate?
    if (game.in_checkmate()) {
        status = 'Game over, ' + moveColor + ' is in checkmate.';
        document.getElementById('board2').id = 'endScreen';
        var endText = document.getElementById('endText');
        if ('b'.in_checkmate) {
            endText.innerHTML = "0-1";
        } else {
            endText.innerHTML = "1-0";
        }
        document.getElementById('restartButton').style.display = 'block';
    }
}
function onSnapEnd () {
    board2.position(game.fen())
  }
function onMoveEnd(){
    stockfish = ''
    stockfish = STOCKFISH();

    stockfish.onmessage = function(event){
        //var data = ('DATA ', event.data ? event.data : event)
    };

    stockfish = STOCKFISH(); //runs stockfish file
    var input = board2.fen();
    stockfish.postMessage('position fen ' + input);
    eval(stockfish.postMessage('go depth 10')); //depth is how many moves in the future the stockfish function looks into for any legal move
}
function onDrop(source, target) {
    var input = board2.fen();
    console.log(input);
    var stockfish = '';
      
    function run(){
        stockfish = STOCKFISH();

        stockfish.onmessage = function(event){
        };

        stockfish.postMessage('position fen ' + input);
        eval(stockfish.postMessage('go depth 7'));
        };

    var move = game.move({
      from: source,
      to: target,
      promotion: 'q',
    });
    console.log(source, target);
    
    if (move === null){ return 'snapback';}
  run();
  updateStatus();
  onDrop();
  onMoveEnd();
}

config = {
    draggable: true,
    dropOffBoard: 'trash',
    sparePieces: true,
    position: 'start',
    onDrop: onDrop,
    onSnapEnd:onSnapEnd,
    onMoveEnd:onMoveEnd
};
board2 = Chessboard('board2', config);
var possibleMoves = game.moves()
console.error(possibleMoves);