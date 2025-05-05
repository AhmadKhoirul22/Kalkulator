let realExpression = "0";

function AddDisplay(value) {
    const display = document.getElementById('display');
    const isOperator = ['+', '-', '*', '/'].includes(value);
    // angka terakhir
    const lastChar = realExpression.slice(-1);

    // Cegah operator saat masih 0
    if (realExpression === "0" && isOperator) return;

    // Cegah dua operator berurutan
    if (isOperator && ['+', '-', '*', '/'].includes(lastChar)) return;

    // Mapping simbol tampilan
    const displayValue = value === '/' ? '÷' : value === '*' ? '×' : value === '.' ? ',' : value;

    // Update ekspresi asli
    if (realExpression === "0" && !isOperator) {
        realExpression = value;
        display.value = displayValue;
    } else {
        realExpression += value;
        display.value += displayValue;
    }
}


function clearDisplay() {
    document.getElementById('display').value = "0";
    realExpression = "0";
}

function Hitung() {
    const display = document.getElementById('display');
    try {
        let hasil = eval(realExpression);
        display.value = hasil;
        realExpression = hasil.toString();
    } catch {
        display.value = "Error";
        realExpression = "0";
    }
}

function Persen() {
    const display = document.getElementById('display');
    let nilai = parseFloat(display.value);
    if (!isNaN(nilai)) {
        let hasil = nilai / 100;
        display.value = hasil;
    }
}

function toggleSign() {
    const display = document.getElementById('display');
    // const display = document.getElementById('display');
        
    // Cek apakah realNumber hanya angka tanpa operator
    if (/[\+\-\*\/]/.test(RealNumber)) {
        return; // Jangan lakukan apa-apa kalau mengandung operator
    }

    let value = parseFloat(display.value);

    // Jika bukan angka, anggap saja 0
    if (isNaN(value)) {
        value = 0;
    }

    // Balik tanda
    value = -value;

    // Update ke display dan RealNumber
    display.value = value.toString();
    RealNumber = value.toString();
}