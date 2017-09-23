const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('Indicators.csv') //to get input and read the file line by line
});
var sample = new Array();
var i = 0;
rl.on('line', (line) => {
    var l = line.split(',');
    var x = [
        "Afghanistan",
        "Bangladesh",
        "China",
        "India",
        "Indonesia",
        "Iran",
        "Islamic Rep.",
        "Iraq",
        "Japan",
        "Malaysia",
        "Pakistan",
        "Arab World"
    ];
    var y = '"Life expectancy at birth';
    var z = ' male (years)"';
    var z1 = ' female (years)"';

    for (var i = 0; i < x.length; i++) { //To get insert objects in an array for each country
        if (l[0] === x[i] && l[2] === y && (l[3] === z || l[3] === z1)) { //To take the required data by checking in if loop
            var obj = {};
            obj["country"] = l[0];
            obj["indicator"] = l[2].slice(1) + l[3].slice(0, -1);
            obj["year"] = l[5];
            obj["value"] = l[6];
            sample.push(obj);

        }
    }

});
rl.on('close', () => {
    fs.writeFileSync('LifeExpectancy1.json', JSON.stringify(sample));
});
