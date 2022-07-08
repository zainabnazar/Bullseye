const readline = require("readline");
const rl =
 readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let size ="";
rl.question("Please. enter the length of the dartboard between 0 and 10: ", makeCircle);

function makeCircle(radius) {
    // Check the length value is between 0 and 18
    if (radius < 0 || radius >10) {
        console.log("Please, enter a length value between 0 and 10");
        rl.close();
        return false;
    } else {
    
    const thickness = 0.4;
    const rin = radius - thickness
    const rout = radius + thickness;
        for (let y = radius; y >= -radius; --y) {
        let symbol = radius;
        let string = '';
            for (let x = -radius; x < rout; x += 0.5) {
            const value = x * x + y * y;
            if (value >= rin * rin && value <= rout * rout) {
                string += " ";
            } else {
                string += radius-Math.abs(y);
            }
            }
        console.log(string);
        rl.close();
        };
    }
   
};


module.exports = makeCircle;