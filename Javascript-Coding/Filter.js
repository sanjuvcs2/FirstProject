const people = [{
    name: 'json', age: 30,
    name: 'ik', age: 23
}];

const overagedPeople = [];
for (let i = 0; i < people.length - 1; i++) {
    const person = people[i];
    if (person >= 18) {
        overagedPeople.push(person);
    }
}

const newMethod = people.map(person => person.age >= 18);
