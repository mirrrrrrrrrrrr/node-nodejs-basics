const parseArgs = () => {
    // Write your code here 
    const args = process.argv.slice(2);
    console.log(args)
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i].replace('--', '');
        const value = args[i + 1];
        console.log(`${key} is ${value}`);
    }
};

parseArgs();