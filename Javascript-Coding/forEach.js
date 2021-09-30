const names = ['john', 'jane', 'anne', 'jody'];

for (let i = 0; i < names.length - 1; i++) {
    const name = names[i];
    console.log(name);
}

names.forEach(name => {
    console.log(name);
});