# Toy Problem Solution (Challenge 2)
*The documentation explains how the speed detector works.*

The speed detector prompts the user to input the speed, 

`let carSpeed = prompt("How fast was the car traveling?");
`

but the code can be adapted to an automatic devices. 

The loop below is responsible for determining the demerit points in overspeeding vehicles.

`const quotient = Math.floor(carSpeed/5);
        for (i = 0; i <= (quotient - 14); i++)`

Otherwise, those driving within the limits receive an "Ok". 