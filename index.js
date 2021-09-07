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
} else if (check === "med") {
    const sortedArgs = args.sort((a,b) => {
        if (Number(a) < Number(b)) { return -1 }
        if (Number(a) > Number(b)) { return 1 }
        return 0
        // found this online, also working!
        // a - b
    })
    // helper log (this time helped me see my wrong sorting, what was the problem...)
    // console.log(sortedArgs);
    
    const median = (sortedArgs.length - 1) / 2;
    if (!Number.isInteger(median)) {
        sum += Number(sortedArgs[median + 0.5]);
        // console.log(median)
        // console.log ("sum", sum)
        sum += Number(sortedArgs[median - 0.5]);
        // console.log ("sum", sum)
        console.log(sum / 2);
        process.exit();
    } 
    console.log(Number(sortedArgs[median]))
} else {
    console.log(`I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)`)
}

