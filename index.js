// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
import axios from 'axios'
const countries = await axios.get("https://restcountries.com/v3/all");
// console.log(countries.data[1])

const countUniqueLanguages = (countries) => {
    let language = []
    for (let i = 0; i < countries.length; i++) {
        for (var key in countries[i].languages) {
            !language.includes(key) ? language.push(key) : null
        }
    }
    return language.length
}

console.log("Total unique languages listed:", countUniqueLanguages(countries.data))
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const sortObjectByValue = (obj) => {
    var sortable = [];
    for (var key in obj)
        if (obj.hasOwnProperty(key))
            sortable.push([key, obj[key]]);
    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
    return sortable;
}

const mostSpokenLanguages = (countries) => {
    let language = []
    for (let i = 0; i < countries.length; i++) {
        for (var key in countries[i].languages) {
            language.push(key)
        }
    }
    var output = {}
    language.map(word => output[word] ? output[word]++ : output[word] = 1)
    return sortObjectByValue(output)
}

console.log("The 15 most spoken languages:", mostSpokenLanguages(countries.data).splice(0, 15))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const largestCountries = (countries) => {
    var areas = {}
    countries.map(country => {
        areas[country.name.common] = country.area
    })
    return sortObjectByValue(areas)
}

console.log("The 10 largest countries:", largestCountries(countries.data).splice(0, 10))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log(
    `What is the difference between forEach, map, filter and reduce ? Explain these using your own words
    forEach is used to iterate over an array and perform a function on each element.
    map is used to create a new array by performing a function implementation on each element of the array.
    filter is used to create a new array by performing a function on each element of an array that returns true or false.
    reduce is used to reduce an array to a single value.

Explain the difference between function declaration and arrow function ?
    function declaration is used to initialize a function using the keyword "function"
        can use .this
        can construct objects
        can use arguments array
        mandatory to use return statement

    arrow function is used to directly assign a function to a variable and it done using "() => {}" syntax, it was introduced in ES6.
        can't use .this
        can't construct objects
        can't use arguments array
        can omit the return keyword for single expressions

Explain the difference between find and findIndex ?
    find is used to find the first element that matches the condition, where as findIndex is used to find the index of the first element that matches the condition.

If you like to filter out one object element in an array which method do you like to use: filter or find ? Explain
    We can use find beacause it returns only the first (single) element that matches the condition.

Explain the difference of var, let and const when we declare a variable ?
    Var
        Functional scope.
        Can be updated and redeclared within the scope.
        Can be accessed without initialization, but returns "undefinded".

    Let
        Block scope.
        Can be updated but cannot be redeclared within the scope.
        Can not be accessed without initialization.

    Const
        Block scope.
        Can not be updated or redeclared within the scope.
        Can not be accessed without initialization.
`)
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------