const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
    const currencyValueConverted = document.querySelector('.currency-value-converted');

    console.log(currencySelect.value);
    const dolarToday = 5.0;
    const euroToday = 5.9;
    const libraToday = 6.8;
    const ieneToday = 0.05;
    const bitcoinToday = 150000.0;
    const wonToday = 0.1;

    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday);
    }
    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday);
    }
    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / libraToday);
    }
    if (currencySelect.value == 'iene') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(inputCurrencyValue / ieneToday);
    }
    if (currencySelect.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday);
    }

    if (currencySelect.value == 'won') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ko-KR', {
            style: 'currency',
            currency: 'KRW'
        }).format(inputCurrencyValue / wonToday);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);

}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name');
    const currencyImg = document.querySelector('#currency-img');


    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano';
        currencyImg.src = './Dolar.png';
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro';
        currencyImg.src = './Euro.png';
    }

    if (currencySelect.value == 'libra') {
        currencyName.innerHTML = 'Libra Esterlina';
        currencyImg.src = './Libra.png';
    }

    if (currencySelect.value == 'iene') {
        currencyName.innerHTML = 'Iene Japonês';
        currencyImg.src = './Iene.png';
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin';
        currencyImg.src = './Bitcoin.png';
    }

    if (currencySelect.value == 'won') {
        currencyName.innerHTML = 'Won Sul-Coreano';
        currencyImg.src = './won.webp';
    }

    console.log("forçando commit");
    convertValues();
}


currencySelect.addEventListener('change', changeCurrency);
convertButton.addEventListener('click', convertValues);