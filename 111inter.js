// var a=1;

// (function() {
//     var a=12
//     console.log(a);
// })()

// console.log(a);

function foo() {
    for (var i = 0; i < 5; i++) {
      console.log(i, 'inside for loop');
    }
    console.log(i, 'outside for loop');
  }
  
  foo();