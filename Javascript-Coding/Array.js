const since = [2000, 2003, 2010, 2013];

const yearsPassed = [];
for(let i=0; i<since.length -1; i++){
  const sinceYear = since[i];
  yearsPassed.push(2020 - sinceYear);
}


const newYear = since.map(year => 2020 - year);

console.log('old..', yearsPassed);
console.log('newWay', newYear);