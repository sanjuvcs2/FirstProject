const numbers = [10,20,30];
const sum = 0;
for(let i =0;i<numbers.length-1;i++){
    const number = numbers[i];
    sum += number;
}

let newReduce = numbers.reduce((oldNm, newNo) => (oldNm = newNo));
