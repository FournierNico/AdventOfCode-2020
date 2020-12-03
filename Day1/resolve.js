const Input = require('./input');

const firstPuzzle = () => {
  Input.forEach(value1 => {
    Input.forEach(value2 => {
      if (value1 + value2 == 2020)
        console.log('Value1: ' + value1 + ' Value2: ' + value2 + ' Mult: ' + value1 * value2);
    });
  });
};

const secondPuzzle = () => {
  Input.forEach(value1 => {
    Input.forEach(value2 => {
      Input.forEach(value3 => {
        if (value1 + value2 + value3 == 2020)
          console.log('Value1: ' + value1 + ' Value2: ' + value2 + ' Value3: ' + value3 + ' Mult: ' + value1 * value2 * value3);
      });
    });
  });
};

console.log('Resolve first Puzzle...');
firstPuzzle();
console.log('Resolve second Puzzle...');
secondPuzzle();