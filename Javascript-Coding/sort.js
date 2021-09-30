const people = [{
    name: 'json', age: 30,
    name: 'ik', age: 23
}];

//Bubble Sort aligoritham
for (let j = 0; j < people.length - 1; j++) {
    for (let i = 0; i < people.length - 1; i++) {
        if (people[i].age > people[i + 1].age) {
            const temp = people[i + 1];
            people[i + 1] = people[i];
            people[i] = temp;
        }
    }
}

const sortedByage = people.sort((a, b) => a.age - b.age);