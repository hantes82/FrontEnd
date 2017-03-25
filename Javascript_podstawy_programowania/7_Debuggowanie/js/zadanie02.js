function checkNumber(number){
  var type = typeof number;

  if (type === 'string') {
   return 'Your number is string';
  }

  else if(type === undefined) {
   return 'Your number is undefined';
  }

  else if(type === null) {
   return 'Your number is null';
  }
    else{
      return 'Your number is really number';
  }

}


function countSomething() {
 var foo = 10;
 console.log(checkNumber(foo));

 var bar = "lalalala";
 console.log(checkNumber(bar));


 var baz = null;
 console.log(checkNumber(baz));
}

countSomething();
