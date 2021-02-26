                        /* Maps and Sets Exercise */
//  Quick Question #1
//What does the following code return?

new Set([1,1,2,2,3,4]);

//Answer: it removes duplicates and returns Set { 1, 2, 3, 4 }

//      Quick Question #2
// What does the following code return?

[...new Set("referee")].join("");
//Answer: this removes duplicates and returns ref.


//      Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// Answer: m looks like { [ 1, 2, 3 ] => true, [ 1, 2, 3 ] => false }

//      hasDuplicate
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(array){
    let newSet = new Set(array);
    //console.log(newSet);
    if (array.length === newSet.size){
        return false;
    }
    return true;
}
console.log(hasDuplicate([1,3,2,1])); // true
console.log(hasDuplicate([1,5,-1,4])) // false

//          vowelCount
/*  Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the 
values are the count of the vowels in the string.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/
/*
Steps: create a string of vowels, 
convert charcters of argument into lowercase, and check if an argument contains characters of vowel string. 
If it does, then count that vowel character.
create map, and put that vowel into that map.
*/

function vowelCount(str){
    let str1 = 'aeiou';
    let newMap = new Map();
    for(let char of str){
        let charToLowerCase = char.toLowerCase();
        if(str1.includes(charToLowerCase)){
            if(newMap.has(charToLowerCase)){
                newMap.set(charToLowerCase, newMap.get(charToLowerCase) + 1);
            } else {
              newMap.set(charToLowerCase, 1);
            }
        }
    }
    return newMap;
}
console.log(vowelCount('aaaaeibbcciiiccceeee'));
console.log(vowelCount('awesome')); 
console.log(vowelCount('Colt')); 