const data = [
    { category: 'fruit', name: 'apple', quantity: 5 },
    { category: 'vegetable', name: 'carrot', quantity: 8 },
    { category: 'fruit', name: 'banana', quantity: 3 },
    { category: 'vegetable', name: 'lettuce', quantity: 2 }
  ];

  const allVegetables = data.reduce((acc, x) => {
    if (x.category === vegetable) {
        return acc.concat(x)
    }
    return 
  }, []);