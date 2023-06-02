function isItBetween(){

  let inputUser = +prompt("Type a number to see if it's between 0 and 100");

  if(inputUser >= 0 && inputUser <=100){

    console.log( inputUser + ", is between 0 and 100");
  }
  else{
    console.log(inputUser + ", isn't between 0 and 100");
  }
  
}

isItBetween();


