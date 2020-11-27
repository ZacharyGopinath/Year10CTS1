function onDrop(source, target) {
    var input = board2.fen(); //gets a FEN (string) of the boards current position (ie. which pieces are where, whose turn it is)
    console.log(input);
    var stockfish = '';
      
    function run(){
        stockfish = STOCKFISH(); //accesses the STOCKFISH() function from the external file (thousands of lines of TypeScript)

        stockfish.onmessage = function(event){ //uses the STOCKFISH() function whenever it is accesssed
        };

        stockfish.postMessage('position fen ' + input); //postMessage() is used to input parameters for the function, 
                                                          //in this case the string: 'position fen' + (FEN)
        eval(stockfish.postMessage('go depth 7')); //evaluates the position at a depth of 7 (essentially alpha-beta pruning 
                                                     //7 moves in the future for each legal move
        };

    var move = game.move({ //a property of chessboardjs, gets the last move
      from: source, //piece that moved
      to: target, //square it moved to
      promotion: 'q', //promotes (when a pawn reaches the end of the board) by 
                        //default to a Queen (generally the best option)
    });
    console.log(source, target);
    
    if (move === null){ return 'snapback';} //another property of chessboardjs, only allows a move to be played 
                                              //if it is legal, if not moves the piece back with the snapback animation
  run();
  updateStatus(); //a function not listed which keeps track of whose turn it is and whether it 
                    //either player has won, this function runs on every move
  onDrop();
  onMoveEnd(); //another function not shown in this segment which can alternitavely used instead of onDrop
}
