const Input = require('./input');

const firstPuzzle = () => {
  let numberOkPassword = 0;
  Input.forEach(element => {
    let splitted = element.split(' ');
    let nbrMin = splitted[0];
    let nbrMax = splitted[2];
    let letter = splitted[3][0];
    let pass = splitted[4];
    nbrOccur = (pass.match(new RegExp(letter, "g")) || []).length;
    if (nbrMin <= nbrOccur && nbrOccur <= nbrMax)
      numberOkPassword++;
  });
  return numberOkPassword;
};

const secondPuzzle = () => {
  let numberOkPassword = 0;
  Input.forEach(element => {
    let splitted = element.split(' ');
    let pos1 = parseInt(splitted[0]);
    let pos2 = parseInt(splitted[2]);
    let letter = splitted[3][0];
    let pass = splitted[4];
    let charPos1 = pass[pos1 - 1];
    let charPos2 = pass[pos2 - 1];
    if ((charPos1 == letter) + (charPos2 == letter) == 1)
      numberOkPassword++;
  });
  return numberOkPassword;
};

console.log('Resolve first Puzzle...');
console.log(firstPuzzle());
console.log('Resolve second Puzzle...');
console.log(secondPuzzle());