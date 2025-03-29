// var is a function-scoped variable , so it can be accessed inside the function where it is declared.
// However, it is not accessible outside the function.
// function scoped variable means that it can be accessed inside the function where it is declared.
// var age = 18;
// if(true) {
//     console.log(age); // 18
// } 

// var can be redeclared and updated in the same scope.
var x = 10; 
var x = 20;


// function is a block-scoped variable, so it can be accessed inside the block where it is declared.
// However, it is not accessible outside the block.
function solve() {
    var age = 18;
    console.log(age); // 18
}
solve(); // 18


// let is a block-scoped variable, so it can be accessed inside the block where it is declared.
// However, it is not accessible outside the block.
let age = 18;
console.log(age); // 18

// block-scoped variable means that it can be accessed inside the block where it is declared.
{
    let age = 20;
    console.log(age); // 20
}


let a = 10;
a - "Manas "
