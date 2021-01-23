const bot = require('./bot.js')
bott = new bot(1, 1);

test('finds the path', () => {
    const steps = "FfLfR";
    expect(bott.move(steps)).toEqual([3, 2])
});

test('Knows when bot is out of grid the', () => {
    const steps = "rFffrf";
    expect(bott.move(steps)).toContain('Botout');
});

test('knows where bot reached', () => {
    const position = "2,1";
    expect(bott.shortPath(position)).toContain('F');
});

test('check shortpath for exceeded size', () => {
    const position = "20,20";
    expect(bott.shortPath(position)).toContain('Size_exceded');
});

test('Knows when bot is out of grid after relocation', () => {
    const steps = "1,3";
    expect(bott.relocatebot(steps)).toContain('done');
});
test('Knows when bot is out of grid after relocation', () => {
    const steps = "-1,3";
    expect(bott.relocatebot(steps)).toContain('Botout');
});
