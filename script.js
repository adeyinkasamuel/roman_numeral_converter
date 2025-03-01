const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const input = document.getElementById('number');

const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

function convertToRoman(num) {
    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }
    return result;
}

function showOutput(message, isError = false) {
    output.textContent = message;
    output.classList.remove('hidden');
    if (isError) {
        output.classList.add('error');
    } else {
        output.classList.remove('error');
    }
}

convertBtn.addEventListener('click', () => {
    const inputValue = input.value;
    
    if (!inputValue) {
        showOutput('Please enter a valid number', true);
        return;
    }

    const num = parseInt(inputValue);

    if (num < 1) {
        showOutput('Please enter a number greater than or equal to 1', true);
        return;
    }

    if (num >= 4000) {
        showOutput('Please enter a number less than or equal to 3999', true);
        return;
    }

    const result = convertToRoman(num);
    showOutput(result);
});

// Add keyboard support for Enter key
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convertBtn.click();
    }
}); 