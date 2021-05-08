const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Map
function map(array, operationFn){
    let newArray = [];
    for(let element of array){
        newArray.push(operationFn(element));
    }
    return newArray;
}

let newArray = map(companies, company => {
        company.end += 5;
        return company;
    });

console.log(newArray);


// For Each
function forEach(array, operationFn){
    for (let element of array){
        operationFn(element);
    }
}

forEach(companies, company => console.log(company));

// Filter
function filter(array, operationFn) {
    let newArray = [];
    for (let element of array){
        if (operationFn(element)) newArray.push(element);
    }
    return newArray;
}

let filteredArray = filter(ages, age => age > 35);

console.log(filteredArray);


// Reducer
let testArray = [1, 2, 3, 4];
let testArray2 = ["Secretary", "of", "State"];

// Full version
function reduce(array, operationFn, initialValue){
    let accumulated = initialValue;
    for(let index = 0; index < array.length; index++){
        // operationFn(accumulated, element, index, array)
        accumulated = operationFn(accumulated, array[index], index, array);
    }
    return accumulated;
}

// Simplified
// function reduce(array, operationFn, initialValue){
//     let accumulated = initialValue;
//     for(let element of array){
//         accumulated = operationFn(accumulated, element);
//     }
//     return accumulated;
// }

// Equivalent to calling testArray.reduce((accumulator, currentValue) => {
//                                  return accumulator + currentValue;
//                                  }, 0))
let reducedArray = reduce(testArray, (accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

console.log('reduced1: ', reducedArray);

reducedArray = reduce(testArray2, (accumulator, currentValue) => {
    return accumulator + currentValue[0];
  }, "");

console.log('reduced2: ', reducedArray);

