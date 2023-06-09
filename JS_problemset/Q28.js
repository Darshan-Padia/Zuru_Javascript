// checking if two arrays are equal or not

const isEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++)
        if (arr1[i] !== arr2[i]) return false;
    return true;
}

console.log(isEqual([1, 2, 3], [1, 2, 3])); // true
console.log(isEqual([1, 2, 3], [1, 2, 4])); // false