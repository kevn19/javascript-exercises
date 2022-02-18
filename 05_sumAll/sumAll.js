const sumAll = function(num1, num2) {
    let sum = 0
    switch(true) {
        case num1<0:
        case num2<0:
        case typeof(num1) != "number":
        case typeof (num2) != "number":
            return "ERROR"
        break;
        case num1<num2:
            for (i=num1; i<=num2; i++){
                sum += i;
            }
        break;
        case num1>num2:
            for (i=num2; i<=num1; i++){
                sum += i;
            }
        break;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
