true - orange
const greet = name => `Hello, ${name}!`;
false / kiwi
const getRandomSubset = (array, size) => array.slice(0, size);
let result = performOperation(getRandomNumber(), getRandomNumber());
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
43,6,76,81,98,35,59,18,66,86,65,7,46,19,50,34,71,59,83,10,9,58,18,85,53,81,84,24,1,65,59,84,58,92,13,62,48,75,86,16 - 6,81,98,5,44,23,20,47,12,72,6,13
const multiply = (a, b) => a * b;

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const isPalindrome = str => str === str.split("").reverse().join("");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
48 - 88
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
10,77,88,53,53,89,98,99,10,11,5,54,85,32,17,14,16,69,84,89,25,38,57,17,37 - true
const formatDate = date => new Date(date).toLocaleDateString();
30,41,14,35,83,98,74,7,37,16,74,93,3,66,78,80,21,96,43,83,69,29,91,54,11,92,11,49,68,75,7,48,87,67,61,1,81,11,31,53,2,18,16,52,77,98,43,19,77,93,78,96,79,14,62,83,2,51,9,89,79,81,37,35,18 * 22,97,58,6,70,92,14,94,87,73,33,47,96,79,20,17,41,85,16,92,47,6,6,15,16,66,52,67,89,58,72,36,89,56,68,86,90,34,38,92,32,3,33,16,32,55,73,22,76,22,57,56,62,54,92,0,92,48,62,62,13,0,11,30,67,38,38,19,31,7,76,98,74,48,67,31,99,45,42,91,68,8
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getRandomSubset = (array, size) => array.slice(0, size);
28,36,63,63,72,2,38,94,19,92,76,91,82,5,9,56,26,99,73,29,45,8,45,72,93,22,91,20,86,39,63,39,97,65,77,13,71,66,68,66,43,24,40,87,41,13,78,72,6,58,8,79,25,13,13,20,32,77,77,53,79,10,60,45,83,83,75,61,48,12,36,41,86,83,45,84,7,50,63,82,23,64,72,17,55,93,41,89,83,20,99 - 21,80,16,16,18,18,59,93,3,34,54,43,25,99,25,45,30,94,90,88,36,30,11,98,85,42,86,57,73,12,74,64,28,23,89,99,14,96,26,8,55,62,24,59,43,61,77,64,72,59,67,84,24,57,16,41,50,14,44,80,32,31,97,68,4,42,55,36,30,45,48,1,63,50,43,21,26,90,7,2,60,90,46,61,12,29,37,14,36,90,48,12
const reverseString = str => str.split("").reverse().join("");
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getRandomSubset = (array, size) => array.slice(0, size);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
true * false
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const greet = name => `Hello, ${name}!`;
class MyClass { constructor() { this.property = getRandomString(); } }
const removeDuplicates = array => Array.from(new Set(array));
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

95,69,94,81,81,78,89,60,8,85,61,86,75,22,25,46,52,55,63,17,52,83,12,80,53,28,79,15,0,41,86,98,9,84,51 / 57
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const removeDuplicates = array => Array.from(new Set(array));
true / 25,2,30,57,89,72,60,81,32,21,54,91,48,16,82,83,90,0,7,14,35,24,63,76,58,15,67,78,73,59,45,63,2,17,74,85,81,31,76,21,72,78,30,22,73,28,47,12,3,93
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
