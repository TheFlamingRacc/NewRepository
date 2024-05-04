function createCounter() {
  const elements = {};

  function addElement(element) {
    if (elements[element]) {
      elements[element]++;
    } else {
      elements[element] = 1;
    }
  }

  function getElements() {
    return elements;
  }

  return {
    addElement,
    getElements,
  };
}

const counter = createCounter();

counter.addElement("apple");
counter.addElement("banana");
counter.addElement("apple");
counter.addElement("orange");

const elements = counter.getElements();
console.log(elements);
