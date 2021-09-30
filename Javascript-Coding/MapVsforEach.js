var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Map is not equal to original array

const new_Arr = array.map(arr => arr);

array = new_Arr // false


/// we can pass the object to the map as 'thisArg'
const obj = { name: ' Test' };

[1].map(function () {
    console.dir(this);
}, obj);


// 2rd Way
array.forEach(function (val, id) {
    array[id] = val * 0.8;
});

array = array.map(function (val) {
    return val * 0.8;
});