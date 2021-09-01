import process from 'process';

let sum = 0;
let avg = 0;

// slice off the first 3 arguments
const myArgs = process.argv.slice(3);

// more elegant way w/ destructuring
const [ node, script, check, ...args] = process.argv;

if (check == "sum") {
    args.forEach( arg => {
        const currArg = Number(arg)
        if (isNaN(currArg)) {
            console.log(`Sorry, the argument ${arg} is not a number, please try again`);
            process.exit();
        }
        sum += currArg;
        return sum;
        })
        console.log(sum);
} else if (check == "avg") {
    args.forEach( arg => {
        const currArg = Number(arg)
        if (isNaN(currArg)) {
            console.log(`Sorry, the argument ${arg} is not a number, please try again`);
            process.exit();
        }
        sum += currArg;
        return sum;    
    })
    avg = sum / myArgs.length;
    console.log(avg);
} else {
    console.log(`I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`)
}

