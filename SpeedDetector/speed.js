let carSpeed = prompt("How fast was the car traveling?");

function demerits(carSpeed) {
    let response;
    if (carSpeed < 70) {
        response = "Ok";
    } else {
        const quotient = Math.floor(carSpeed/5);
        for (i = 0; i <= (quotient - 14); i++) {
            response = `Points: ${i}`
        }
    }
    return response
}

let demeritPoints = demerits;
demerits(carSpeed)
