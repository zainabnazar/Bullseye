const readline = require("readline");
const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let size ="";
rl.question("Please. enter the length of the dartboard between 0 and 18: ", makeSquare);

function makeSquare(string) {
    // Check the length value is between 0 and 18
    if (string < 0 || string >18) {
        console.log("Please, enter a length value between 0 and 18");
        rl.close();
        return false;
    } else {
    size = string;
    var board ='';
        for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            board += Math.min(Math.min(i+1, j+1), Math.min(size-i,size-j));
        }
        board += '\n';
    }
    console.log(board);
    rl.close();
};
  };

module.exports = makeSquare;