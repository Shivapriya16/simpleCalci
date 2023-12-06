function press() {

    const no1 = Number(document.getElementById("no1").querySelector("input").value);
    const no2 = Number(document.getElementById("no2").querySelector("input").value);
    const operator = document.getElementById("operators").value;

    let value = 0;

    switch (operator) {
        case '+':
            value = no1 + no2;
            break;
        case '-':
            value = no1 - no2;
            break;
        case '*':
            value = no1 * no2;
            break;
        case '/':
            value = no1 / no2;
            break;
        default:
            break;
    }
    console.log(value);
    document.getElementById("result").querySelector("input").value = value;
}


