const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const converteDe = document.querySelector(".currency-from")
const currencyFromImg = document.querySelector(".currency-from-img");

const convertValues = async () => {
    const inputCurrencyValueRaw = document.querySelector(".input-currency").value
    const inputCurrencyValue = parseFloat(inputCurrencyValueRaw.replace(/\./g, '').replace(',', '.')) || 0;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor de origem
    const currencyValueConverted = document.querySelector(".currency-value") //valor convertido

    console.log("from:", converteDe.value, "to:", currencySelect.value, "input:", inputCurrencyValue)

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,CHF-BRL,BTC-BRL").then(response => response.json())

    const realToday = 1
    const dolarToday = data.USDBRL.bid
    const euroToday = data.EURBRL.bid
    const libraToday = data.GBPBRL.bid
    const francoToday = data.CHFBRL.bid
    const bitcoinToday = data.BTCBRL.bid


    let valorEmReais = 0


    // converter o valor de origem para real
    if (converteDe.value == "real") {
        valorEmReais = inputCurrencyValue * realToday;
    }

    if (converteDe.value == "dolar") {
        valorEmReais = inputCurrencyValue * dolarToday;
    }

    if (converteDe.value == "euro") {
        valorEmReais = inputCurrencyValue * euroToday;
    }

    if (converteDe.value == "libra") {
        valorEmReais = inputCurrencyValue * libraToday;
    }

    if (converteDe.value == "franco") {
        valorEmReais = inputCurrencyValue * francoToday;
    }

    if (converteDe.value == "bitcoin") {
        valorEmReais = inputCurrencyValue * bitcoinToday;
    }


    if (currencySelect.value == "dolar") {
        //se o select estiver selecionado o valor do dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorEmReais / dolarToday)
    }

    if (currencySelect.value == "euro") {
        //se o select estiver selecionado o valoe do euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorEmReais / euroToday)
    }

    if (currencySelect.value == "libra") {
        //se o select estiver selecionado o valor da libra, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorEmReais / libraToday)
    }

    if (currencySelect.value == "franco") {
        //se o select estiver selecionado o valor do franco suiço, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(valorEmReais / francoToday)
    }

    if (currencySelect.value == "bitcoin") {
        //se o select estiver selecionado o valor do bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(valorEmReais / bitcoinToday)
    }

    if (currencySelect.value == "real") {
        //se o select estiver selecionado o valor do bitcoin, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorEmReais / realToday)
    }


    //define o formato na moeda de origem a ser selecionada
    if (converteDe.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (converteDe.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (converteDe.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (converteDe.value == "libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (converteDe.value == "franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
    }

    if (converteDe.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "franco") {
        currencyName.innerHTML = "Franco suiço"
        currencyImage.src = "./assets/chf.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/real.png"
    }
}

function changeConvertDe() {
    const currencyName = document.querySelector(".currency-box .currency");
    const currencyFromImg = document.querySelector(".currency-from-img");

    if (converteDe.value === "real") {
        currencyFromImg.src = "./assets/real.png";
        currencyName.innerHTML = "Real brasileiro";
    }
    if (converteDe.value === "dolar") {
        currencyFromImg.src = "./assets/dolar.png";
        currencyName.innerHTML = "Dólar americano";
    }
    if (converteDe.value === "euro") {
        currencyFromImg.src = "./assets/euro.png";
        currencyName.innerHTML = "Euro";
    }
    if (converteDe.value === "libra") {
        currencyFromImg.src = "./assets/libra.png";
        currencyName.innerHTML = "Libra";
    }
    if (converteDe.value === "franco") {
        currencyFromImg.src = "./assets/chf.png";
        currencyName.innerHTML = "Franco suíço";
    }
    if (converteDe.value === "bitcoin") {
        currencyFromImg.src = "./assets/bitcoin.png";
        currencyName.innerHTML = "Bitcoin";
    }
    convertValues()
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
converteDe.addEventListener("change", changeConvertDe)