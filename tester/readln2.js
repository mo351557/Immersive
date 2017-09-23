const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({input: fs.createReadStream('Indicators.csv')});

var sample = new Array();
var i = 0;
var m = 0;
var n = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
rl.on('line', (line) => { //to get input and read the file line by line
    var l = line.split(',');
    var x = "India";
    var y = '"Birth rate';
    var z = '"Death rate';
    var w1 = ' crude (per 1';
    var w2 = '000 people)"';
    var obj = {};

if(l[0] === x && (l[2] == y || l[2] ==z)){  //To come only into the required line to push the object
    //if (l[0] === x) { //To take the required data by checking in if loop

        //obj["country"] = l[0];
      //  obj["indicator"] = l[2].slice(1) + l[3] + l[4].slice(0, -1);
      if(l[2] == y){
         a = l[6];
         b = l[7];
        m++;
      }
      else if(l[2] == z){
        c = l[6];
        d = l[7];
        n++;
      }
  //  }
  if(m == n){
    obj["year"] = a;
     obj["birth"] = b;
    obj["death"] = d;
sample.push(obj);
 a = 0;
 b = 0;
 c = 0;
 d = 0;
}
}
});
rl.on('close', () => {
    fs.writeFileSync('LifeExpectancy2.json', JSON.stringify(sample));
});
