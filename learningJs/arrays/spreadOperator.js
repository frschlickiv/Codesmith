const first = [1, 2, 3, 4];
const second = [4, 5, 6, 7];

const combined = [...first, 'a', ...second, 'b']

const copy = [...combined]


console.log (copy);