const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyOriginSelect = document.querySelector(".currency-origin-select")

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)
    const currencyValueConverted = document.getElementById('value-converted')
    const currencyValueToConvert = document.getElementById("value-origin")

    const dolarToday = 5.2
    const euroToday = 6.2
    const canadaToday = 4.12
    const australiaToday = 3.65
    const pesoToday = 0.0049
    const realToday = 1.00

    const currency = currencySelect.value
    const origin = currencyOriginSelect.value


    let valueToConvert = inputCurrencyValue

    // Converter valor para real se a origem não for BRL
    if (origin === 'USD') valueToConvert *= dolarToday
    if (origin === 'EUR') valueToConvert *= euroToday
    if (origin === 'CAD') valueToConvert *= canadaToday
    if (origin === 'AUD') valueToConvert *= australiaToday
    if (origin === 'ARS') valueToConvert *= pesoToday
    // BRL permanece igual
    const originFormat = {

        'USD': { locale: 'en-US', currency: 'USD' },
        'EUR': { locale: 'de-DE', currency: 'EUR' },
        'CAD': { locale: 'en-CA', currency: 'CAD' },
        'AUD': { locale: 'en-AU', currency: 'AUD' },
        'ARS': { locale: 'es-AR', currency: 'ARS' },
        'BRL': { locale: 'pt-BR', currency: 'BRL' },
    }

    let originLocale = "pt-BR"
    let originCurrency = origin

    if (origin === "USD") originLocale = "en-US"
    if (origin === "EUR") originLocale = "de-DE"
    if (origin === "CAD") originLocale = "en-CA"
    if (origin === "AUD") originLocale = "en-AU"
    if (origin === "ARS") originLocale = "es-AR"

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(
        originFormat[origin].locale,
        {
            style: "currency",
            currency: originFormat[origin].currency
        }
    ).format(inputCurrencyValue)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat(originLocale , {
        style: "currency",
        currency: originCurrency 
    }).format(inputCurrencyValue)

    // Agora converte o valor em real para a moeda de destino
    if (currency === 'dolar-USD') {
        let convertedValue = valueToConvert / dolarToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    if (currency === 'dolar-CAD') {
        let convertedValue = valueToConvert / canadaToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
        }).format(convertedValue)
    }

    if (currency === 'dolar-AUD') {
        let convertedValue = valueToConvert / australiaToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-AU", {
            style: "currency",
            currency: "AUD"
        }).format(convertedValue)
    }

    if (currency === 'euro') {
        let convertedValue = valueToConvert / euroToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }

    if (currency === 'Peso-ARS') {
        let convertedValue = valueToConvert / pesoToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(convertedValue)
    }

    if (currency === 'real-BRL') {
        let convertedValue = valueToConvert / realToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)
    }
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value === 'dolar-USD') {
        currencyName.innerHTML = 'US$ Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value === 'euro') {
        currencyName.innerHTML = '€ Euro'
        currencyImage.src = './assets/euro.png'
    }

    if (currencySelect.value === 'Peso-ARS') {
        currencyName.innerHTML = '$ Peso Argentino'
        currencyImage.src = './assets/argentina.png'
    }

    if (currencySelect.value === 'dolar-AUD') {
        currencyName.innerHTML = 'AU$ Dólar Australiano'
        currencyImage.src = './assets/australia.png'
    }

    if (currencySelect.value === 'real-BRL') {
        currencyName.innerHTML = 'R$ Real'
        currencyImage.src = './assets/real.png'
    }

    if (currencySelect.value === 'dolar-CAD') {
        currencyName.innerHTML = 'C$ Dólar Canadense'
        currencyImage.src = './assets/canada.png'
    }

    convertValues()
}

function changeOriginCurrency() {
    const currencyNameOrigin = document.getElementById('name-origin')
    const currencyImageOrigin = document.querySelector('.img-origin')

    if (currencyOriginSelect.value === 'USD') {
        currencyNameOrigin.innerHTML = 'US$ Dólar Americano'
        currencyImageOrigin.src = './assets/dolar.png'
    }

    if (currencyOriginSelect.value === 'EUR') {
        currencyNameOrigin.innerHTML = '€ Euro'
        currencyImageOrigin.src = './assets/euro.png'
    }

    if (currencyOriginSelect.value === 'ARS') {
        currencyNameOrigin.innerHTML = '$ Peso Argentino'
        currencyImageOrigin.src = './assets/argentina.png'
    }

    if (currencyOriginSelect.value === 'AUD') {
        currencyNameOrigin.innerHTML = 'AU$ Dólar Australiano'
        currencyImageOrigin.src = './assets/australia.png'
    }

    if (currencyOriginSelect.value === 'CAD') {
        currencyNameOrigin.innerHTML = 'C$ Dólar Canadense'
        currencyImageOrigin.src = './assets/canada.png'
    }

    if (currencyOriginSelect.value === 'BRL') {
        currencyNameOrigin.innerHTML = 'R$ Real'
        currencyImageOrigin.src = './assets/real.png'
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener("click", convertValues)
currencyOriginSelect.addEventListener("change", changeOriginCurrency)
