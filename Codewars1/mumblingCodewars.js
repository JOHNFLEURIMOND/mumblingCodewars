function accum(s) {
  const letters = s.toLowerCase().split('');
  let solution = [];
  for (let i = 0; i < letters.length; i++) {
    solution.push(letters[i].repeat(i + 1))

  }
  solution = solution.map(str => str.replace(/\b\w/g, letters => letters.toUpperCase())).join('-');
  return solution;

}