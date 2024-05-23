function CurrencyConverter(num) {
    this.exchangeRate = num;
  
    this.convert = function (amountInHryvnia, currencyName) {
      const amountInTargetCurrency = amountInHryvnia / this.exchangeRate;
      return `${amountInHryvnia} UAH is equal to ${amountInTargetCurrency.toFixed(
        2
      )} ${currencyName}`;
    };
  
    this.getInfo = function () {
      return Exchange Rate ${this.exchangeRate};
    };
  
    this.updateExchangeRate = function (newRate) {
      this.exchangeRate = newRate;
    };
  }
  
  const euroConverter = new CurrencyConverter(44);
  
  console.log(euroConverter.getInfo());
  
  console.log(euroConverter.convert(300, 'euro'));
  
  const dollarConverter = new CurrencyConverter(38);
  
  console.log(dollarConverter.convert(300, 'dollar'))
  
  dollarConverter.updateExchangeRate(5);
  
  console.log(dollarConverter.getInfo())
  
  console.log(dollarConverter.convert(200, 'dollar'));