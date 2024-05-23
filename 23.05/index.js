function CurrencyConverter(num, currencyName) {
  this.exchangeRate = num;

  this.convert = function (amountInUah) {
    const amountInTargetCurrency = amountInUah / this.exchangeRate;
    return `${amountInUah} UAH is equal to ${amountInTargetCurrency.toFixed(
      2
    )} in ${currencyName}`;
  };

  this.getInfo = function () {
    return `Exchange Rate ${this.exchangeRate} for ${currencyName}`;
  };

  this.updateExchangeRate = function (newRate) {
    this.exchangeRate = newRate;
  };
}

const uahToEuroConverter = new CurrencyConverter(44, "EURO");

console.log(uahToEuroConverter.getInfo());

console.log(uahToEuroConverter.convert(300));

const uahToUsdConverter = new CurrencyConverter(38, "USD");

console.log(uahToUsdConverter.convert(300));

uahToUsdConverter.updateExchangeRate(5);

console.log(uahToUsdConverter.getInfo());

console.log(uahToUsdConverter.convert(200));
