const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var name,country
rl.question("What is your name ? ", function(name) {
    rl.question('', function(country) {
        rl.close();
    });
    main()
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
const main = () => {
    console.log(name,country);
}