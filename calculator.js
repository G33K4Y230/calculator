let equation = "";

const checkOperation = (text) => {

    const operations = [
        {
            symbol: '=',
            altCode: 61
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
            symbol: '*',
            altCode: 42
        },
        {
            symbol: '/',
            altCode: 47
        }
    ]

    if (text.length == 1) {
        operations.forEach((op) => {
            if (text.charCodeAt(0) == op.altCode) {
                if (op.symbol == '=') {
                    equation += upperText.innerText + " " + op.symbol;
                } else {
                    equation = equation + upperText.innerText + " " + op.symbol + " ";
                    upperText.innerText = "";
                }
                lowerText.innerText = equation;
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

const processEquation = () => {
}

const processClick = (el) => {

    const text = el.innerText;
    const upperText = document.getElementById("upperText");
    const lowerText = document.getElementById("lowerText");

    if (!isNaN(Number(text))) {
        if (upperText.innerText == "0")
            upperText.innerText = "";
        upperText.innerText += Number(text);
    }

    checkOperation(text);
    checkControl(text);

    if (upperText.innerText == "") {
        upperText.innerText = "0";
    }

}