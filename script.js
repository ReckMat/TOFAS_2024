function exemploConsoleLog() {
    let output = `Progragramação\n`;
    let num = 1;
    output += `${num}\n`;
    document.getElementById('outputConsoleLog').innerText = output;
}

function exemploIfElse() {
    let output;
    let num = 5;
    if (num > 10) {
        output = "Maior que 10";
    } else {
        output = "Menor ou igual a 10";
    }
    document.getElementById('outputIfElse').innerText = output;
}

function exemploExecucaoSequencial() {
    let num = 1;
    num = 2;
    let output = num; // Exibe 2
    document.getElementById('outputExecucaoSequencial').innerText = output;
}

function exemploOperadores() {
    let num1 = 10;
    let num2 = 5;
    let output = `${num1 + num2}\n`; // 15
    output += `${num1 > num2}`; // true
    document.getElementById('outputOperadores').innerText = output;
}

function exemploVariaveis() {
    let num1 = 1;
    let num2;
    num2 = 2;
    let output = `${num1}, ${num2}\n`; // 1, 2
    num1 = 3;
    output += num1; // 3
    document.getElementById('outputVariaveis').innerText = output;
}
