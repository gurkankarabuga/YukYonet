const letterValues = {
    'A': 10, 'B': 12, 'C': 13, 'D': 14, 'E': 15, 'F': 16, 'G': 17, 'H': 18, 'I': 19, 'J': 20,
    'K': 21, 'L': 23, 'M': 24, 'N': 25, 'O': 26, 'P': 27, 'Q': 28, 'R': 29, 'S': 30, 'T': 31,
    'U': 32, 'V': 34, 'W': 35, 'X': 36, 'Y': 37, 'Z': 38
};

function calculateCheckDigit() {
    const containerNumber = document.getElementById('container-number').value.toUpperCase();
    const resultContainer = document.getElementById('result');
    const explanationContainer = document.getElementById('explanation');
    
    if (containerNumber.length !== 10 || !/^[A-Z]{4}\d{6}$/.test(containerNumber)) {
        resultContainer.textContent = 'Geçersiz Konteyner Numarası!';
        explanationContainer.textContent = '';
        return;
    }

    let sum = 0;
    let explanationText = '';

    for (let i = 0; i < 10; i++) {
        let value = 0;
        if (i < 4) {
            value = letterValues[containerNumber[i]];
        } else {
            value = parseInt(containerNumber[i]);
        }
        sum += value * Math.pow(2, i);
        explanationText += `${containerNumber[i]}: ${value} * 2^${i} = ${value * Math.pow(2, i)}\n`;
    }

    const checkDigit = sum % 11 % 10;
    resultContainer.textContent = `11. Haneniz: ${checkDigit}`;
    explanationContainer.textContent = `Hesaplama Detayları:\n${explanationText}Toplam: ${sum}\nKontrol Rakamı: ${checkDigit}`;
}
