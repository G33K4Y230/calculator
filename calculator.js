let equation = "";

const allOperations = [
    {
        symbol: '/',
        altCode: 47
    },
    {
        symbol: '*',
        altCode: 42
    },
    {
        symbol: '+',
        altCode: 43
    },
    {
        symbol: '-',
        altCode: 45
    },
    {
        symbol: '=',
        altCode: 61
    }
]

const checkOperation = (text) => {

    if (text.length == 1) {
        allOperations.forEach((op) => {
            if (text.charCodeAt(0) == op.altCode) {
                if (op.symbol == '=') {
                    equation += upperText.innerText + " " + op.symbol;
                    let sum = processEquation();
                    upperText.innerText = sum
                    lowerText.innerText = equation;
                    equation = ""
                } else {
                    equation = equation + upperText.innerText + " " + op.symbol + " ";
                    upperText.innerText = "";
                    lowerText.innerText = equation;
                }
            }
        });
    }

}

const checkControl = (text) => {

    switch (text) {
        case ".":
            if (!upperText.innerText.includes("."))
                upperText.innerText += ".";
            break;
        case "<":
            upperText.innerText = upperText.innerText.substring(0, upperText.innerText.length - 1);
            break;
        case "CL":
            equation = "";
            upperText.innerText = "";
            lowerText.innerText = equation;
            break;
        case "+/-":
            if (upperText.innerText.charAt(0) == '-') {
                upperText.innerText = upperText.innerText.substring(1);
            } else {
                upperText.innerText = "-" + upperText.innerText;
            }
            break;
        default:
            break;
    }

}

const removeAtIndex = (array, index) => {
    let values = []
    for (let i = 0; i < array.length; i++)
        if (i != index)
            values.push(array[i])

    return values
}

const processEquation = () => {

    var current = "";
    var numbers = [];
    var operations = [];

    for (let i = 0; i < equation.length; i++) {
        let char = equation.charAt(i);
        if (char == ' ') {
            if (isNaN(current)) {
                operations.push(current);
            } else {
                numbers.push(Number(current));
            }
            current = "";
        } else {
            current += char;
        }
    }

    allOperations.forEach((operation) => {

        let contains = true;

        while (contains) {
            let c = false;
            for (let i = 0; i <= operations.length; i++) {
                if (operations[i] == operation.symbol) {
                    c = true;
                    var sum = 0;
                    switch (operation.symbol) {
                        case '/':
                            sum = numbers[i] / numbers[i + 1];
                            break;
                        case '*':
                            sum = numbers[i] * numbers[i + 1];
                            break;
                        case '+':
                            sum = numbers[i] + numbers[i + 1];
                            break;
                        case '-':
                            sum = numbers[i] - numbers[i + 1];
                            break;
                    }
                    numbers[i] = Number(sum);
                    numbers = removeAtIndex(numbers, i + 1)
                    operations = removeAtIndex(operations, i)
                    break
                }
            }

            contains = c;
        }
    });

    return numbers.length == 1 ? Math.round(numbers[0] * 1000000) / 1000000 : NaN
}

const processClick = (el) => {

    const text = el.innerText;
    const upperText = document.getElementById("upperText");
    const lowerText = document.getElementById("lowerText");

    if (!isNaN(Number(text))) {
        if (upperText.innerText == "0")
            upperText.innerText = "";
        if (upperText.innerText == "-0")
            upperText.innerText = "-"
        upperText.innerText += Number(text);
    }

    checkOperation(text);
    checkControl(text);

    if (upperText.innerText == "") {
        upperText.innerText = "0";
    }

}