const bot = require('./bot.js')
bott = new bot(1,1);

test('finds the path', () => {
    const steps = "FfLfR";
    expect(bott.move(steps)).toEqual([3,2])
    });

test('Knows when bot is out of grid the', () => {
    const steps = "rFffrf";
    expect(bott.move(steps)).toContain('Botout');
    });

test('knows where bot reached', () => {
    const position = "2,1";
    expect(bott.shortPath(position)).toContain('F');
    });


