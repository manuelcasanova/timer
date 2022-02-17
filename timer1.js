// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

let args = process.argv.slice(2)
// let numOfArgs = args.length; 
// let lastOfArgs = args[args.length - 1]; //Helps me to find the last item written in the terminal

for(const arg of args){
  if (!isNaN(arg) && arg >= 0) { 
    //!isNan -> is not not a number (therefore, is a number) and it's a natural number)
    setTimeout(() => {
      process.stdout.write(`ding `); //process.stdout.write('\x07') I cannot hear the sound
    }, arg * 1000);
  }
  // setTimeout(() => {               //I want to fix the new line at the end but...when!?
  //   process.stdout.write("\n");
  // }, 0);
}

/*
Alternative suggested, but uses arrow function and forEach loop and I feel I control more the code above
*/

// process.argv.slice(2).forEach(arg => {
//   if (!isNaN(arg) && arg >= 0) { 
//     //!isNan -> is not not a number (therefore, is a number and it's a natural number)
//     setTimeout(() => {
//       process.stdout.write(`*`); //process.stdout.write('\x07') I cannot hear the sound
//     }, arg * 1000);
//   }
// });


