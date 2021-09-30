let reverseArray = [];
for (let i = arrs.length; i > 0; i--) {
    reverseArray.push(arrs[i - 1]);
}

arrs.reverse();


arrs.reduceRight((acc, e1) => {
    acc.push(e1);
    return acc;
}, []);