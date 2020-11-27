//This code exists in the stockfish.js file which contains the chess engine

return function ()
{
    var my_console,
        Module,
        return_val,
        cmds = [],
        wait = typeof setImmediate === "function" ? setImmediate : setTimeout; //code which can be used to set up a clock
    
    my_console = {
        log: function log(line)
        {
            if (return_val.onmessage) {
                /// Match Web Workers.
                return_val.onmessage(line) //line is a string and the engine's evaluation
                                             string looks like 'line: bestmove e7e5 ponder d2d4'
                var x = line
                //console.info(x, ' ???');
            } else {
        
                var x = line;
                
                var middle = Math.floor(x.length / 2); //finds the middle of the string
                var before = x.lastIndexOf(' ', middle); //gets the index space before the middle
                var after = x.indexOf(' ', middle + 1); //gets the index of the space after the middle

                if (middle - before < after - middle) {
                    middle = before;
                } else {
                    middle = after;
                }
                //makes sure it's right or corrects
                
                var x1 = x.substr(0, middle); //substr() is used quite often, 
                                                it creates a string from the first parameter to the second
              

                var finalx1 = document.getElementById('bestMoveB'); //variables with x1 are black's recommended move
                var finalx12 = x1.replace('bestmove ', '');
                //console.log('finalx12:',finalx12)
                var ogfinal1 = finalx12;
                var toAdd = '-';
                var indexPosition = 2;


                finalx122 = finalx12.slice(0, indexPosition) + toAdd + finalx12.slice(indexPosition);
               
                console.log(finalx122);
                
                //the above process cuts up the string to only have the recommended move for black 
                  which looks like (letter)(number)-(letter)(number)

                var x2 = x.substr(middle + 1); //creates another substring

                var finalx2 = document.getElementById('bestMoveW'); //variables with x2 are white's recommended move
                var finalx22 = x2.replace('ponder ', '');
                var ogfinal2 = finalx22;

                finalx222 = ogfinal2.slice(0, indexPosition) + toAdd + ogfinal2.slice(indexPosition);
                
                //the below process simply removes makes the string look nicer, 
                  stating whether it's for white or black, and replacing the dash with an emoji
                
                wMove1 = finalx222.substr(0,2)
                wMove2 = finalx222.substr(3,4);
                wMove = 'W: ' + wMove1 + '👉' + wMove2
                bMove1 = finalx122.substr(0,2);
                bMove2 = finalx122.substr(3.4);
                bMove = 'B: ' + bMove1 + '👉' + bMove2
                var result = document.getElementById('result');
                result.innerHTML = wMove + ' ' + bMove; //adds the move to the page
            }
        }
