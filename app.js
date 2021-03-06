const matcher = require('./matcher');
const readline = require('readline');
const bot = require('./bot.js')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


bott = new bot(1, 1);
console.log(" Enter for move: MOVE>path(eg: MOVE>FRRLF)",'\n',
            "Enter for shortespath: ShortPath> (eg: shortpath>5,4 )", '\n',
            "Enter for relocation: relocate> (eg: relocate>5,4 )", '\n', 
            "Enter for quiting: QUIT",'\n');
    
rl.setPrompt('> ');
rl.prompt();
rl.on('line', (input) => {
    matcher(input, data => {
        switch (data.intent) {
            case 'Move':
                let cordinates = bott.move(input.split(">")[1]);
                if (typeof cordinates === 'string')
                    console.log("Bot has gone out of grid");
                else
                    console.log("Bot has reached " + cordinates[0] + "," + cordinates[1]);
                rl.setPrompt('> ');
                rl.prompt();
                break;
            case 'ShortPath':
                let stepsToFollow = bott.shortPath(input.split(">")[1]);
                console.log(stepsToFollow);
                rl.setPrompt('> ');
                rl.prompt();
                break;
            case 'Relocate':
                let relocate = bott.relocatebot(input.split(">")[1]);
                if ( relocate == "done")
                    console.log(" done relocation to " + input.split(">")[1] );
                else
                    console.log("Bot has gone out of grid");  
                rl.setPrompt('> ');
                rl.prompt(); 
                break;
            case 'Quit':
                console.log("Have a nice day!");
                process.exit(0);
                break;
            default: {
                console.log("I do not know what you mean :(");
                rl.prompt();
            }
        }
    });
})
