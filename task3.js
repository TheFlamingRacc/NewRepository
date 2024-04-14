const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 600 }
  ];
  
  const maxPrice = products.reduce((acc, x) => (x.price > acc ? x.price : acc), products[0].price);
  
  console.log(maxPrice);