const Input = require('./input');

const nbrLines = Input.length;
const nbrCol = Input[0].length;

//construct map
const maxCol = nbrLines * 7;
const neededWords = Math.ceil(maxCol / nbrCol);
let map = new Array(nbrLines);
map.fill("");
for (i = 0; i < Input.length; i++) {
  for (j = 0; j < neededWords; j++) {
    map[i] = map[i].concat(Input[i]);
  }
}

const findTrees = (rightJump, downJump) => {
  let nbrTrees = 0;
  let currentCol = 0;
  for (currentLine = downJump; currentLine < nbrLines; currentLine += downJump) {
    currentCol += rightJump;
    if (map[currentLine][currentCol] == "#")
      nbrTrees++;
  }

  return nbrTrees;
}

const firstPuzzle = () => {
  return findTrees(3, 1);
};

const secondPuzzle = () => {
  return (findTrees(1, 1) * findTrees(3, 1) * findTrees(5, 1) * findTrees(7, 1) * findTrees(1, 2));
};

console.log('Resolve first Puzzle...');
console.log(firstPuzzle());
console.log('Resolve second Puzzle...');
console.log(secondPuzzle());