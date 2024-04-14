const expenses = [
    { category: 'food', amount: 50 },
    { category: 'transport', amount: 30 },
    { category: 'entertainment', amount: 20 }
  ];
  
  const allAmount = expenses.reduce((acc, x) => {
    return acc + x.amount
  }, 0);
  console.log(allAmount);