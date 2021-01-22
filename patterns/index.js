const patternDictionary = [{
  pattern: '\\b(Quit|Exit)\\b',
  intent: 'Quit'
},{
  pattern: '\\b(shortpath)\\b',
  intent: 'ShortPath'
},{
  pattern: '\\b(move)\\b',
  intent: 'Move'
} ];

module.exports = patternDictionary;
