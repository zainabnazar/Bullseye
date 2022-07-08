# Challenge 9 - “Bullseye”
The challenge this week is to generate a square dartboard of side length n. The numerical values on the board should increase with proximity to the centre of the board. For boards of an even number size, the centre will be made up of the four highest values.
Rewards:<br>

:four:  Points are awarded for generating a dartboard of any given size (where n > 0).<br>
:three:  Further points are awarded for using only 1 loop.<br>
:three:  Further points are awarded for generating circular* dartboards.<br>

* You should print spaces to represent the area outside of the board.
# Example:
For a square dartboard of size 8, the expected output would look something like:
```
11111111
12222221
12333321
12344321
12344321
12333321
12222221
11111111
```

# Tests:
run npm install jest
```
npm run test
```

# Running the Code
To run the square dartboard 
```
node bullseye.js
```
then enter the length between 0 and 18 in the CL and press enter

To run the semi-circle dartboard!
```
node circle.js
```
then enter the length between 0 and 10 in the CL and press enter
