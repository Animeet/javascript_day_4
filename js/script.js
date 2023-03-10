
//    switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//     }


// THE ABOVE IS AN ALTERNATIVE TO THE BELOW


// function calc(num1, num2, operator){
//     if (operator = '+') {
//         return num1 + num2;
//     } else if (operator === '-') {
//         return num1 - num2;
//     } else if (operator === '*') {
//         return num1 * num2;
//     }
// }

// var sum = calc(5, 10, '+');
// var diff = calc(5, 10, '-');
// var prod = calc(5, 10, '*');

// console.log(prod);
// console.log(diff);
// console.log(sum);


//----------------------------------------------------------------



// function subtract(num1, num2) {
// return num1 - num2
// }

// var diff1 = subtract(10, 5);
// var diff2 = subtract(3, 1);

// console.log(diff2);




//----------------------------------------------------------------



// function myFunc(num, str) {
//     console.log(num);
// }

// myFunc(10, 'another');


// var num =10;

// console.log(num);




//----------------------------------------------------------------


// function printName(name) {
//     var something = 'something'
//     var capitalize = function(str) {
//         return str[0].toUpperCase() + str.slice(1);
//     }

//     var capped = capitalize(name);

//     console.log(capped)
// }

// printName('Tiffany');


//----------------------------------------------------------------


//If we want more than one result, we can use arrays inside the function


// function another() {
//     return ['one value', 'two value'];
// }

// var result = another ();

// console.log (result[1]);



//----------------------------------------------------------------



//How to sort an array of numbers from ascending order
//Swap to return next - current to sort the array of numbers in descending order

// vr nums = [10, 3, 100, 500, 50, 75, 45]

// nums.sort(function(current, next){
//     return current - next
// });

// console.log(nums);


// for (var = 0; 1 < nums.length; i++) {
//     console.log(nums[i]);
// }



//----------------------------------------------------------------



// var sloppyData = ['JD', 'pickleball', 2, 1, 'fish'];

// var data = {
// 	name: 'JD',
// 	sport: 'pickleball',
// 	pets: 2,
// 	kids: 1,
// 	hobby: 'fish'
//     printName: function() {
//         console.log(this.name);
//     }
// };

//If you want to call printName
//data.printName();

//Instead of console.log(data.name); -> console.log(this.name);
//THIS is equivalent to the parent object of this method 'data.printName()' & 'var data'
//Even if you changed the parent name 'var.data' to 'var.gfhjehgkeigr' the result would be the same if you had (this.name)

//console.log(data.name);      JD
//console.log(data.kids);      1


var lowercase = ['a', 'b', 'c', 'd', 'e']
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function getRandom(charSet) {
    return charSet[Math.floor(Math.random() * charSet.length)];
}


function genPass(data) {
    var result = '';

        for (var i = 0; i < data.passwordLength; i++) {
            result += getRandom(lowercase);
        }

    return result;
}


var options = {
    passwordLength: 35;
}

var pass = genPass(options);

console.log(pass)




// var random = Math.floor(Math.random() * 10);

// console.log(random);