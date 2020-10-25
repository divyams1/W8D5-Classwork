
class Clock {
  constructor() {
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();      
    setInterval(this._tick.bind(this) , 1000);
  }

  printTime() {
    console.log(`${this.hours}: ${this.minutes}: ${this.seconds}`);
  }

  _tick() {
      
    this.seconds += 1 
    if (this.seconds === 60) { 
        this.minutes += 1;
        this.seconds = 0;
        if (this.minutes === 60) {
            this.hours +=1; 
            this.minutes = 0;
        } if (this.hours === 24) {
            this.hours === 0;
        }
    }
    this.printTime();
  }
}
// const clock = new Clock();

// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
function addNumbers(sum, numsLeft, completionCallback) {
    if (!sum) {
        sum = 0;
    }
    if (numsLeft > 0) {
        const question = rl.question("Add a number:", function(answer) {
            num = parseInt(answer);
            sum += num;
            console.log(sum);
            addNumbers(sum, numsLeft-1, completionCallback)
        })
    }  else {
            completionCallback(sum);
            rl.close();
        }
    
}
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
    
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  const question = rl.question(`Is ${el1} > ${el2}? `, function(answer) {
        if (answer === "yes") {
            callback(true);
        } else {
            callback(false);
        }
})
}

// function(bool)
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    let isGreaterThan = function(bool){
             if (bool=== true) {
                let a = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = a;
                madeAnySwaps = true;
                console.log(arr);
                 
        }
    innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
} 
    if (i < arr.length -1 ){
        askIfGreaterThan(arr[i], arr[i+1], isGreaterThan )
        //       if (bool=== true) {
        //         let a = arr[i];
        //         arr[i] = arr[i+1]
        //         arr[i+1] = a;
        //         madeAnySwaps = true;
        //         console.log(arr);
        // }
       
        // })
        
    } else {
        outerBubbleSortLoop(madeAnySwaps);
    }
} 


function absurdBubbleSort(arr, sortCompletionCallback) {
    innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
  function outerBubbleSortLoop(madeAnySwaps) {
      if (madeAnySwaps === false) {
          sortCompletionCallback(arr);
          rl.close();
      } else {
          innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
      }
  }


}

// absurdBubbleSort([3, 2, 1], function(arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   rl.close();
//     // console.log(arr);
// });

// Function.prototype.myBind = function(context) {
//     this.apply(context);
// }
// Function.prototype.myBind = (context) => {
//     debugger
//     this.apply(context);
//     // console.log(this)
// }

class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"

console.log(turnOn.myBind(lamp))