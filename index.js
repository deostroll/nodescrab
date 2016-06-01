var dict = require('./lang/en_wordlist.js');
var g_wordmap = dict.g_wordmap, g_wstr = dict.g_wstr;

var placements = [
  {
    x: 6,
    y: 7,
    l: 'w'
  },
  {
    x: 7,
    y: 7,
    l: 'u'
  },
  {
    x: 8,
    y: 7,
    l: 'd'
  },
];
var g_board = {};

placements.forEach((p) => {
  if(!g_board[p.x]) { g_board[p.x] = {}; }
  g_board[p.x][p.y] = p.l;
});
var result = '';
for(var ax = 0; ax < 15; ax++) {
  for(var ay = 0; ay < 15; ay++) {
    if (ax in g_board && ay in g_board[ax]) {
      var ltr = g_board[ax][ay];
      result += ltr;
    }
    else { result += ' '; }
  }
  result += '\n'
}

console.log(result);
