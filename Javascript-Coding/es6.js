const isEmpty = obj => {
    for (let i in obj) return false
    return true;
}

console.log(isEmpty({})); // true

const strafter = str.charAt(0).toUpperCase() + str.slice(1);


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
} // 43


for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
} // 0 1 2 3